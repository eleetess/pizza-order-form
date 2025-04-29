//1. Listen for the form’s submit event
//Use event.preventDefault() to stop the page from reloading
//Grab values from each input
//Create a new <tr> and <td> elements
// Add the new row to the bottom of the table
let myForm = document.getElementById ("myForm");
let fname= document.getElementById ("fname");
let lname= document.getElementById ("lname");
let address=document.getElementById("address");
let sizes= document.getElementById("sizes")
let shrooms=document.getElementById("shrooms");
let pepper=document.getElementById("pepper");
let instructions=document.getElementById("instructions")
let excheese=document.getElementById("excheese")
function makeThisWork (event){
    event.preventDefault();
    let tablefable=document.getElementById("tablefable")
    let row= document.createElement("tr")
    let fullname=document.createElement("td")
    let size=document.createElement("td")
    let toppings=document.createElement("td")
    let delivery=document.createElement("td")

    let ingredients=[]
    if (shrooms.checked){
        ingredients.push(shrooms.value)
    }if (pepper.checked){
        ingredients.push(pepper.value)
    }if (excheese.checked){
        ingredients.push(excheese.value)
    }
        
    

let string=ingredients.join(", ")
    toppings.innerText= string
    delivery.innerHTML=instructions.value
    size.innerHTML=sizes.value
    fullname.innerHTML=fname.value + " "+ lname.value
    row.appendChild(fullname)
    row.appendChild(size)
    row.appendChild(toppings)
    row.appendChild(delivery)
    tablefable.appendChild(row)
}
myForm.addEventListener("submit",makeThisWork)