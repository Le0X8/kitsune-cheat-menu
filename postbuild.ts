import * as fs from 'fs';

fs.writeFileSync('dist/cheat.js', `(()=>{${fs.readFileSync('dist/cheat.js', 'utf8')}})();`, 'utf8');