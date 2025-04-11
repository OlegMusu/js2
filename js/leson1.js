let celsius = parseFloat(prompt("Впиши число"));
let fahrenheit; 
let question = confirm("Чи потрібно перевести це число з цельсію у фаренгейти?");
let result;
if (question === true) {
  fahrenheit = celsius * 9 / 5 + 32;
  alert("Результат: " + fahrenheit + " °F");
  console.log(fahrenheit);
}
