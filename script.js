//добавляем массив с кодами клавиатуры
let codeDown = ["IntlBackslash", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"];
let keyDown = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];

let container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);


let title = document.createElement("p");
title.setAttribute("class", "title");
title.innerHTML = "Виртуальная клавиатура";
container.appendChild(title);

//создаем форму для ввода текста
let textarea = document.createElement("textarea");
textarea.setAttribute("class", "textarea")
textarea.setAttribute("cols", "50"); // ширина в символах
textarea.setAttribute("rows", "5"); // высота в строках
container.appendChild(textarea);

//создаем клавиатуру
let keyboardBlock = document.createElement("div");
keyboardBlock.classList.add("keyboard-block", "keyboard");
container.appendChild(keyboardBlock);
//добавляем кнопки
for (let i = 0; i < keyDown.length; i++){
    let key = document.createElement("div");
    key.classList.add("keyboard", "key", codeDown[i]);
    keyboardBlock.appendChild(key);
    key.innerHTML = keyDown[i]
    console.log(key)
}










//
document.onkeypress = function(event){
    console.log(event);
    keyboard.push(event.key);
    key.push(event.code);
    console.log(keyboard);
    console.log(key);
}