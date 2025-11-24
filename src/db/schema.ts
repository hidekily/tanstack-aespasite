// src/db/schema.ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Tabela de usuários (para Better Auth)
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }),
  image: text('image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
})

// Tabela de sessões (para Better Auth)
export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
})

// Tabela de membros do aespa (exemplo do seu projeto)
export const members = sqliteTable('members', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nome: text('nome').notNull(),
  idade: integer('idade').notNull(),
  posicao: text('posicao').notNull(),
  imagemClasse: text('imagem_classe').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
})

// Exportar tipos TypeScript
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type Session = typeof sessions.$inferSelect
export type Member = typeof members.$inferSelect
export type NewMember = typeof members.$inferInsert