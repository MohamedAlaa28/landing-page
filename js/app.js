//CREATING SECTION 4
const sec4 = document.createElement("section");
sec4.setAttribute("id", "section4");
sec4.setAttribute("data-nav", "Section 4");
//CREATING THE DIV INSDIE
const dv = document.createElement("div");
dv.setAttribute("class", "landing__container");
//CREATING THE HEADER OF IT
const headerOne = document.createElement("h2");
headerOne.textContent = "Section 4";
//CREATING THE PARAGRAPHS
const para1 = document.createElement("p");
para1.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

const para2 = document.createElement("p");
para2.textContent =
  "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

// appending them to the div
dv.appendChild(headerOne);
dv.appendChild(para1);
dv.appendChild(para2);
//appending the div to the section
sec4.appendChild(dv);
//appening the section to main
// select main
const main = document.querySelector("main");
//the appending
main.appendChild(sec4);
//_________________________________________________________________________________
//CREATING SECTION 5
const sec5 = document.createElement("section");
sec5.setAttribute("id", "section5");
sec5.setAttribute("data-nav", "Section 5");
//CREATING THE DIV INSDIE
const dv2 = document.createElement("div");
dv2.setAttribute("class", "landing__container");
//CREATING THE HEADER OF IT
const headerTwo = document.createElement("h2");
headerTwo.textContent = "Section 5";
//CREATING THE PARAGRAPHS that the same but we need to creat a copy becuase appendChild to move it from Section 4
const paraTwo1 = document.createElement("p");
paraTwo1.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

const paraTwo2 = document.createElement("p");
paraTwo2.textContent =
  "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

// appending them to the div
dv2.appendChild(headerTwo);
dv2.appendChild(paraTwo1);
dv2.appendChild(paraTwo2);
//appending the div to the section
sec5.appendChild(dv2);
//appening the section to main
main.appendChild(sec5);
//_________________________________________________________________________________

//creating nav elements
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
  const newA = document.createElement("a");
  const newLi = document.createElement("li");
  newA.textContent = "Section " + i;
  newA.setAttribute("href", "#section" + i);
  //put some style
  newA.style.color = "white";
  newA.style.textDecoration = "none";
  newA.style.fontFamily = "Fira Sans";
  //appening
  newLi.append(newA);
  newLi.setAttribute("class", "nav-item");
  newLi.style.margin = "15px";
  fragment.appendChild(newLi);
}

//appening them to ul and some style
const navUl = document.querySelector("#navbar__list");
navUl.appendChild(fragment);
const navheader = document.querySelector("header");
navheader.style.backgroundColor = "black";
//_________________________________________________________________________________

// function scrolled(ev) {
//   const sec1 = document.querySelector("#section1");
//   const sec2 = document.querySelector("#section2");
//   const sec3 = document.querySelector("#section3");
//   const sections = document.querySelectorAll("section");
//   var postionsT = [];
//   for (var section of sections) {
//     section.classList.remove("your-active-class");
//     postionsT.push(section.getBoundingClientRect().top);
//   }
//   var sec1T = sections[0];
//   var sec2T = sections[1];
//   var sec3T = sections[2];
//   var sec4T = sections[3];
//   var sec5T = sections[4];
//   var posT = document.body.getBoundingClientRect().top;
//   if (posT === sec1T) {
//     sec1.classList.add("your-active-class");
//   } else if (posT === sec2T) {
//     sec2.classList.add("your-active-class");
//   } else if (posT === sec3T) {
//     sec4.classList.add("your-active-class");
//   } else if (posT === sec4T) {
//     sec4.classList.add("your-active-class");
//   }
// }

const hypers = document.querySelectorAll("a");

function clicke(evt) {
  evt.target.setAttribute("class", " your-active-class");
  evt.target.scrolIntoView({
    behavioe: smoth,
  });
}
hypers.addEventListener("click", clicke);

const clickedFunction = function clicked(evet) {};

const navItems = document.querySelector("li");
navItems.addEventListener("click", clickedFunction());

var topPage = document.body.getBoundingClientRect().top;
// if ( topPage <1)
