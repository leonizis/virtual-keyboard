//добавляем массив с кодами клавиатуры
const codeDown = ["IntlBackslash", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
"Tab",'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', "Enter",
,'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',"Backslash",
,"ShiftLeft", 'Backquote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', "ShiftRight",
,"ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"
];
const keyDownEng = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "Enter",
,'CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\',
,"Shift", '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];
const keyUpEng = ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
"Tab", 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', "Enter",
,'CapsLock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "\"", '|',
,"Shift", '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];
const keyCapsEng = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "Enter",
,'CapsLock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\',
,"Shift", '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];
const keyDownRu = [">", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "Enter",
,'CapsLock','ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'ё',
,"Shift", ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];
const keyUpRu = ["<", "!", "\"", "№", "%", ":", ",", ".", ";", "(", ")", "_", "+", "Backspace",
"Tab", 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "Enter",
,'CapsLock','Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Ё',
,"Shift", '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];
const keyCapsRu = [">", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "Enter",
,'CapsLock','Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Ё',
,"Shift", ']', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', "Shift",
,"Ctrl", "Alt", "Cmd", "", "Cmd", "Alt", "◄", "▲", "▼", "►"];

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
let keyboardRow = "";
let rowSizes = [14, 14, 13, 13, 10]; // колличество кнопок в каждом ряду

for (let i = 0; i < 5; i++) {
    keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyboardBlock.appendChild(keyboardRow);

    let rowKeys = [];
    let numKeys = rowSizes[i];
    for (let j = 0; j < numKeys; j++) {
        let key = document.createElement("div");
        key.classList.add("key", codeDown[j + i * 14 + (i > 1 ? 1 : 0)]); // ищем индексы для строк 3-4-5
        keyboardRow.appendChild(key);
        key.innerHTML = keyDownEng[j + i * 14 + (i > 1 ? 1 : 0)];
        rowKeys.push(key);
    }

    keyboardKeys.push(rowKeys);
}


// устанавливаем фокус на окно ввода а так же подсвечиваем нажатие клавиш через hovered 
document.addEventListener("keydown", function(event) {
    textarea.focus();
    let key = document.querySelector(`.${event.code}`);
    console.log(key);
    key.classList.add("hovered");
    console.log(textarea.value)
  });

// удаляем класс hovered при снятии кнопки
  document.addEventListener("keyup", function(event) {
    // let code = event.code;
    // console.log(code);
    let key = document.querySelector(`.${event.code}`);
    console.log(key);
    key.classList.remove("hovered");
  });

  // добавляем событие при клике мышкой
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("key")){
    console.log("Клик мышью", event.target);
    textarea.focus();
    let code = event.target.innerHTML;
    
    console.log(code);
    let key = document.querySelector(`.${event.code}`);
    console.log(key);
    if (code == "Backspace"){
            textarea.value = textarea.value.slice(0, -1);
        }else if (code == "Enter"){
            textarea.value += "\n";
        }else{
            textarea.value += code;
        }
    
    console.log(textarea.value)
    }
  });












//
// document.onkeypress = function(event){
//     console.log(event);
//     keyDown.push(event.key);
//     codeDown.push(event.code);
//     console.log(keyDown);
//     console.log(codeDown);
// }