export default {
    name: 'certificate',
    type: 'document',
    title: 'Certification',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Course Name'
        },
        {
            name: 'instName',
            type: 'string',
            title: 'Institute Name'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Course type'
        },
        {
            name: 'cerLink',
            type: 'string',
            title: 'Certificate Link'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date',
            options: { dateFormat: 'YYYY-MM-DD' }
        },
    ]
}