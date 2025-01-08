import promptSync from 'prompt-sync';
const prompt = promptSync();

let array6:number[] =  [];
array6.length = 7;

let array7:number[] =  [];
array7.length = 7;

for(let i=0;i<array6.length;i++)
{
    array6[i] = Number(prompt(`Enter Value for ${i+1} position `));
}

for(let i=0;i<array7.length;i++)
{
    array7[i] = Number(prompt(`Enter Value for ${i+1} position `));
}

array6 = array6.concat(array6);

let str2 = array7.join('').toString();
let str4 = array6.join('').toString();

if(str4.includes(str2))
{
    console.log("Its a Vallid Rotation")
}
else
{
    console.log("Not a Rotation")
}