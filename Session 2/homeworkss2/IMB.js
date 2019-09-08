let h=Number(prompt("Nhap vao chieu cao theo cm"));
let w=Number(prompt("Nhap vao can nang  Kg"));
let bmi=w/((h/100)**2);
let result=null;
if (bmi<16){
    result="Severely underweight";
} else if (16<=bmi<18.5){
    result="Underweigh"
} else if (18.5<=bmi<25){
    result="Underweigh"
}else if (25<=bmi<30){
    result="Overweight"
}else {
    result="Obese"
}
console.log(result)