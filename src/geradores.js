const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const simbolos = ',.;^~[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length - 1)];

