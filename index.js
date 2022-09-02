let home = document.getElementById('home')
let away = document.getElementById('away')

let a_count=0
let h_count=0

function h_add1 (){
    h_count+=1
    home.textContent =h_count
}
function h_add2 (){
    h_count+=2
    home.textContent =h_count
}

function h_add3 (){
    h_count+=3
    home.textContent =h_count
}

function a_add1 (){
    a_count+=1
    away.textContent =a_count
}
function a_add2 (){
    a_count+=2
    away.textContent =a_count
}

function a_add3 (){
    a_count+=3
    away.textContent =a_count
}