const heading = document.querySelector("#heading");
heading.classList.add("red-text");
heading.style.backgroundColor="Orangered"

const p = document.createElement("p");
p.textContent = "Ancient India spanned from the rise of the Indus Valley Civilization (around 3300–2500 BCE) with planned cities like Harappa and Mohenjo-daro to the classical era of the Gupta Empire (4th–6th centuries CE). Along the way, the Vedic period gave rise to foundational texts and social structures, while later centuries saw the emergence of Buddhism and Jainism, the broad territorial unification under the Maurya Empire and Ashoka, and major advances in mathematics, astronomy, literature, and art"
//It won't show until we append it
document.body.appendChild(p)
p.style.backgroundColor="blue"
p.style.color="green"

const div=document.getElementById("div")
div.style.backgroundColor="orange"
div.style.color="pink"
