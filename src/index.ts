const world = 'world';

function hello(who: string): string {
  return `Hello ${who}!`;
}

console.log(hello(world), " ", process.argv.length);

if (process.argv.length < 3) {
    console.error('Expected at least one filename as a CLI argument.');
    process.exit(1);
}
