import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
  // auto increments on all new entities of course
  id: serial('id').primaryKey(),
  // notNull() means its required
  title: text('title').notNull(),
  imageSrc: text('image_src').notNull(),
})
