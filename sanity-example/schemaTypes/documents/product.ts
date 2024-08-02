import {defineType, defineField, defineArrayMember} from 'sanity'

const GROUPS = [
  {
    name: 'editorial',
    title: 'Editorial',
  },
]

export const product = defineType({
  type: 'document',
  name: 'product',
  groups: GROUPS,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Main', value: 'main'},
          {title: 'Cross', value: 'cross'},
          {title: 'Recommend', value: 'recommend'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      type: 'string',
      name: 'price',
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      type: 'image',
      name: 'mainImage',
      options: {hotspot: true},
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'body',
      group: 'editorial',
    }),
    defineField({
      name: 'fit',
      title: 'Fit & Size',
      type: 'body',
      group: 'editorial',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'string',
              options: {
                list: [
                  {title: 'XS', value: 'XS'},
                  {title: 'S', value: 'S'},
                  {title: 'M', value: 'M'},
                  {title: 'L', value: 'L'},
                  {title: 'XL', value: 'XL'},
                ],
              },
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      type: 'array',
      name: 'tags',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
  ],
})
