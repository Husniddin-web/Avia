"use strict"
// NAVBAR LIST ///

$('.money').addEventListener('click', (e) => {
    $('.curreny').classList.toggle('none')
})


$('.per').addEventListener('click', () => {
    $('.login').classList.toggle('none')
})
$('.item-3').addEventListener('click', () => {
    $('.card').classList.toggle('none')
})
$('.sit').addEventListener('click', () => {
    $('.sit-number').classList.toggle('d-none')
})







const inputColor = (arg, events, events2) => {
    arg.addEventListener(events, (e) => {
        if (e.target.value.trim().length <= 0) {
            arg.style.borderColor = 'red'
            arg.placeholder = 'Iltimos Toldirin !!!'

        }
    })
    arg.addEventListener(events2, (e) => {
        arg.style.borderColor = ''
        arg.placeholder = ''
    })
}
inputColor($('.where'), 'blur', 'focus')
inputColor($('.from'), 'blur', 'focus')
inputColor($('.from'), 'blur', 'focus')
inputColor($('.return'), 'blur', 'focus')
inputColor($('.depart'), 'blur', 'focus')




let plus1 = $('.plus1')
let plus2 = $('.plus2')
let plus3 = $('.plus3')
let minus1 = $('.minus1')
let minus2 = $('.minus2')
let minus3 = $('.minus3')
let old = $('.old')
let young = $('.young')
let baby = $('.baby')
let a = 1
let b = 0
let c = 0

plus1.addEventListener('click', () => {
    a++
    old.innerText = a
})
minus1.addEventListener('click', () => {
    if (a > 1) {
        a--
        old.innerText = a
    }
})
plus2.addEventListener('click', () => {
    b++
    young.innerText = b
})
minus2.addEventListener('click', () => {
    if (b > 0) {
        b--
        young.innerText = b
    }
})
plus3.addEventListener('click', () => {
    c++
    baby.innerText = c
})
minus3.addEventListener('click', () => {
    if (c > 0) {
        c--
        baby.innerText = c
    }
})