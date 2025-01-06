import promptSync from 'prompt-sync';
const prompt = promptSync();

let str5 = prompt('Enter String ').toLowerCase().trim();

if(str5.length > 2)
{
    let newStr = [""];
    let dup = [""];

    for(let i=0;i<str5.length;i++)
    {
        if(!newStr.includes(str5[i]))
        {
            newStr.push(str5[i]);
        }
        else
        {
            if(!dup.includes(str5[i]))
            {
                dup.push(str5[i]);
            }
        }
    }

    console.log("duplicates are ",dup.join('').toString());
    console.log("removed duplicates ",newStr.join('').toString());
}
else
{
    console.log("Please enter valid input")
}
