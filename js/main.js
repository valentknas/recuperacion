// funcion que realice una suma

document.getElementById("calcular").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.innerText = "Ingresa valores válidos";
        return;
    }

    if (a === 0) {
        resultado.innerText = "Error: 'a' no puede ser 0";
        return;
    }

    let x = (c - b) / a;
    resultado.innerText = "x = " + x;
})

function compararNumeros() {
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert(" Ingresa números válidos.");
    } else if (numero1 > numero2) {
        alert( "El número {numero1} es mayor");
    } else if (numero1 < numero2) {
        alert("El número {numero2} es mayor");
    } else {
        alert(" Los números son IGUALES.");
    }
}

function verificarNumero() {
    let numero = parseFloat(prompt("Ingresa un número:"));

    if (isNaN(numero)) {
        alert("⚠️ Ingresa un número válido.");
    } else if (numero > 0) {
        alert("✅ El número es POSITIVO.");
    } else if (numero < 0) {
        alert("❌ El número es NEGATIVO.");
    } else {
        alert("🟡 El número es CERO.");
    }
}

function calcularCirculo() {
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

    if (isNaN(radio) || radio <= 0) {
        alert("⚠️ Ingresa un número válido mayor que 0.");
    } else {
        let area = Math.PI * Math.pow(radio, 2);
        let circunferencia = 2 * Math.PI * radio;

        alert(`✅ Resultados:
        - Área: ${area.toFixed(2)}
        - Circunferencia: ${circunferencia.toFixed(2)}`);
    }
}

function calcularRectangulo() {
    let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("⚠️ Ingresa valores numéricos válidos.");
    } else {
        let area = base * altura;
        let perimetro = 2 * (base + altura);

        alert(`✅ Resultados:
        - Área: ${area.toFixed(2)}
        - Perímetro: ${perimetro.toFixed(2)}`);
    }
}

function verificarParidad() {
    let num = parseInt(document.getElementById("numero").value);
    if (isNaN(num)) {
        document.getElementById("resultado").innerText = "⚠️ Ingresa un número válido.";
        return;
    }
    let mensaje = (num % 2 === 0) ? "El número es Par" : "El número es Impar";
    document.getElementById("resultado").innerText = mensaje;
}


function calcularPotencia() {
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    if (base.trim() === "" || exponente.trim() === "") {
        document.getElementById("resultadoPotencia").innerText = "Ingresa valores validos.";
        return;
    }

    base = parseFloat(base);
    exponente = parseInt(exponente);

    if (isNaN(base) || isNaN(exponente)) {
        document.getElementById("resultadoPotencia").innerText = "Ingresa numeros validos.";
        return;
    }

    let resultado = Math.pow(base, exponente);
    document.getElementById("resultadoPotencia").innerText = 
        "Resultado: " + base + "^" + exponente + " = " + resultado;
}

function calcularHipotenusa() {
    let cateto1 = document.getElementById("cateto1").value;
    let cateto2 = document.getElementById("cateto2").value;

    if (cateto1.trim() === "" || cateto2.trim() === "") {
        document.getElementById("resultadoHipotenusa").innerText = "Ingresa valores validos.";
        return;
    }

    cateto1 = parseFloat(cateto1);
    cateto2 = parseFloat(cateto2);

    if (isNaN(cateto1) || isNaN(cateto2) || cateto1 <= 0 || cateto2 <= 0) {
        document.getElementById("resultadoHipotenusa").innerText = "Ingresa numeros validos.";
        return;
    }

    let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

    document.getElementById("resultadoHipotenusa").innerText = 
        "Hipotenusa: " + hipotenusa.toFixed(2);}