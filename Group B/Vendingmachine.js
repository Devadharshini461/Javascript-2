const products = {
  Madangles: { stock: 15,stock1: 15 , price: 20,quantity:0 },
  Boost: { stock: 10,stock1: 10, price: 20,quantity:0   },
  Horlicks: { stock: 15,stock1: 15, price: 20 ,quantity:0 },
  Milkshake: { stock: 15,stock1: 15, price: 20 ,quantity:0 },
  Brownie: { stock: 14,stock1: 14, price: 40,quantity:0  },
  Bingo: { stock: 15,stock1: 15, price: 20 ,quantity:0  },
  Lays: { stock: 10,stock1: 10, price: 50,quantity:0  },
  Moongdal: { stock: 14,stock1: 14, price: 20 ,quantity:0 },
  Paperbolt: { stock: 14,stock1: 14, price: 40 ,quantity:0  },
  Kurkure: { stock: 14,stock1: 14, price: 20 ,quantity:0 },
  Cococola: { stock: 10,stock1: 10, price: 40 ,quantity:0  },
  Sprite: { stock: 15,stock1: 15, price: 40,quantity:0 },
};


document.getElementById("Madanglesstock").innerText=`Stock: ${products["Madangles"].stock1} Quantity: ${products["Madangles"].quantity} `
document.getElementById("Kurkurestock").innerText=`Stock: ${products["Kurkure"].stock1} Quantity: ${products["Kurkure"].quantity} `
document.getElementById("Laysstock").innerText=`Stock: ${products["Lays"].stock1} Quantity: ${products["Lays"].quantity} `
document.getElementById("Milkshakestock").innerText=`Stock: ${products["Milkshake"].stock1} Quantity: ${products["Milkshake"].quantity} `
document.getElementById("Spritestock").innerText=`Stock: ${products["Sprite"].stock1} Quantity: ${products["Sprite"].quantity} `
document.getElementById("Cococolastock").innerHTML=`Stock: ${products["Cococola"].stock1} Quantity: ${products["Cococola"].quantity} `
document.getElementById("Bingostock").innerHTML=`Stock: ${products["Bingo"].stock1} Quantity: ${products["Bingo"].quantity} `
document.getElementById("Moongdalstock").innerHTML=`Stock: ${products["Moongdal"].stock1} Quantity: ${products["Moongdal"].quantity} `
document.getElementById("Browniestock").innerHTML=`Stock: ${products["Brownie"].stock1} Quantity: ${products["Brownie"].quantity} `
document.getElementById("Booststock").innerHTML=`Stock: ${products["Boost"].stock1} Quantity: ${products["Boost"].quantity} `
document.getElementById("Horlicksstock").innerHTML=`Stock: ${products["Horlicks"].stock1} Quantity: ${products["Horlicks"].quantity} `
document.getElementById("Paperboltstock").innerHTML=`Stock: ${products["Paperbolt"].stock1} Quantity: ${products["Paperbolt"].quantity} `


y=[];
// dis={};
var count=0,amount=0,total=0,prd,stock;
function additem(prd){  
  // y.push(prd);
    // products[prd].count += 1;        
    products[prd].stock -= 1;   
    products[prd].quantity+=1
    amount += products[prd].price
    stock(prd);
    if(products[prd].stock<0){
      
      document.getElementById(`${prd}stock`).innerHTML=`Stock: 0`
      document.getElementById(`${prd}stock`).innerHTML+=` Quantity: ${products[prd].stock1}`
      alert("Stock Over!!!");
    }

       x=(products[prd].stock1) - (products[prd].stock);
      //  document.getElementById("billp").innerText="  ";
      //  y.unshift(prd);
       y.push(`${x} * ${prd}= ${x*products[prd].price}\n `)
  
    // // console.log(y);
    // y.push( document.getElementById("billp").innerText=`${x} * ${prd}\n `)
    // //check how to check the no of duplicate values entered from that conclude  
    // products.forEach((p)=>{
    //   document.getElementById("billp").innerText+=[prd]*p[prd].quantity;

    // })
}


function remove(prd){
if(!(products[prd].stock==products[prd].stock1)){
  // products[prd].count -= 1; 
  products[prd].stock += 1;
  products[prd].quantity-=1
  amount -= products[prd].price
}
  stock(prd);
    if(products[prd].stock<0){
      document.getElementById(`${prd}stock`).innerHTML=`Stock: 0`
      document.getElementById(`${prd}stock`).innerHTML+=` Quantity: ${products[prd].stock1}`
      alert("Stock Over!!!");
    }  
}

   
function stock(prd){
  document.getElementById(`${prd}stock`).innerHTML=`Stock: ${products[prd].stock}\n`
  document.getElementById(`${prd}stock`).innerHTML+=`Quantity: ${products[prd].quantity}`
}


function totalvalue(){ 
  if(!(amount==0)){
  // let unique = y.filter((item, index) => y.indexOf(item) === -index);
  document.getElementById("billp").innerText+=y;
  document.getElementById("billp").innerText+=`Total Amount: ${amount}\n`}
  else{
    alert("Your cart is empty!!")
  }
  addvalue();
}


function paymentMode() {
  if(!(amount==0)){
    const mode = document.getElementById("payment").value;
      if (mode === "GPay") {
        const mpin = prompt("Enter your 4-digit MPIN:");
        if (mpin.length === 4) {
          alert(`Payment Successful using GPay!`);
        } else {
          alert("Invalid MPIN! Transaction Failed.");
        }
      } else if (mode === "Card") {
        alert("Insert card");
        alert("Payment done!!");
      } else if (mode === "Cash") {
        alert("Payment successful !!");
      } else {
        alert("Select a payment mode first!");
      }
  }
  else{
    alert("Your cart is empty..")
  }
}

function discount(){
  let code=document.getElementById("discount").value.trim()
  if(code=="dd461"){
    document.getElementById("dis").innerText= "Discount: 20% \n"
    let val=amount-(0.2*amount);
    document.getElementById("dis").innerText+=`Total Amount after Discount: ${val}`;
  }
  else if(code=="dd460"){
    document.getElementById("dis").innerText= "Discount: 10% \n"
    let val=amount-(0.1*amount);
    document.getElementById("dis").innerText+=`Total Amount after Discount: ${val}`;
  }
  else{
    alert("Invalid Discount code");
    document.getElementById("dis").innerText+=`Total Amount: ${amount}`;
}
}



// // Intha function vanthu add removeitem la same operations ah opposite manner la perform pannanum 
// function changeStock(item, value) {
//   products[item].stock += value;
//  console.log(
//     `Stock: ${products[item].stock}`)
// }


// // ADD item → decreases stock
// function additem(item) {
//   changeStock(item, -1);
// }

// additem('Lays')
// // REMOVE item → reverses additem automatically
// function removeitem(item) {
//   // reverse the change done by additem
//   changeStock(item, +1);
// }

// removeitem('Lays')