import { input,button,div,wrapper,body,sure,yes,no,text,orderedList } from "./assets/consts.js"
import { add } from "./assets/main.js";


button.addEventListener("click",()=>{
    if(input.value.trim()===""){
     return;
    }
    const li=document.createElement("li")
    li.classList.add("li")

    const span=document.createElement("span")
    span.classList.add("span")

    span.textContent=input.value

    const commonButton=document.createElement("span")
    commonButton.classList.add("buttons")
    const editButton=document.createElement("button")
    editButton.textContent="Edit"
    editButton.classList.add("edit")
    const deleteButton=document.createElement("button")
    deleteButton.textContent="Delete"
    deleteButton.classList.add("delete")
    
    const newInput=document.createElement("input")
    newInput.style.display="none"

    
   add()
   
    
    const newButton=document.createElement("button")
    newButton.classList.add("button")
    newButton.textContent="Okay"
    newButton.style.display="none"
    

    newButton.addEventListener("click",()=>{
    span.style.display="block"
    span.textContent=newInput.value
    newInput.style.display="none"
    newButton.style.display="none"
    editButton.style.display="block"
    deleteButton.style.display="block"
    })

    sure.classList.add("none")


    deleteButton.addEventListener("click",()=>{
    sure.classList.remove("none")
    text.textContent=`Are you sure ${span.textContent}?`

    yes.addEventListener("click",()=>{
    li.remove()
    sure.classList.add("none")

    })

    no.addEventListener("click",()=>{
    sure.classList.add("none")
    })


    })

    commonButton.append(editButton,deleteButton)
    li.append(span,newInput, commonButton,newButton)
    orderedList.append(li)
    wrapper.append(orderedList)


    input.value=""


})



