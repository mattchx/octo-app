import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { users } from "./users"

export const links = sqliteTable('link', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description'),
  url: text('url'),
});

export type InsertLink = typeof links.$inferInsert;
export type SelectLink= typeof links.$inferSelect;