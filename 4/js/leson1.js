let textField = prompt("Впиши сюди слово");
let textField2 = prompt("Впиши ще одне слово");
if(textField.trim() !== "" && textField2.trim() !== ""){
    console.log("Всі поля заповнені")
}else{
    console.log("не всі поля заповнені")
}