import { spawn } from 'child_process';

const rawArgs = process.argv.slice(2);
const args = [];
for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === '--host') {
    i++; // skip the value
    continue;
  }
  if (rawArgs[i].startsWith('--host=')) {
    continue;
  }
  args.push(rawArgs[i]);
}

const port = process.env.PORT || '3000';
const child = spawn('npx', ['next', 'dev', '-H', '0.0.0.0', '-p', port, ...args], { 
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
