import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Todo',
  name: 'todo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      name: 'isComplete',
      title: 'Completed',
      type: 'boolean',
    }),
  ],
  initialValue: {
    isComplete: false,
  },
})
