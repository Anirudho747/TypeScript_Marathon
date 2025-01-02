import promptSync from 'prompt-sync';

const prompt = promptSync();
let str = prompt("Enter String");
if(str.length < 2){
    console.log("Please enter Strings lomger than 1 character")
}
else {
    for (let i = str.length - 1; i >= 0; i--) {
        process.stdout.write(str[i]);
    }
}
