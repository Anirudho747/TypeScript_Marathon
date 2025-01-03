import promptSync from 'prompt-sync';
const prompt = promptSync();

let strArray1 : number[] = [];
strArray1.length = 7;

for(let i=0;i<strArray1.length;i++)
{
    strArray1[i] = Number(prompt(`Enter value for ${i} `))
}

let max = Math.max(...strArray1);
let min = Math.min(...strArray1);

console.log(max," - ",min)