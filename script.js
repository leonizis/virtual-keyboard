//добавляем массив с кодами клавиатуры
let codeDown = ["IntlBackslash", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
                "Tab",'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', "Enter",
                "CapsLock", 'KeyA', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
];
let keyDown = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
               "Tab", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "Enter",
            ,'b','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'];

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
// добавляем разметку по рядам
let keyboardKeys = [];
let rowSizes = [14, 14, 14, 13, 10]; // колличество кнопок в каждом ряду

for (let i = 0; i < 5; i++) {
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyboardBlock.appendChild(keyboardRow);

    let rowKeys = [];
    let numKeys = rowSizes[i];
    for (let j = 0; j < numKeys; j++) {
        let key = document.createElement("div");
        key.classList.add("key", codeDown[j + i * 14 + (i > 1 ? 1 : 0)]); // ищем индексы для строк 3-4-5
        keyboardRow.appendChild(key);
        key.innerHTML = keyDown[j + i * 14 + (i > 1 ? 1 : 0)];
        rowKeys.push(key);
    }

    keyboardKeys.push(rowKeys);
}












//
document.onkeypress = function(event){
    console.log(event);
    keyDown.push(event.key);
    codeDown.push(event.code);
    console.log(keyDown);
    console.log(codeDown);
}