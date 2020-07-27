document.getElementById("enviar").addEventListener("click", enviarDatos);
document.getElementById("cantidad").addEventListener("keyup", enviarDatos);
document.getElementById("valor-unitario").addEventListener("change", enviarDatos);

function enviarDatos(evento){
	let cantidad, valor_unitario, total;
    cantidad = document.getElementById("cantidad").value;
    valor_unitario = document.getElementById("valor-unitario").value;
    total = cantidad * valor_unitario;
    
    document.getElementById("valor-total").value = total;
    
    if(evento.type ==  "click"){
        evento.preventDefault();
    }
}

function sumar(a, b){
    var sum;
    sum = a + b + 1;
    console.log(sum)
}




/*
var numero1;
var numero2,suma;

numero1 = 8;
numero2 = 5;
suma = numero1 + numero2;

console.log("La suma es :" + suma);
*/