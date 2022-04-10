var password = ''
var tamanho = 0

const nums = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9']
const letmins = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const letmais = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const simbs = ['!', '@', '#', '$', '%', '¨', '&', '*', ',', '.', '/', '^', '~']
var op = [] // recebe valores das checkbox, 1 = numeros, 2 = letras minusculas, 3 = letras maiusculas, 4 = simbolos

var letmin = document.querySelector('#letmin')
var letmai = document.querySelector('#letmai')
let num = document.querySelector('#num')
let simb = document.querySelector('#simb')
let btn = document.querySelector('#btn')
var btn7 = document.querySelector('#btn7')
var btn8 = document.querySelector('#btn8')
var btn9 = document.querySelector('#btn9')
var btn10 = document.querySelector('#btn10')
var btn11 = document.querySelector('#btn11')
var btn12 = document.querySelector('#btn12')
var div = document.querySelector('#div')
var div2 = document.querySelector('#div2')

btn.addEventListener('click', clicar)
btn7.addEventListener('click', clicar7)
btn8.addEventListener('click', clicar8)
btn9.addEventListener('click', clicar9)
btn10.addEventListener('click', clicar10)
btn11.addEventListener('click', clicar11)
btn12.addEventListener('click', clicar12)


function clicar7(){
    tamanho = 7
    btn7.classList.add('is-primary')
    btn8.classList.remove('is-primary')
    btn9.classList.remove('is-primary')
    btn10.classList.remove('is-primary')
    btn11.classList.remove('is-primary')
    btn12.classList.remove('is-primary')
}
function clicar8(){
    tamanho = 8
    btn7.classList.remove('is-primary')
    btn8.classList.add('is-primary')
    btn9.classList.remove('is-primary')
    btn10.classList.remove('is-primary')
    btn11.classList.remove('is-primary')
    btn12.classList.remove('is-primary')
}
function clicar9(){
    tamanho = 9
    btn7.classList.remove('is-primary')
    btn8.classList.remove('is-primary')
    btn9.classList.add('is-primary')
    btn10.classList.remove('is-primary')
    btn11.classList.remove('is-primary')
    btn12.classList.remove('is-primary')
}
function clicar10(){
    tamanho = 10
    btn7.classList.remove('is-primary')
    btn8.classList.remove('is-primary')
    btn9.classList.remove('is-primary')
    btn10.classList.add('is-primary')
    btn11.classList.remove('is-primary')
    btn12.classList.remove('is-primary')
}
function clicar11(){
    tamanho = 11
    btn7.classList.remove('is-primary')
    btn8.classList.remove('is-primary')
    btn9.classList.remove('is-primary')
    btn10.classList.remove('is-primary')
    btn11.classList.add('is-primary')
    btn12.classList.remove('is-primary')
}
function clicar12(){
    tamanho = 12
    btn7.classList.remove('is-primary')
    btn8.classList.remove('is-primary')
    btn9.classList.remove('is-primary')
    btn10.classList.remove('is-primary')
    btn11.classList.remove('is-primary')
    btn12.classList.add('is-primary')
}


function clicar(){
    if (tamanho != 0){
        if(num.checked || letmin.checked || simb.checked || letmai.checked){
            var passwordDe = document.querySelector('#acc').value
            num.checked? op.push('1') : {}
            letmin.checked? op.push('2') : {}
            letmai.checked? op.push('3'):{}
            simb.checked? op.push('4'):{}
            for(var i = 0;i < tamanho;i++){
                let aleat = op[Math.floor(Math.random() * op.length)] // escolhe aleatório dentre os tipos de caracteres
                switch (aleat){
                    case '1':
                        password += nums[Math.floor(Math.random() * nums.length)] // escolhe um numero aleatório
                    break
                    case '2':
                        password += letmins[Math.floor(Math.random() * letmins.length)] // letra minúscula aleatória
                    break
                    case '3':
                        password += letmais[Math.floor(Math.random() * letmais.length)] // letra maiúscula aleatória
                    break
                    case '4':
                        password += simbs[Math.floor(Math.random() * simbs.length)]// simbolo aleatória
                }
            }
            div.removeChild(div2)
            div.style.textAlign = 'center'
            div.style.width = '300px'
            div.style.left = '20px'
            div.innerHTML += `Para: <strong>${passwordDe}</strong>  <br>Password: <strong>${password}</strong>`
            var btnrefresh = document.createElement('button')
            btnrefresh.setAttribute('class', 'button')
            btnrefresh.classList.add('btncolor')
            btnrefresh.style.marginTop = '50px'
            btnrefresh.style.marginLeft = '10px'
            btnrefresh.setAttribute('id', 'btnrefresh')
            btnrefresh.innerHTML = 'Novo Password'
            div.appendChild(btnrefresh)
                //acima, modificamos o html da página, acrescentando um butão e o texto para amostra do password
            btnrefresh.addEventListener('click', clickrefresh) // acrescenta eventlistener ao botão acrescentado por essa function. não funciona fora da function, provavelmente pela questão de scopo do var.

        } else{
            alert('Marque algum tipo de caractere')
                }       
    }else { 
        alert('Escolha um tamanho para sua senha.')
            }
}

function clickrefresh(){
    location.reload()
} // função refresh no botão 'novo password' acrescentado ao gerar password