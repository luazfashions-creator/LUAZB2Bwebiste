import fs from 'fs';

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace "{t("key")}" with t("key")
content = content.replace(/"\{t\("([^"]+)"\)\}"/g, 't("$1")');

fs.writeFileSync(path, content);
