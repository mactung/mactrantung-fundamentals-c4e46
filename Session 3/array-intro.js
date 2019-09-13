//Mảng chuỗi list
//Array

// Create

// let menu=["Cơm", "Canh","Cá","Gà","Thịt"]
// console.log(menu);

// Cách truy cập bằng index
    // let food=menu[i];
    // console.log(food);

// menu.length >>> số lượng phần tử trong array


// for(let i=0;i<menu.length;i++){  
//     console.log(menu[i]);
// }


// menu.forEach((item,index)=>{
//     console.log(index,item);
// })


// menu.forEach((item,index)=>{
//     console.log(`${index+1}.${item}`)
// })



//Update

// menu.push("Bánh cuốn");
// console.log(menu);


// let add=prompt("Nhap them mon an");

// menu.push(add);
// console.log(menu);


// Thay đổi giá trị phần tử bên trong array
// menu[1]="Bánh cuốn";
// console.log(menu);

// let add=prompt("Nhap ten mon an thêm vào");
// let num=Number(prompt("Nhap so thu tu mon ăn muốn thay"));
// menu[num-1]=add;
// console.log(menu);

// let add=prompt("Nhap ten mon an thêm vào");
// let thaythe =prompt("Nhap món ăn thay thế");

// indexOfMonAn = menu.indexOf(thaythe) // Lấy số thứ tự trong array
// menu[indexOfMonAn]=add;
// console.log(menu);

//Delete

// console.log(menu);
// menu.splice(0,1);
// console.log(menu);

// let thayThe=prompt("Nhap vao mon an can thay the")
// let viTri= menu.indexOf(thayThe);
// menu.splice(viTri,1);
// console.log(menu);


let menu=["Áo", "Mũ", "Quần","Thắt Lưng","Giày"];
console.log(menu);

// let pick=prompt("Bạn muốn gì? C/R/U/D/E");

while(true){ 
    let pick=prompt("Bạn muốn gì? C/R/U/D/E");
 
if (pick=="C"){
    addNew=prompt("Bạn muốn thêm đồ gì?");
    menu.push(addNew);
    console.log(menu);
}else if(pick=="R"){
    xemDo=prompt("Bạn muốn xem đồ gì?");
    indexR=menu.indexOf(xemDo);
    while(indexR==-1){
        xemDo=prompt("Bạn muốn xem đồ gì? Nhap lai");
        indexR=menu.indexOf(xemDo);
        if(indexR!=-1){break;}
        
    }
    
        console.log(`Bạn đang xem ${menu[indexR]}`);
    
}else if(pick=="U"){
    thayThe=prompt("Món đồ muốn thay thế");
    indexU=menu.indexOf(thayThe);
    doMoi=prompt("Món đồ mới")
    menu[indexU]=doMoi;
    console.log(menu);
}else if(pick=="D"){
    xoaDo=prompt("Món đồ muốn xóa");
    indexD=menu.indexOf(xoaDo);
    while(indexD==-1){
        xoaDo=prompt("Món đồ muốn xóa - Vui lòng nhập lại");
        indexD=menu.indexOf(xoaDo);
        if(indexD!=-1){break;}
        
        }
    menu.splice(indexD,1);
    console.log(menu);
}


else if(pick=="E"){
    break;
}
      
}   

