export default {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: "Image",
            options: { hotspot: true },
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        }
    ]
}