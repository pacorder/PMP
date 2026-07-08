import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// List of HTML pages to serve with clean URLs and fallback paths
const pages = [
  { route: 'tips', file: 'tips.html' },
  { route: 'blog', file: 'blog.html' },
  { route: 'pmpexam1', file: 'pmpexam1.html' },
  { route: 'contacto', file: 'contacto.html' },
  { route: 'privacidad', file: 'privacidad.html' },
  { route: 'terminos', file: 'terminos.html' },
  { route: 'cookies', file: 'cookies.html' }
];

// Root page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Register explicit routes for each page (both clean and extension URLs)
pages.forEach(page => {
  app.get(`/${page.route}`, (req, res) => {
    res.sendFile(path.join(__dirname, page.file));
  });
  app.get(`/${page.file}`, (req, res) => {
    res.sendFile(path.join(__dirname, page.file));
  });
});

// Fallback to index.html for any other unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
