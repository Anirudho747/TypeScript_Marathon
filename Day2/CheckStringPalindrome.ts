import promptSync from 'prompt-sync';
const prompt = promptSync();

let str4 = prompt("  Please enter a String  ");
let str3 = str4.toLowerCase().trim();
console.log(str3);
let isPalindrome=true;

if(str3.length<1)
{
    console.log("Pleas enter a valid input")
}
else
{
    for(let i=0;i<str3.length/2;i++)
    {
        if(str3[i] !== str3[str3.length-1-i])
        {
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome)
    {
        console.log("Entered String is a Palindrome")
    }
    else
    {
        console.log("Not a Palindrome");
    }
}