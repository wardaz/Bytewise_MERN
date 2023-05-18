let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
  };

  let is_shop_open = true;

  let order = (time, work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("Shop Closed"))
        }
    });
  };
order(2000,()=>
  console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
  return order(2000, () => 
   console.log("Fruit has been chopped"));
})
.then(()=>{
  return order(1000,() => 
   console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`));   
})
.then(()=>{
  return order(1000,() => 
   console.log("Machine has been started"));   
})
.then(()=>{
  return order(2000,() => 
   console.log(`ice-cream will be placed on ${stocks.holder[0]}`));   
})
.then(()=>{
  return order(3000,() => 
   console.log(`${stocks.toppings[0]} was selected as topping`));   
})
.then(()=>{
  return order(2000,() => 
   console.log("Ice-cream served"));   
})
.catch(()=>{
  console.log("Customer left"); 
})
.finally(()=>{
  console.log("Day ended, shop is closed")
});