let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let val = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} add.`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Invalid value or already found in the list.')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if (val.length == 0){
        window.alert('Add values ​​before finalizing!')
    }else{
        let total = val.length
        let bigger = val[0]
        let smaller = val[0]
        let sum = 0
        let average = 0
        for (let pos in val){
            sum += val[pos]
            if (val[pos] > bigger)
            bigger = val[pos]     
            if (val[pos] < smaller)
            smaller = val[pos]
        }
        average = sum / total
        res.innerHTML = ''
        res.innerHTML += `<p>In all, we have ${total} registered numbers.</p>`
        res.innerHTML += `<p>The lowest value informed was ${smaller}.</p>`
        res.innerHTML += `<p>The highest value informed was ${bigger}.</p>`
        res.innerHTML += `<p>The sum of all values ​​is ${sum}.</p>`
        res.innerHTML += `<p>The average of the values ​​is ${average}.</p>`
    }
}