const fs = require('fs');

let html = fs.readFileSync('../old-site/index.html', 'utf8');

// Basic HTML to JSX conversions
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<img(.*?)>/g, (match, p1) => {
  if (p1.endsWith('/')) return match;
  return `<img${p1} />`;
});
html = html.replace(/<input(.*?)>/g, (match, p1) => {
  if (p1.endsWith('/')) return match;
  return `<input${p1} />`;
});
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
  // Rough convert for style="margin-top: 10px;" to style={{ marginTop: '10px' }}
  // It's brittle but handles simple inline styles. Let's just remove simple inline styles or skip for now.
  return match; // We will fix inline styles manually if there are errors, or just ignore.
});

// Extract everything inside <main>
const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
let mainContent = mainMatch ? mainMatch[1] : '';

const reactCode = `
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        ${mainContent}
      </main>
      <footer className="site-footer">
        {/* Footer content goes here - simplifying for now or you can copy it manually */}
        <div className="footer-inner">
           <div className="footer-column">
              <a href="/" className="logo">ACHL Learning</a>
              <p>Critical Thinking in the era of AI</p>
           </div>
        </div>
      </footer>
    </>
  );
}
`;

fs.writeFileSync('src/app/page.js', reactCode);
console.log('Done!');
