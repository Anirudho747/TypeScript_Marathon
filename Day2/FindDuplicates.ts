import promptSync from 'prompt-sync';
const prompt  = promptSync();

let str4 = prompt('Enter String ').trim();

let chars:string[]=[];
let dups:string[]=[];

if(str4.length > 0)
{
   for(let i=0;i<str4.length;i++)
   {
        if(chars.includes(str4[i]))
        {
            if(!(dups.includes(str4[i])))
            {
                dups.push(str4[i]);
            }
        }
        else {
           chars.push(str4[i]);
       }
   }

   if(dups.length === 0)
   {
       console.log("No Duplicates found")
   }
   else
   {
       console.log(dups);
   }
}
else
{
    console.log("Pleas enter a valid input");
}