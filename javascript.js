const calcular = document.getElementById('calcular');

function montante () {
    const capital = document.getElementById('capital').value;
    const juros = document.getElementById('juros').value;
    const tempo = document.getElementById('tempo').value;
    const jurosreal = juros/100;




   if (capital !== '' && jurosreal !== '' && tempo !== '') {
        const soma = 1+jurosreal
        const elevacao = Math.pow(soma,tempo)
        const calculo = (capital*(elevacao)).toFixed(2)


        resultado.textContent = `O valor final = R$ ${calculo}`;
        
    }else {
        resultado.textContent = 'Favor preencher todos os campos!';
    }
    }



