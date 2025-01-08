const schema = {
    name: "source",
    title: "Source",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            require,
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
        },
        {
            name: "downloadUrl",
            title: "Download Url",
            type: "url",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "views",
            title: "Views",
            type: "number",
            initialValue: 0
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            options: {
                list: [
                    "All",
                    "Platforms",
                    "Front-End development",
                    "Back-end development",
                    "Others"
                ]
            }
        }
    ]
}

export default schema