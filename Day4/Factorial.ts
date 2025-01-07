import promptSync from 'prompt-sync';
const prompt = promptSync();

let num = Number(prompt("Enter number for which you want factorial "));

let multiple = 1;
while(num>1)
{
    multiple = multiple*num;
    num = num-1;
}

console.log(multiple);