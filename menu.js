function media() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let nota1 = parseFloat(n1);
    let nota2 = parseFloat(n2);

    var media = (nota1+nota2)/2

if (media >= 7) {
    document.getElementById('resultado').innerHTML = "Aprovado";
    alert ("Você foi aprovado! Sua média foi: " + media);
} else {
    document.getElementById('resultado').innerHTML = "Reprovado";
    alert ("Você foi reprovado, sua média foi: " + media);
}

}

