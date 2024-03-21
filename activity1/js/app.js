
import { infos } from "./info.js"
import { image } from "./img.js"

let sect1 = document.querySelector('.content')
let mydata = {
    title:"Why <span>cat</span> is a good pet!",
    description: "Cats make excellent pets due to their independent yet affectionate nature, requiring less attention and maintenance compared to many other animals, which makes them ideal for a variety of living situations. They offer companionship and emotional support, often forming strong bonds with their owners. Additionally, their playful and curious behaviors provide endless entertainment, while their natural hunting instincts can help keep your home free from pests. Coupled with their ability to adapt to small living spaces and the health benefits they bring to their humans, including reduced stress and improved emotional well-being, cats are a popular and rewarding choice for pet owners.",
    btn:"Contact me",
    img:"./images/first.jpg",
}

let {title, description, btn, img} = mydata

sect1.append(infos(title, description, btn))
sect1.append(image(img))