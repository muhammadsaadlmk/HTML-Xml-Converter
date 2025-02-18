export function htmlToXml(html: string): string {
  // Simple HTML to XML conversion
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
