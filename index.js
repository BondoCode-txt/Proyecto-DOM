function sumar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let suma = num1+num2;

    document.getElementById("Resultado").value = suma;
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let multiplicacion = num1*num2;

    document.getElementById("Resultado").value = multiplicacion;
}

function dividir(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let division = num1/num2

    if (num2 === 0){
        document.getElementById("Resultado").value = "No se puede dividir por cero"
    } else {
        document.getElementById("Resultado").value = division.toFixed(1);
    }
}
function restar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resta = num1-num2;

    document.getElementById("Resultado").value = resta
}


function calcular(){
    let can = parseInt(document.getElementById("can").value);
    let preciouni = parseInt(document.getElementById("preciouni").value)
    let iva = 0.19
    let descuento = 0
    let subtotal = can*preciouni
    let calculoiva = subtotal*iva
    
    
    if (can >=10){
        descuento = 0.10
    }
    let calculodescuento = subtotal*descuento
    let totalApagar = (subtotal + calculoiva)-descuento

    document.getElementById("subt").value = subtotal.toLocaleString()
    document.getElementById("iva").value = calculoiva.toLocaleString()
    document.getElementById("desc").value = calculodescuento.toLocaleString()
    document.getElementById("totalpagar").value = totalApagar.toLocaleString()
}

function Calcular(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)

    if (nota1 <0 || nota1 >5 || nota2 <0 || nota2 >5 || nota3 <0 || nota3 >5){
        document.getElementById("Promedio").value = "Valores invalidos"
    } else{
        let calculoPromedio = (nota1+nota2+nota3)/3
        document.getElementById("Promedio").value = calculoPromedio.toFixed(2)
    }
}

function CalcularSalario(){
    let horasTrabajadas = document.getElementById("horasTrabajadas").value
    let ValorHora = document.getElementById("valorHora").value

    let CalculoSalario = horasTrabajadas*ValorHora
    document.getElementById("SalarioPagar").value = CalculoSalario.toLocaleString(2)

}

function CalcularPresupuesto(){
    let NumeroInvitados = parseInt(document.getElementById("numInvitados").value)
    let CostoComida = parseInt(document.getElementById("costComida").value)
    let CostoBebida = parseInt(document.getElementById("costBebida").value)
    let CostoDecoracion = parseInt(document.getElementById("costDecoracion").value)
    let CostoMusica = parseInt(document.getElementById("costMusica").value)
    let Propina = parseInt(document.getElementById("propina").value)

    let calculoComida = NumeroInvitados*CostoComida
    let calculoBebida = NumeroInvitados*CostoBebida
    let subtotal = calculoComida + calculoBebida + CostoDecoracion
    let calculoPropina = subtotal*Propina
    let TotalGeneral = subtotal+calculoPropina
    let CostoPorInvitado = TotalGeneral/NumeroInvitados

    document.getElementById("comidatotal").innerText = calculoComida.toLocaleString()
    document.getElementById("bebidatotal").innerText = calculoBebida.toLocaleString()
    document.getElementById("decoraciontotal").innerText = CostoDecoracion.toLocaleString()
    document.getElementById("musicatotal").innerText = CostoMusica.toLocaleString()
    document.getElementById("propinatotal").innerText = calculoPropina.toLocaleString()
    document.getElementById("subtotal").innerText = subtotal.toLocaleString()
    document.getElementById("totalgeneral").innerText = TotalGeneral.toLocaleString()
    document.getElementById("costoporinvitado").innerText = CostoPorInvitado.toLocaleString()
}