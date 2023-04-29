// добавляем массив с кодами клавиатуры

const codeDown = ['IntlBackslash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', '',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', '',
  'ShiftLeft', 'Backquote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', '',
  'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight',
];
const keyDownEng = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', '',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', '',
  'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];

const keyUpEng = ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Enter', '',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', '',
  'Shift', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];
const keyCapsEng = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Enter',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', '',
  'Shift', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];
const keyDownRu = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Enter', '',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё', '',
  'Shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];
const keyUpRu = ['<', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Enter', '',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Ё', '',
  'Shift', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];
const keyCapsRu = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Enter', '',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Ё', '',
  'Shift', ']', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', 'Shift', '',
  'Ctrl', 'Alt', 'Cmd', '', 'Cmd', 'Alt', '◄', '▲', '▼', '►'];

const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

let capsLock = 'false';

const title = document.createElement('p');
title.setAttribute('class', 'title');
title.innerHTML = 'Виртуальная клавиатура';
container.appendChild(title);

// создаем форму для ввода текста

const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'textarea');
textarea.setAttribute('cols', '50'); // ширина в символах
textarea.setAttribute('rows', '5'); // высота в строках
container.appendChild(textarea);

// создаем клавиатуру
const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard-block', 'keyboard');
container.appendChild(keyboardBlock);
// добавляем разметку по рядам
const keyboardKeys = [];
let keyboardRow = '';
const rowSizes = [14, 14, 13, 13, 10]; // колличество кнопок в каждом ряду

function displayLetters(codes, keyses) {
  for (let i = 0; i < 5; i += 1) {
    keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboardBlock.appendChild(keyboardRow);
    const rowKeys = [];
    const numKeys = rowSizes[i];
    for (let j = 0; j < numKeys; j += 1) {
      const key = document.createElement('div');
      key.classList.add('key', codes[j + i * 14 + (i > 1 ? 1 : 0)]); // ищем индексы для строк 3-4-5
      keyboardRow.appendChild(key);
      key.innerHTML = keyses[j + i * 14 + (i > 1 ? 1 : 0)];
      rowKeys.push(key);
    }
    keyboardKeys.push(rowKeys);
  }
  console.log('обновилась клава');
  document.addEventListener('keydown', (event) => {
    const key = document.querySelector(`.${event.code}`);
    key.classList.add('hovered');
  });

  document.addEventListener('click', (event) => {
    const code = event.target.innerHTML;
    if (code === 'CapsLock') {
      console.log(`${event.target.innerHTML}[EQ`);
      event.target.classList.add('active');
    }
  });
}
displayLetters(codeDown, keyDownEng);

// устанавливаем фокус на окно ввода а так же подсвечиваем нажатие клавиш через hovered
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  textarea.focus();

  const { code } = event;

  const key = document.querySelector(`.${event.code}`);
  key.classList.add('hovered');
  console.log(event.ctrlKey);

  console.log(event.code);

  if (code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (code === 'Enter') {
    textarea.value += '\n';
  } else if (event.ctrlKey && event.code === 'AltLeft') {
    console.log('выполнено');
    textarea.value += '';
    keyboardBlock.innerHTML = '';

    displayLetters(codeDown, keyDownRu);
  } else if (code === 'ArrowLeft') {
    textarea.value += '◄';
  } else if (code === 'ArrowUp') {
    textarea.value += '▲';
  } else if (code === 'ArrowDown') {
    textarea.value += '▼';
  } else if (code === 'ArrowRight') {
    textarea.value += '►';
  } else if (key.textContent === 'Shift') {
    textarea.value += '';
    keyboardBlock.innerHTML = '';
    displayLetters(codeDown, keyUpEng);
  } else if (key.textContent === 'Tab') {
    textarea.value += '    ';
  } else if (key.textContent === 'CapsLock') {
    console.log(key);
    textarea.value += '';
    keyboardBlock.innerHTML = '';
    displayLetters(codeDown, keyCapsEng);
    key.classList.add('hovered');
  } else if (key.textContent === 'Ctrl' || key.textContent === 'Cmd' || key.textContent === 'Alt') {
    textarea.value += '';
  } else {
    textarea.value += event.key;
  }
});

// удаляем класс hovered при снятии кнопки
document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`.${event.code}`);
  if (key.textContent === 'Shift') {
    key.classList.remove('hovered');
    keyboardBlock.innerHTML = '';
    displayLetters(codeDown, keyDownEng);
  }
  if (key.textContent === 'CapsLock') {
    console.log(key);
    keyboardBlock.innerHTML = '';
    displayLetters(codeDown, keyDownEng);
    key.classList.remove('hovered');
  }
  key.classList.remove('hovered');
});

// добавляем событие при клике мышкой
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    textarea.focus();
    const code = event.target.innerHTML;
    console.log(code);

    if (code === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (code === 'Enter') {
      textarea.value += '\n';
    } else if (code === 'Shift') {
      textarea.value += '';
      keyboardBlock.innerHTML = '';
      displayLetters(codeDown, keyUpEng);
    } else if (code === 'Tab') {
      textarea.value += '    ';
    } else if (code === 'CapsLock') {
      textarea.value += '';
      if (!capsLock) {
        event.target.classList.add('active');
        keyboardBlock.innerHTML = '';
        capsLock = true;
        displayLetters(codeDown, keyCapsEng);
      } else {
        event.target.classList.remove('active');
        keyboardBlock.innerHTML = '';
        capsLock = false;
        displayLetters(codeDown, keyDownEng);
      }
    } else if (code === 'Ctrl' || code === 'Alt' || code === 'Cmd') {
      textarea.value += '';
    } else {
      textarea.value += code;
    }
    console.log(textarea.value);
  }
});
