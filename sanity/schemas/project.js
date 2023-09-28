export default {
    name: 'project',
    type: 'document',
    title: 'Project',
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
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'name' }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            options: { hotspot: true },
            of: [{ type: 'image' }]
        },
        {
            name: 'codeLink',
            type: 'string',
            title: 'Github Link'
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'projectCate' }]
        }
    ]
}