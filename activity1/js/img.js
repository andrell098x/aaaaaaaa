const image = (a) => {
    let div = document.createElement('div')
    div.id ='right'
    div.innerHTML=`<img src="${a}">`

    return div
}
export { image }