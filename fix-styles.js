/* eslint-disable */
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Remove all dark: classes (e.g., dark:bg-black, dark:text-white, dark:border-white/10)
  // Matches "dark:..." up to a space, quote, or backtick
  content = content.replace(/dark:[a-zA-Z0-9\-\/\[\]\(\)\.]+/g, '');
  
  // Clean up double spaces caused by removing classes
  content = content.replace(/ +/g, ' ').replace(/ "/g, '"').replace(/" /g, '"');

  // 2. Make headings more responsive. 
  // e.g. text-4xl md:text-5xl -> text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');

  // 3. Any specific bg-[var(--color-black)] should be changed to bg-white
  content = content.replace(/bg-\[var\(--color-black\)]/g, 'bg-white');

  // 4. Any bg-gray-900 should be bg-gray-50
  content = content.replace(/bg-gray-900/g, 'bg-gray-50');

  // 5. Change text-white to text-gray-900 if it was paired with dark backgrounds
  // We have to be careful with text-white if it is inside primary buttons!
  // It's safer to leave text-white on primary buttons, but wait, primary buttons have bg-[var(--color-primary)] which is red, so text-white is correct.
  // What about text-gray-300 on light bg? It will be invisible. Change text-gray-300 to text-gray-600.
  // Wait, if it was text-gray-300, it was meant for dark mode. Let's replace text-gray-300 with text-gray-600
  content = content.replace(/text-gray-300/g, 'text-gray-600');
  content = content.replace(/text-gray-400/g, 'text-gray-600');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
walkDir(path.join(__dirname, 'components'), processFile);
console.log('Done');
