const questionContenaire = document.querySelector(".click");
const btn1 = document.querySelector("#btn1");
const  btn2 = document.querySelector("#btn2");
const response = document.querySelector("p");

questionContenaire.addEventListener("click",()=>{
  questionContenaire.classList.toggle("question-clicked")
});
btn1.addEventListener("click", ()=>{
  response.classList.add("show-response")
  response.style.background="red"
});
btn2.addEventListener("click", ()=>{
  response.classList.add("show-response")
  response.style.background="green"
});
//----------------------------------------------------------

const mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e)=> {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageX + "px";
});

window.addEventListener("mousedown",(e)=>{
  mousemove.style.transform ="scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup",(e)=>{
  mousemove.style.transform ="scale(1) translate(-50%,-50%)";
  mousemove.style.border ="1px solid teal";
});

questionContenaire.addEventListener("mouseenter",(e)=>{
  questionContenaire.style.background ="rgba(0,0,0,0.6)";
});

questionContenaire.addEventListener("mouseout",(e)=>{
  questionContenaire.style.background ="pink";
});

response.addEventListener("mouseover",(e)=>{
  response.style.transform = "rotate(360deg)";
});
const keypressContenaire = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress",(e)=>{
key.textContent = e.key;
if (e.key === "j") {
  keypressContenaire.style.background ="pink";
} else if (e.key === "k"){
  keypressContenaire.style.background ="teal";
} else {
  keypressContenaire.style.background="red";
}
});