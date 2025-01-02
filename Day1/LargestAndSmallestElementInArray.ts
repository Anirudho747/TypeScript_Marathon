let a1 = [10,210,30,140,50,60,170,580,90,1];

a = a.sort((a,b)=>{return a-b});

console.log("smallest ",a[0]);
console.log("Largest ",a[a.length-1]);

a = a.sort((a,b)=>{return b-a});

console.log("Largest ",a[0]);
console.log("Smallest ",a[a.length-1]);