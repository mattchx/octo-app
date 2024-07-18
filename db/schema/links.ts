import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from "./users"

export const linksTable = sqliteTable('links', {
  id: integer('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description'),
  url: text('url'),
});

// export type InsertLink = typeof linksTable.$inferInsert;
// export type SelectLink= typeof linksTable.$inferSelect;