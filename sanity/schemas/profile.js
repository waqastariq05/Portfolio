export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: "Image",
            options: { hotspot: true },
        },
        {
            name: 'resume',
            type: 'file',
            title: 'Resume',
        }
    ]
}