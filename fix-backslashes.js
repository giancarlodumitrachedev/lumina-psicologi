const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('d:\\PROGRAMMING\\LUMINA\\PSICOLOGI\\PROTOTIPO\\LUMINA-SAAS\\src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // We want to replace \` with ` and \$ with $
    // However, be careful not to replace legitimate escapes.
    // In React template strings, \` is just a backtick if it's literally written as \` in the source file.
    
    let newContent = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});
