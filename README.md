# HTML to XML Converter

A web-based tool for converting HTML to XML with integrated ad monetization and responsive design.

## Features

- Real-time HTML to XML conversion
- Syntax highlighting for both HTML and XML
- Responsive design for all screen sizes
- Integrated ad monetization
- Copy to clipboard functionality

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- CodeMirror for code editing
- Express.js backend
- Adstera for monetization

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/html-to-xml-converter.git
cd html-to-xml-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

### GitHub Pages Deployment

1. Update `vite.config.ts` to include your repository name:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of the config
})
```

2. Create a deployment script in your `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

### Alternative Deployment Options

You can also deploy to:
- Vercel
- Netlify
- Any static hosting service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
