// src/db/index.ts
import Database from 'better-sqlite3'
import * as schema from './schema'
import { drizzle } from 'drizzle-orm/better-sqlite3';

// Criar conexão com SQLite
const sqlite = new Database('./database.db')

// Criar instância do Drizzle
export const db = drizzle(sqlite, { schema })

// Exportar schema para usar em outros lugares
export { schema }