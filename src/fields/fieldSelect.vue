<template>
    <div>
        <Select
            v-if="remote"
            :class="classes"
            :value="value"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :placeholder="field.placeholder"
            :remote="remote"
            :filterable="filterable || false"
            :loading="loading"
            :remote-method="remoteMethod"
            :prefix="field.prefix"
            :max-tag-count="field.maxTagCount"
            :max-tag-placeholder="field.maxTagPlaceholder"
            @on-change="handleChange"
        >
            <template v-for="item in computedOptions">
                <OptionGroup
                    v-if="item.groupOptions"
                    :key="item.groupLabel"
                    :label="item.groupLabel"
                >
                    <Option
                        v-for="groupItem in item.groupOptions"
                        :key="groupItem.value"
                        :value="groupItem.value"
                    >{{ groupItem.label }}</Option>
                </OptionGroup>
                <Option
                    v-else
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </template>
        </Select>
        <Select
            v-else
            :value="value"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :transfer="field.transfer || false"
            :placeholder="field.placeholder"
            :filterable="filterable || false"
            :loading="loading"
            :prefix="field.prefix"
            :max-tag-count="field.maxTagCount"
            :max-tag-placeholder="field.maxTagPlaceholder"
            @on-change="handleChange"
        >
            <template v-if="field.selectAll && field.multiple">
                <OptionGroup :class="selectAllGroupClasses" label="全选:">
                    <Checkbox
                        v-model="isSelectedAll"
                        :class="selectAllCheckboxClasses"
                        :indeterminate="selectAllIndeterminate"
                        @on-change="handleSelectAllChange"
                    />
                </OptionGroup>
                <Divider :class="selectAllDividerClasses" />
            </template>
            <template v-for="item in computedOptions">
                <OptionGroup
                    v-if="item.groupOptions"
                    :key="item.groupLabel"
                    :label="item.groupLabel"
                >
                    <Option
                        v-for="groupItem in item.groupOptions"
                        :key="groupItem.value"
                        :value="groupItem.value"
                    >{{ groupItem.label }}</Option>
                </OptionGroup>
                <Option
                    v-else
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </template>
        </Select>
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            loading: false,
            options: [],
            extraOptions: [],
            isSelectedAll: false,
            selectAllIndeterminate: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        selectAllGroupClasses() {
            return `${this.classes}-select-all-group`;
        },
        selectAllCheckboxClasses() {
            return `${this.classes}-select-all-checkbox`;
        },
        selectAllDividerClasses() {
            return `${this.classes}-select-all-divider`;
        },
        remote() {
            return this.field.remote && !!this.optionsApi;
        },
        filterable() {
            return this.field.filterable || this.remote;
        },
        clearable() {
            return !this.field.multiple ? this.field.clearable : false;
        },
        // todo: uniqe caculate should consider groupOptions
        computedOptions() {
            let options = this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
            if (this.extraOptions) {
                options = this.extraOptions.concat(options);
            }

            const uniqeOptions = [];
            const uniqeOptionsMap = {};
            for (let i = 0; i < options.length; i++) {
                const currentOption = options[i];
                if (!uniqeOptionsMap[currentOption.value]) {
                    uniqeOptions.push(currentOption);
                    uniqeOptionsMap[currentOption.value] = true;
                }
            }
            return uniqeOptions;
        },
        optionsApi() {
            return this.field.api || !Array.isArray(this.field.options) ? this.field.options : '';
        },
        extraOptionsApi() {
            return !Array.isArray(this.field.extraOptions) ? this.field.extraOptions : '';
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
        },
        allValue() {
            return this.computedOptions.map(item => item.value) || [];
        }
    },
    created() {
        // local
        if(Array.isArray(this.field.extraOptions)) {
            this.extraOptions = this.field.extraOptions;
        }
        // remote
        if (this.extraOptionsApi) {
            const params = {
                values: this.value
            };
            this.requestMethod('get', this.extraOptionsApi, params).then(res => {
                this.extraOptions = res.data;
            });
        }
    },
    methods: {
        handleChange(value) {
            if (value === undefined || value === null) {
                value = '';
            }
            if (this.field.selectAll && this.field.multiple) {
                if (value.length > 0 && value.length < this.allValue.length) {
                    this.selectAllIndeterminate = true;
                }
                else {
                    this.selectAllIndeterminate = false;
                }
                if (value.length === this.allValue.length) {
                    this.isSelectedAll = true;
                }
                else {
                    this.isSelectedAll = false;
                }
            }
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        remoteMethod(query) {
            if (!this.remote) {
                return;
            }
            this.getRemoteOptions(
                {
                    [this.field.model]: query
                }
            );
        },
        /**
         * @param {boolean} selectAll is select all
         */
        handleSelectAllChange(selectAll) {
            if (selectAll) {
                this.selectAll();
                return;
            }
            this.removeAll();
        },

        selectAll() {
            const value = this.allValue;
            this.$emit('on-change', this.field.model, value, null, this.field);
        },

        removeAll() {
            this.$emit('on-change', this.field.model, [], null, this.field);
        }
    }
};
</script>
