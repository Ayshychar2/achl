const fs = require('fs');

let content = fs.readFileSync('src/app/page.js', 'utf8');

// Remove HTML comments
content = content.replace(/<!--[\s\S]*?-->/g, '');

// Fix style="background-image: url('hero-bg.jpg');"
content = content.replace(/style="background-image:\s*url\('([^']+)'\);?"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');

// Fix style="color: red" -> style={{ color: "red" }}
// We'll just remove other inline styles since we can't reliably parse them all simply, or we can convert the known ones.
// In the original HTML, inline styles used:
// style="margin-top: 10px;"
content = content.replace(/style="([^"]+)"/g, (match, p1) => {
  if (p1.includes('background-image')) return match; // already handled
  // generic simple removal for others, or convert to object.
  const parts = p1.split(';');
  let styleObj = '';
  parts.forEach(p => {
    if (!p.trim()) return;
    const [key, val] = p.split(':');
    if (!key || !val) return;
    const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    styleObj += `${camelKey}: '${val.trim()}', `;
  });
  return `style={{ ${styleObj} }}`;
});

// Import Collaboration component
if (!content.includes('import Collaboration')) {
  content = content.replace(/import Header from '@\/components\/Header';/, "import Header from '@/components/Header';\nimport Collaboration from '@/components/Collaboration';");
}

// Insert Collaboration component before the footer or after Testimonials
content = content.replace(/<\/section>\s*(<!-- ===== FOOTER ===== -->|<\/main>)/, '</section>\n\n<Collaboration />\n\n$1');

fs.writeFileSync('src/app/page.js', content);
console.log('Fixed page.js!');
