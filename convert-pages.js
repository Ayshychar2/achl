const fs = require('fs');
const path = require('path');

const files = {
  about: path.join(__dirname, 'about.html'),
  hr: path.join(__dirname, 'hr.html'),
  contact: path.join(__dirname, 'contact.html'),
  certification: path.join(__dirname, 'course.html')
};

Object.entries(files).forEach(([name, filePath]) => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let mainStartIndex = content.toLowerCase().indexOf('<main>');
  let mainEndIndex = content.toLowerCase().indexOf('</main>');
  
  if (mainEndIndex === -1) {
    mainEndIndex = content.toLowerCase().indexOf('<footer');
  }
  
  if (mainStartIndex !== -1 && mainEndIndex !== -1) {
    let mainContent = content.substring(mainStartIndex + 6, mainEndIndex);
    
    // Quick fix for form in contact/hr so they don't break routing
    mainContent = mainContent.replace(/action=".*?"/gi, 'action="#"');
    
    // We will use dangerouslySetInnerHTML to bypass JSX syntax errors completely
    const componentCode = `
import React from 'react';
import Link from 'next/link';

export default function ${name.charAt(0).toUpperCase() + name.slice(1)}Page() {
  return (
    <main dangerouslySetInnerHTML={{ __html: \`${mainContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;
    
    const outDir = path.join(__dirname, 'src', 'app', name);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(outDir, 'page.js'), componentCode.trim());
    console.log(`Created page for ${name} using dangerouslySetInnerHTML`);
  } else {
    console.log(`Failed bounds in ${name}`);
  }
});
