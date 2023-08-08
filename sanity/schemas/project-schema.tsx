import { defineArrayMember } from "sanity";

const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string'}],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                { 
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',

            of: [
                defineArrayMember({
                    title: 'Block',
                    type: 'block',
                    // Styles let you set what your user can mark up blocks with. These
                    // correspond with HTML tags, but you can set any title or value
                    // you want and decide how you want to deal with it where you want to
                    // use your content.
                    styles: [
                      {title: 'Normal', value: 'normal'},
                      {title: 'H1', value: 'h1'},
                      {title: 'H2', value: 'h2'},
                      {title: 'H3', value: 'h3'},
                      {title: 'H4', value: 'h4'},
                      {title: 'Quote', value: 'blockquote'},
                    ],
                    lists: [
                        {title: 'Bullet', value: 'bullet'},
                        {title: 'Number', value: 'number'},
                
                ],
                    // Marks let you mark up inline text in the block editor.
                    marks: {
                      // Decorators usually describe a single property – e.g. a typographic
                      // preference or highlighting by editors.
                      decorators: [
                        {title: 'Strong', value: 'strong'},
                        {title: 'Emphasis', value: 'em'},
                      ],
                      // Annotations can be any object structure – e.g. a link or a footnote.
                      annotations: [
                        {
                          title: 'URL',
                          name: 'link',
                          type: 'object',
                          fields: [
                            {
                              title: 'URL',
                              name: 'href',
                              type: 'url',
                            },
                          ],
                        },
                      ],
                    },
                  }),
                  // You can add additional types here. Note that you can't use
                  // primitive types such as 'string' and 'number' in the same array
                  // as a block type.
                  defineArrayMember({
                    type: 'image'
                  }),
                ],
        }
    ]
};

export default project