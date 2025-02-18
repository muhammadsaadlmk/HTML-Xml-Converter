import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const conversions = pgTable("conversions", {
  id: serial("id").primaryKey(),
  html: text("html").notNull(),
  xml: text("xml").notNull(),
});

export const insertConversionSchema = createInsertSchema(conversions);

export type InsertConversion = z.infer<typeof insertConversionSchema>;
export type Conversion = typeof conversions.$inferSelect;
