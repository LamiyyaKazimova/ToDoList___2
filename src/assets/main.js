export function add (){
    editButton.addEventListener("click",()=>{
    newInput.style.display="block"
    newInput.classList.add("input")
    newInput.value=span.textContent
    span.style.display="none"
    editButton.style.display="none"
    deleteButton.style.display="none"
    newButton.style.display="block"
  
})
}
