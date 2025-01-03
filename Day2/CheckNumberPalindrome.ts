import promptSync from 'prompt-sync';
const prompt = promptSync();

let testNum = Number(prompt("Enter Number "))
if(isNaN(testNum) || (testNum<1))
{
    console.log("Please enter a Valid Input");
}
else {
    let copyCat = testNum, remainder = 0, newNumber = 0;

    while (testNum > 0) {
        remainder = Math.floor(testNum % 10);
        newNumber = Math.floor((newNumber * 10) + remainder);
        testNum = Math.floor(testNum / 10);
    }

    if (newNumber === copyCat) {
        console.log("Its a Palindrome")
    } else {
        console.log("Not a Palindrome")
    }
}