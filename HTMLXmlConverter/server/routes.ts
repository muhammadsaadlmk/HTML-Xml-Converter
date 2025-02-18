import type { Express } from "express";
import { createServer } from "http";
import { ZodError } from "zod";
import { insertConversionSchema } from "@shared/schema";

// Simple HTML to XML conversion utility
function convert(html: string): string {
  // Remove DOCTYPE if present
  html = html.replace(/<!DOCTYPE[^>]*>/i, '');

  // Ensure proper XML structure
  const cleanHtml = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return `<?xml version="1.0" encoding="UTF-8"?>\n${cleanHtml}`;
}

export async function registerRoutes(app: Express) {
  app.post("/api/convert", async (req, res) => {
    try {
      const { html } = insertConversionSchema.parse(req.body);
      const xml = convert(html);
      res.json({ xml });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid input" });
      } else {
        res.status(500).json({ message: "Conversion failed" });
      }
    }
  });

  return createServer(app);
}