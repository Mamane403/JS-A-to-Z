 const questionContenaire = document.querySelector(".click");
const btn1 = document.querySelector("#btn1");
const  btn2 = document.querySelector("#btn2");
const response = document.querySelector("p");


questionContenaire.addEventListener("click",()=>{
  questionContenaire.classList.toggle("questionclicked")
});
btn1.addEventListener("click", ()=>{
  response.classList.add("show-response")
  response.style.background="red"
});
btn2.addEventListener("click", ()=>{
  response.classList.add("show-response")
  response.style.background="green"

});