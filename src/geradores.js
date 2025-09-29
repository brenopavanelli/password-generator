const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const simbolos = ',.;^~[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function gerarSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    for (let i = 0; i < qtd; i++) {
      maiusculas && senhaArray.push(geraMaiuscula());
      minusculas && senhaArray.push(geraMinuscula());
      numeros && senhaArray.push(geraNumero());
      simbolos && senhaArray.push(geraSimbolo());
    }
    const arrayAleatorio = senhaArray.sort(() => Math.random() - 0.5);
    const senha = arrayAleatorio.join('').slice(0, qtd);
  
    return senha;
}
