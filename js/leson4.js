let totalPrice = prompt("Впиши суму покупки в магазині");
console.log("Сума покупки:", totalPrice) 
const discount = 0.1;
let totalDiscount = totalPrice * discount;
alert("Сума знажки: " + totalDiscount)
console.log("Сума знижки:",totalDiscount)
let totalDiscountPrice = totalPrice - totalDiscount;
alert("Ціна покупки разом зі знижкою: " + totalDiscountPrice)
console.log("Ціна покупки разом зі знижкою:", totalDiscountPrice)
