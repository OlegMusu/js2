let daysInMonth = parseInt(prompt("Введіть кількість днів у місяці:"));
let hoursInMonth = 24;
let minutesInMonth = 60;
let question = confirm("Чи потрібно тобі перевести з 30-ти днів у години?");
if (question === true) {
    let hours = daysInMonth * hoursInMonth;
    alert("Годин у місяці: " + hours);
    console.log(hours);

    let question2 = confirm("Чи потрібно тобі перевести з години в хвилини?");
    if (question2 === true) {
        let minutes = hours * minutesInMonth;
        alert("Хвилин у місяці: " + minutes);
        console.log(minutes);
    }
}
else {
    let question3 = confirm("Чи потрібно тобі перевести з 30-ти днів у хвилини?");
    if (question3 === true) {
        let minutes = daysInMonth * hoursInMonth * minutesInMonth;
        alert("Хвилин у місяці: " + minutes);
        console.log(minutes);
    }
}
