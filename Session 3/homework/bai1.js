let menu=["T-Shirt","Sweater"];

let yourChoice=prompt("Welcome to our shop, what do you want (C, R, U, D)");
if (yourChoice=="R"){
    console.log(`Our items: ${menu}`);
} else if (yourChoice=="C"){
    let addNew=prompt("Enter new item:");
    menu.push(addNew);
    console.log(`Our items: ${menu}`);
} else if (yourChoice=="U"){
    let itemUpdate=prompt("Enter item you want update");
    let addNew=prompt("Enter new item:");
    let positionItem=menu.indexOf(itemUpdate);
    menu[positionItem]=addNew;
    console.log(`Our items: ${menu}`);

} else if(yourChoice=="D"){
    let deleteItem=prompt("Delete Item?");
    let positionItem=menu.indexOf(deleteItem);
    menu.splice(positionItem,1);
    console.log(`Our items: ${menu}`);
}