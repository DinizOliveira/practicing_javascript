function check(){
    var date = new Date()
    var year = date.getFullYear()
    var form_year = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (form_year.value == 0 || form_year.value > year){
        window.alert('[ERROR] Check the data and try again!')
    }else{
        var form_sex = document.getElementsByName('radsex')
        var age = year - Number(form_year.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (form_sex[0].checked){
            gender = 'men'
            if (age >=0 && age <=5){
                // Baby
                img.setAttribute('src', 'img/baby/baby.png')
            }else if (age <= 11){
                // Kid
                img.setAttribute('src', 'img/kid/men.png')
            }else if (age <= 17){
                // Teenager
                img.setAttribute('src', 'img/teenager/men.png')
            }else if (age <= 59){
                // Adult
                img.setAttribute('src', 'img/adult/men.png')
            }else{
                // Old
                img.setAttribute('src', 'img/old/men.png')
            }
        }else if(form_sex[1].checked){
            gender = 'woman'
            if (age >=0 && age <=5){
                // Baby
                img.setAttribute('src', 'img/baby/baby.png')
            }else if (age <= 11){
                // Kid
                img.setAttribute('src', 'img/kid/woman.png')
            }else if (age <= 17){
                // Teenager
                img.setAttribute('src', 'img/teenager/woman.png')
            }else if (age <= 59){
                // Adult
                img.setAttribute('src', 'img/adult/woman.png')
            }else{
                // Old
                img.setAttribute('src', 'img/old/woman.png')
            }
        }else{
            gender = 'non-binary'
            img.setAttribute('src', 'img/not_binary.png')
        }
        res.innerHTML = `We detected a ${age} years old ${gender}.`
        res.appendChild(img)
    }
}