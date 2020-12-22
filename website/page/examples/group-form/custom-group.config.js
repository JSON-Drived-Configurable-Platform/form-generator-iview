export const customGroupFields = [
    {
        fields: [
            {
                label: '单位汇总',
                width: '400px',
                type: 'Radio',
                subtype: 'button',
                model: 'unit',
                required: true,
                options: [
                    {
                        label: '合记',
                        value: '1'
                    },
                    {
                        label: '分日',
                        value: '2'
                    },
                    {
                        label: '分时',
                        value: '3'
                    }
                ]
            }
        ],
    },
    {
        fields: [
            {
                label: '日期选择',
                width: '400px',
                type: 'DatePicker',
                subtype: 'datetimerange',
                model: 'datetimerange',
                placeholder: '',
                required: true,
            },
            {
                type: 'Checkbox',
                width: '400px',
                model: 'checkbox',
                options: [
                    {
                        label: '比较',
                        value: '1'
                    }
                ],
                required: true,
            },
        ],
    },
    {
        fields: [
            {
                label: 'APP筛选',
                width: '300px',
                placeholder: 'APP筛选APP筛选',
                type: 'Select',
                model: 'app',
                required: true,
                api: '/selectApi',
                apiParams: ['radio', 'paramsContainerTest'],
            },
            {
                type: 'Select',
                width: '200px',
                placeholder: 'APP筛选APP筛选',
                model: 'channel',
                required: true,
                api: '/selectApi',
                apiParams: ['radio', 'paramsContainerTest'],
            }
        ],
    }

];

export const model = {
    unit: '',
    datetimerange: ''
};

export const options = {
    labelPostion: 'left'
};
