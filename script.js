let inputs=document.querySelector("#inp");
let text=document.querySelector(".text");

function Add(){
    if(inputs.value===""){

        alert("Please Enter Task");
    }
    else{
        let newel=document.createElement("ul");
        newel.innerHTML=inputs.value+"<i class='fa-solid fa-trash'></i>"
        text.appendChild(newel);
        inputs.value="";
        newel.querySelector("i").addEventListener("click",remove);
        function remove(){
            newel.remove()
        }
    }
}