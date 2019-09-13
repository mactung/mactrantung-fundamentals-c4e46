let flockSheep=[5,7,300,90,24,50,75];
console.log(`Hello, My name is Tung. There are my flock sheep :${flockSheep} `);
let max=flockSheep[0];

for (let i=1;i<=flockSheep.length;i++){
    
    if (max<flockSheep[i]) {
        max=flockSheep[i];
        a=i;
    }
}
console.log(`My biggest sheep has size ${max} let shear it`);
flockSheep[a]=8;
console.log(`After shearing here is my flock sheep : ${flockSheep}`)

for(j=1;j<4;j++){
//Vòng lặp tăng size
    for(let b=0;b<7;b++){
        flockSheep[b]=flockSheep[b]+50;
    }

    console.log(`MONTH ${j}`)
    console.log(`My flock sheep NOW: ${flockSheep}`)
// So sánh 
    let a;
    let max=flockSheep[0];

    for (let i=1;i<=flockSheep.length;i++){
        
        if (max<flockSheep[i]) {
            max=flockSheep[i];
            a=i;
        }
    }
console.log(`My biggest sheep has size ${max} let shear it`);
flockSheep[a]=8;
console.log(`After shearing here is my flock sheep : ${flockSheep}`)

}