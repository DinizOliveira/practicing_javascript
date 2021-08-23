function Contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value == 0 || fim.value == 0){
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando <br>'
        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }else{
            // Contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}