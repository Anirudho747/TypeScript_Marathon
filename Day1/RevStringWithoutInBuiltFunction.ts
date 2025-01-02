import promptSync from 'prompt-sync';

const prompt = promptSync();
let str = prompt("Enter String").toLowerCase();

for(let i = str.length-1;i>=0;i--)
{
    process.stdout.write(str[i]);
}

