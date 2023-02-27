var radio = document.querySelector('.manual');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(()=>{
    proximaImg()
},4000)

function proximaImg(){
    cont++
    if(cont > 4){
        cont=1 }
        document.getElementById('radio'+cont).checked = true;

}

const filter =document.querySelector("header input")
const box = document.querySelectorAll('.aboutPages .box ')

filter.addEventListener('input', filterBox)

function filterBox(){
    if(filter.value !=''){
        for(let bo of box){

            let title = bo.querySelector('a')
            title = title.textContent.toLowerCase()
            
                let filterText =filter.value.toLowerCase()

                if(!title.includes(filterText)){
                    bo.style.display="none"

                }

                else{
                    bo.style.display="block"

                }
        }

    }
    else{
        for(let bo of box){
            bo.style.display="block"
        }

    }
}