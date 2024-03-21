let cardsTitle = (a) =>{
    let div = document.createElement('div')
    div.id = 'tit'
    div.innerHTML=`<h1>${a}</h1>`

    return div
}
let cards = (a,b,c) =>{
    let div = document.createElement('div')
    div.id='desu'
    div.innerHTML=`<p class="para" >${a}</p>
    <p class="para" >${b}</p>
    <p>${c}</p>
    `
    return div
}
let bowton = (a) =>{
    let div = document.createElement('div')
    div.id='daisuke'
    div.innerHTML=`<button class="x">${a}</button>
    <button class="x">${a}</button>
    <button>${a}</button>`

    return div
}
export { cards, cardsTitle, bowton }