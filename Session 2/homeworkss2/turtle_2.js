

clear()
lt(90)

for(let i=3;i<=6;i++){
    if(i%2==0){
      color("red")
    }else{
      color("blue")
    }
    for(let j=0;j<i;j++){
     rt(180-(180*(i-2))/i)
     fd(100)
     
   
    }
}