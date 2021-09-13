function verde() {
	document.querySelector('#exemplo').classList.remove('azul')
	document.querySelector('#exemplo').classList.remove('vermelho')
	document.querySelector('#exemplo').classList.add('verde')
}

function vermelho() {
	document.querySelector('#exemplo').classList.remove('azul')
	document.querySelector('#exemplo').classList.remove('verde')
	document.querySelector('#exemplo').classList.add('vermelho')
}

function azul () {
	document.querySelector('#exemplo').classList.remove('verde')
	document.querySelector('#exemplo').classList.remove('vermelho')
	document.querySelector('#exemplo').classList.add('azul')
}




/*
document.write("Textando");
//alert("Olá mundo!");
console.log("mensagem exibida no console");

var x = 10;
var y = 5;
var total = x + y;
//alert ("A somal total é igual a " + total + ".");

var hora = 18;

if (hora == 12 || hora == 18) {
	console.log("HORA DO RUSH.");
} else {
	console.log("Horário comum.");
}


var nomecompleto = nome + sobrenome;
alert ("Seu nome completo é " + nomecompleto + ".")

document.getElementById('hOne').innerHTML = 'Ronaldo <button>Benjamin Botão</button>';

document.getElementsByClassName('lista')[0].innerHTML = 'Item alterado!';
*/