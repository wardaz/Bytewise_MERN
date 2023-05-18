// Callbacks

let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) =>{

setTimeout(()=>{
console.log(`${stocks.Fruits[fruit_name]} was selected`);
},2000);

// function 👇 is being called 
call_production();
};

let production = () =>{
setTimeout(()=>{
console.log(`Fruit has been chopped`);

setTimeout(()=>{
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

setTimeout(()=>{
console.log("Machine was started");

  setTimeout(()=>{
console.log(`ice-cream was placed on ${stocks.holder[0]}`);

    setTimeout(()=>{
console.log(`${stocks.toppings[1]} was selected as topping`);

setTimeout(()=>{
 console.log("ice-cream was served");

},2000);
},3000);
},2000);
},1000);
},1000);
},2000);

};

order(0, production);