import promptSync from 'prompt-sync';
const prompt = promptSync();

let testNum = Number(prompt("Enter Test Num "));
let divider = Number(prompt("Enter Divider Num "));
let remainder = 1;

while((remainder === 0) && (testNum > 1))
{
    remainder = testNum % divider;
    testNum = testNum / divider;
}

if(remainder === 0)
{
    console.log(testNum," is a power of ",divider);
}
else
{
    console.log(testNum," is not a power of ",divider);
}