export default {
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        {
            name: 'instName',
            type: 'string',
            title: 'Institute Name'
        },
        {
            name: 'degree',
            type: 'string',
            title: 'Degree Name'
        },
        {
            name: 'major',
            type: 'string',
            title: 'Major'
        },
        {
            name: 'grade',
            type: 'string',
            title: 'Grade'
        },
        {
            name: 'startDate',
            type: 'date',
            title: 'Start Date',
            options: { dateFormat: 'YYYY-MM-DD' }
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date',
            options: { dateFormat: 'YYYY-MM-DD' }
        }
    ]
}