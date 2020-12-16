<template>
    <div>
        <Select
            v-if="remote"
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
            oldValues: []
        };
    },
    computed: {
        remote() {
            return this.field.remote && !!this.optionsApi;
        },
        filterable() {
            return this.field.filterable || this.remote;
        },
        clearable() {
            return !this.field.multiple ? this.field.clearable : false;
        },
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
            if (this.field.selectAll) {
                uniqeOptions.unshift({
                    label: '全部',
                    value: 'all'
                });
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
            
            if (this.field.multiple && value === undefined || value === null) {
                value = [];
            }

            const valArr = [];
            this.computedOptions.forEach(item => {
                valArr.push(item.value);
            });

            let valueData = this.FormInstance.model[this.field.model];
            // 全选
            if (value.includes('all')) {
                this.$set(this.FormInstance.model, this.field.model, valArr);
                this.oldValues = valArr;
            }

            // 点击其他取消全选
            if (value.includes('all') && value.length === this.computedOptions.length - 1) {
                if (value[0] === 'all') {
                    const duplicatedValues = [...new Set(valueData)].filter(item => value.includes(item)).splice(1);
                    this.$set(this.FormInstance.model, this.field.model, duplicatedValues);
                    this.oldValues = [];
                }
            }

            // 反选
            if (value.length === this.oldValues.length - 1 && !value.includes('all')) {
                value = [];
                this.oldValues = [];
                
            }
            // 当其他全部选择时全选
            if (valueData.length === this.computedOptions.length - 1 && this.oldValues.length === 0) {
                let unValue = valueData.unshift('all');
                this.$set(this.FormInstance.model, this.field.model, unValue);
                this.oldValues = valueData;
            }
            if (value.includes('all')) {
                this.$emit('on-change', this.field.model, this.FormInstance.model[this.field.model], null, this.field);
            } else {
                this.$emit('on-change', this.field.model, value, null, this.field);
            }
            
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
        }
    }
};
</script>
