const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const inputColor = document.querySelector('.input__color');
const tools = document.querySelectorAll('.button__tool');
const sizeButtons = document.querySelector('.button__size');
const buttonClear = document.querySelector('.button__clear');

let brushSize = 10;

const draw = (x, y) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(x, y, brushSize, brushSize);
}

draw(100, 100); //teste
