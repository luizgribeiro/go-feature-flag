package ffclient

import (
	"github.com/google/go-cmp/cmp"
	"github.com/stretchr/testify/assert"
	"io/ioutil"
	"log"
	"testing"

	"github.com/thomaspoignant/go-feature-flag/ffuser"
	"github.com/thomaspoignant/go-feature-flag/internal/cache"
	"github.com/thomaspoignant/go-feature-flag/internal/flags"
)

const RFC3339Regex = "([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([Zz])|([\\+|\\-]([01][0-9]|2[0-3]):[0-5][0-9]))"

func TestBoolVariation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       true,
			False:      false,
			Default:    true,
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       false,
			False:      false,
			Default:    false,
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue bool
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        bool
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: true,
				flagCache:    flagCacheMock,
			},
			want:        true,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"true\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: true,
				flagCache:    nil,
			},
			want:        true,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"true\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: true,
				flagCache:    flagCacheMock,
			},
			want:        true,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"true\"\n",
		},
		{
			name: "Get default value, rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: true,
				flagCache:    flagCacheMock,
			},
			want:        true,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"true\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: true,
				flagCache:    flagCacheMock,
			},
			want:        true,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"true\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: true,
				flagCache:    flagCacheMock,
			},
			want:        false,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"false\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: true,
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       "yyy",
						False:      "xxx",
						Default:    "zzz",
					},
				},
			},
			want:        true,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"true\"\n",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)
			cache.FlagsCache = tt.args.flagCache
			got, err := BoolVariation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("BoolVariation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("BoolVariation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}

func TestFloat64Variation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       120.0,
			False:      121.0,
			Default:    119.0,
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       119.0,
			False:      119.0,
			Default:    119.0,
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue float64
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        float64
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 120.0,
				flagCache:    flagCacheMock,
			},
			want:        120.0,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"120\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118.0,
				flagCache:    nil,
			},
			want:        118.0,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"118\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118.0,
				flagCache:    flagCacheMock,
			},
			want:        118.0,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"118\"\n",
		},
		{
			name: "Get default value, rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118.0,
				flagCache:    flagCacheMock,
			},
			want:        119.0,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"119\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: 118.0,
				flagCache:    flagCacheMock,
			},
			want:        120.0,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"120\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: 118.0,
				flagCache:    flagCacheMock,
			},
			want:        121.0,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"121\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: 118.0,
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       "yyy",
						False:      "xxx",
						Default:    "zzz",
					},
				},
			},
			want:        118.0,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"118\"\n",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)

			cache.FlagsCache = tt.args.flagCache
			got, err := Float64Variation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("Float64Variation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("Float64Variation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}

func TestJSONArrayVariation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       []interface{}{"true"},
			False:      []interface{}{"false"},
			Default:    []interface{}{"default"},
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       []interface{}{"true"},
			False:      []interface{}{"true"},
			Default:    []interface{}{"true"},
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue []interface{}
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        []interface{}
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: []interface{}{"toto"},
				flagCache:    flagCacheMock,
			},
			want:        []interface{}{"toto"},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"\\[toto\\]\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: []interface{}{"toto"},
				flagCache:    nil,
			},
			want:        []interface{}{"toto"},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"\\[toto\\]\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: []interface{}{"toto"},
				flagCache:    flagCacheMock,
			},
			want:        []interface{}{"toto"},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"\\[toto\\]\"\n",
		},
		{
			name: "Get default value, rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: []interface{}{"toto"},
				flagCache:    flagCacheMock,
			},
			want:        []interface{}{"default"},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"\\[default\\]\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: []interface{}{"toto"},
				flagCache:    flagCacheMock,
			},
			want:        []interface{}{"true"},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"\\[true\\]\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: []interface{}{"toto"},
				flagCache:    flagCacheMock,
			},
			want:        []interface{}{"false"},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"\\[false\\]\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: []interface{}{"toto"},
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       "yyy",
						False:      "xxx",
						Default:    "zzz",
					},
				},
			},
			want:        []interface{}{"toto"},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"\\[toto\\]\"\n",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)

			cache.FlagsCache = tt.args.flagCache
			got, err := JSONArrayVariation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("JSONArrayVariation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !cmp.Equal(got, tt.want) {
				t.Errorf("JSONArrayVariation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}

func TestJSONVariation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       map[string]interface{}{"true": true},
			False:      map[string]interface{}{"false": true},
			Default:    map[string]interface{}{"default": true},
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       map[string]interface{}{"true": true},
			False:      map[string]interface{}{"true": true},
			Default:    map[string]interface{}{"true": true},
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue map[string]interface{}
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        map[string]interface{}
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    flagCacheMock,
			},
			want:        map[string]interface{}{"default-notkey": true},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"map\\[default-notkey:true\\]\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    nil,
			},
			want:        map[string]interface{}{"default-notkey": true},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"map\\[default-notkey:true\\]\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    flagCacheMock,
			},
			want:        map[string]interface{}{"default-notkey": true},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"map\\[default-notkey:true\\]\"\n",
		},
		{
			name: "Get default value, rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    flagCacheMock,
			},
			want:        map[string]interface{}{"default": true},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"map\\[default:true\\]\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    flagCacheMock,
			},
			want:        map[string]interface{}{"true": true},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"map\\[true:true\\]\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache:    flagCacheMock,
			},
			want:        map[string]interface{}{"false": true},
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"map\\[false:true\\]\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: map[string]interface{}{"default-notkey": true},
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       1,
						False:      2,
						Default:    3,
					},
				},
			},
			want:        map[string]interface{}{"default-notkey": true},
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"map\\[default-notkey:true\\]\"\n",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)

			cache.FlagsCache = tt.args.flagCache
			got, err := JSONVariation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("JSONVariation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !cmp.Equal(got, tt.want) {
				t.Errorf("JSONVariation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}

func TestStringVariation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       "true",
			False:      "false",
			Default:    "default",
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       "true",
			False:      "true",
			Default:    "true",
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue string
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        string
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:        "default-notkey",
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"default-notkey\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    nil,
			},
			want:        "default-notkey",
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"default-notkey\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:        "default-notkey",
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"default-notkey\"\n",
		},

		{
			name: "Get default value, rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:        "default",
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"default\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:        "true",
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"true\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:        "false",
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"false\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: "default-notkey",
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       1,
						False:      2,
						Default:    3,
					},
				},
			},
			want:        "default-notkey",
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"default-notkey\"\n",
		},
		{
			name: "No log",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: "default-notkey",
				flagCache:    flagCacheMock,
			},
			want:    "true",
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)

			cache.FlagsCache = tt.args.flagCache
			got, err := StringVariation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("StringVariation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("StringVariation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}

func TestIntVariation(t *testing.T) {
	flagCacheMock := map[string]flags.Flag{
		"test-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       120,
			False:      121,
			Default:    119,
		},
		"disable-flag": {
			Rule:       "anonymous eq true",
			Percentage: 50,
			True:       120,
			False:      120,
			Default:    120,
			Disable:    true,
		},
	}

	type args struct {
		flagKey      string
		user         ffuser.User
		defaultValue int
		flagCache    map[string]flags.Flag
	}
	tests := []struct {
		name        string
		args        args
		want        int
		wantErr     bool
		expectedLog string
	}{
		{
			name: "Get default value if flag disable",
			args: args{
				flagKey:      "disable-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 125,
				flagCache:    flagCacheMock,
			},
			want:        125,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"disable-flag\", value=\"125\"\n",
		},
		{
			name: "Get error when not init",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118,
				flagCache:    nil,
			},
			want:        118,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"118\"\n",
		},
		{
			name: "Get default value with key not exist",
			args: args{
				flagKey:      "key-not-exist",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118,
				flagCache:    flagCacheMock,
			},
			want:        118,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"key-not-exist\", value=\"118\"\n",
		},
		{
			name: "Get default value rule not apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key"),
				defaultValue: 118,
				flagCache:    flagCacheMock,
			},
			want:        119,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"119\"\n",
		},
		{
			name: "Get true value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key"),
				defaultValue: 118,
				flagCache:    flagCacheMock,
			},
			want:        120,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key\", flag=\"test-flag\", value=\"120\"\n",
		},
		{
			name: "Get false value, rule apply",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewAnonymousUser("random-key-ssss1"),
				defaultValue: 118,
				flagCache:    flagCacheMock,
			},
			want:        121,
			wantErr:     false,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"121\"\n",
		},
		{
			name: "Get default value, when rule apply and not right type",
			args: args{
				flagKey:      "test-flag",
				user:         ffuser.NewUser("random-key-ssss1"),
				defaultValue: 118,
				flagCache: map[string]flags.Flag{
					"test-flag": {
						Rule:       "anonymous eq true",
						Percentage: 50,
						True:       "yyy",
						False:      "xxx",
						Default:    "zzz",
					},
				},
			},
			want:        118,
			wantErr:     true,
			expectedLog: "\\[" + RFC3339Regex + "\\] user=\"random-key-ssss1\", flag=\"test-flag\", value=\"118\"\n",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// init logger
			file, _ := ioutil.TempFile("", "log")
			logger = log.New(file, "", 0)

			cache.FlagsCache = tt.args.flagCache
			got, err := IntVariation(tt.args.flagKey, tt.args.user, tt.args.defaultValue)
			cache.FlagsCache = nil

			if (err != nil) != tt.wantErr {
				t.Errorf("IntVariation() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("IntVariation() got = %v, want %v", got, tt.want)
			}

			if tt.expectedLog != "" {
				content, _ := ioutil.ReadFile(file.Name())
				assert.Regexp(t, tt.expectedLog, string(content))
			}
			// clean logger
			logger = nil
			file.Close()
		})
	}
}
