const infos = (a,b,c) =>{
    let first = document.createElement('div')
    first.id='left'
    first.innerHTML = `<h1>${a}</h1>
    <p>${b}</p>
    <button>${c}</button>
    `

    return first
}
export { infos }