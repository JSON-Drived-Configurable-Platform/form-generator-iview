<template>
    <div>
        <div class="container">
            <Form :model="model" label-position="left">
                <div v-for="group in customGroupFields" :key="group.title" class="container-group">
                    <FieldGenerator
                        v-for="field in group.fields"
                        :key="field.key"
                        :field="field"
                        :inline="true"
                    />
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
import {customGroupFields, model, options} from './custom-group.config';
export default {
    data() {
        return {
            form: {
                config: JSON.stringify(customGroupFields, null, 8)
            },
            model: {},
            customGroupFields,
            options,
            paramsContainer: {
                paramsContainerTest: 'xxx'
            }
        };
    },
    mounted() {
        setTimeout(() => {
            this.$set(this.paramsContainer, 'paramsContainerTest', 'xxx-1');
            this.model = model;
            // setTimeout(() => {
            //     this.$set(this.paramsContainer, 'paramsContainerTest', 'xxx-2');
            // }, 5000);
        }, 5000);
    },
    beforeDestroy() {

    },
    methods: {
        submit() {

        },
        reset() {
            this.$refs.FormGenerator.reset();
        },
        handleChange(model, value, field) {
            console.log('handleChange', model, value, field);
        },
        handlePreview(model, value) {
            window.open(value.url, '_blank');
        },
        handleButtonEvent(e) {
            console.log('handleButtonEvent', e);
        },
        handleLabelEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = true;
            }
        },
        handleMouseEnterEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = true;
            }
        },
        handleMouseLeaveEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = false;
            }
        }
    }
};
</script>
<style lang="less">
    .container {
        margin: 10px 40px;
        width: 90%;
        &-group {
            display: flex;
            align-items: center;

            .ivu-form-item.fg-ivu-form-item {
                display: flex !important;

                .fg-ivu-select {
                    width: 200px !important;
                }
            }
        }
    }
</style>
