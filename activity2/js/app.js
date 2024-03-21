import { infos } from "./info.js"
import { image,image2 } from "./img.js"
import { cards,cardsTitle,bowton } from "./card.js"

let sect1 = document.querySelector('.sectionOne')
let mydata = {
    title:"Why <span>doberman</span> is a good dog!",
    description: "Dobermans are considered good dogs for several reasons, primarily due to their intelligence, loyalty, and versatility. Here's a breakdown of why Dobermans might be seen as good companions or working dogs",
    btn:"Contact me",
    img:"./images/first.jpg",
}

let {title, description, btn, img} = mydata

sect1.append(infos(title, description, btn))
sect1.append(image(img))

let sect2 = document.querySelector('.sectionTwo')
let data = {
    myGreatness: "Why they are a <span>good</span> pet!",
    description1:"Health and Longevity: While Dobermans are prone to certain genetic health issues, like any breed, conscientious breeding practices have improved their health and lifespan. With proper care, regular veterinary check-ups, and a healthy lifestyle, Dobermans can live to be 10-13 years old, providing many years of companionship.",
    description2:"Loyalty and Protection: Dobermans are extremely loyal to their families and are known to be protective. This trait, combined with their intelligence and training, makes them excellent guard dogs. They have a natural instinct to protect their home and loved ones, although they need proper socialization to ensure they can distinguish between normal situations and genuine threats.",
    description3:"Energy and Playfulness: They are very energetic and require regular exercise to stay healthy and happy. This makes them great companions for active individuals or families who enjoy physical activities. Their playful nature can be delightful, and they often form strong bonds with their family members, including children, when properly introduced and supervised.",
    img1:"./images/second.jpg",
    img2:"./images/third.jpg",
    img3:"./images/fourth.jpg",
    btn1:"Learn More",
}

let { myGreatness, description1,description2,description3, img1, img2, img3, btn1 } = data
sect2.append(cardsTitle(myGreatness))
sect2.append(image2(img1,img2,img3))
sect2.append(cards(description1,description2,description3))
sect2.append(bowton(btn1))