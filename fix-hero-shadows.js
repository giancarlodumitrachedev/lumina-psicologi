const fs = require('fs');
const path = require('path');

const clients = [
  'monica-milan',
  'paolo-gay',
  'giovanna-padalino',
  'simone-marenco',
  'angelo-paparella'
];

clients.forEach(client => {
  const filePath = path.join('clients', client, 'src', 'components', 'home', 'hero.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix "Seduta in corso" positioning
    content = content.replace(
      /className="absolute -bottom-10 -left-10 md:-left-20 bg-card p-4 rounded-2xl shadow-xl border border-border\/50 flex flex-col gap-3 w-64 z-20"/g,
      'className="absolute -bottom-6 left-2 sm:-left-6 md:-left-12 lg:-left-20 bg-card p-4 rounded-2xl shadow-xl border border-border/50 flex flex-col gap-3 w-56 sm:w-64 z-20"'
    );

    // Fix "Paziente in Sessione" positioning
    content = content.replace(
      /className="absolute top-10 -right-6 md:-right-12 bg-card px-5 py-3 rounded-xl shadow-lg border border-border\/50 flex items-center gap-3 z-20"/g,
      'className="absolute top-6 right-2 sm:-right-4 md:-right-8 lg:-right-12 bg-card px-4 sm:px-5 py-3 rounded-xl shadow-lg border border-border/50 flex items-center gap-2 sm:gap-3 z-20"'
    );

    fs.writeFileSync(filePath, content);
  }
});

console.log("Hero shadows and alignment fixed for mobile!");
