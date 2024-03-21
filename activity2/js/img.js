const image = (a) => {
    let div = document.createElement('div')
    div.id ='right'
    div.innerHTML=`<img src="${a}">`

    return div
}
const image2 = (a,b,c) => {
    let div = document.createElement('div')
    div.id ='images'
    div.innerHTML=`<img class="p" src="${a}">
    <img class="p" src="${b}">
    <img src="${c}">
    `

    return div
}
export { image, image2 }