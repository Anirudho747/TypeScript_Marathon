import promptSync from 'prompt-sync';
const prompt  = promptSync();

let str4 = prompt('Enter String ').trim();

if(str4.length > 0)
{
    let strArray4 = str4.split(" ");

    let str5: string[] = [];

    for (let i = strArray4.length - 1; i >= 0; i--)
    {
        str5 = str5.concat(strArray4[i])
    }

    for (let i = 0; i < str5.length; i++)
    {
        process.stdout.write(str5[i] + " ");
    }
}
else
{
    console.log("Pleas enter a valid input");
}