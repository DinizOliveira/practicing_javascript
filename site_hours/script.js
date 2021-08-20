function Load(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now it's ${hour} hours.`
    if (hour >= 0 && hour <12){
        // Bom dia!
        img.src = 'img/manha.png'
        document.body.style.background = '#fddbad'
    }else if (hour >= 12 && hour <= 18){
        // Boa tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#c89663'
    }else{
        // Boa noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#222c45'
    }
}