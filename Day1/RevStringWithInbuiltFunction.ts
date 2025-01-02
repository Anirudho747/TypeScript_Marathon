import promptSync from 'prompt-sync';
const prompt = promptSync();

let str = prompt('Enter the String which needs to be reversed ');

console.log(str);

let strArray  = str.split('');

console.log(strArray.reverse().join(''));
