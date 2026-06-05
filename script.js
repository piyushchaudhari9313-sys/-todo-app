  let inputs = document.querySelector("#inp");
  let text = document.querySelector(".text"); 
  let value = [];
  let savevalue = JSON.parse(localStorage.getItem("values"));

  if (savevalue) {
    value = savevalue;
  }
  value.forEach((data, index) => {
    let newel = document.createElement("ul");
    newel.innerHTML = data + "<i class='fa-solid fa-trash'></i>";
    text.appendChild(newel);
    newel.querySelector("i").addEventListener("click", remove);
    
    function remove() {
      newel.remove();
      value.splice(index, 1);
      localStorage.setItem("values", JSON.stringify(value));
    }
  });
  function Add() {
    if (inputs.value === "") {
      alert("Please Enter Task");
    } 
    else {
      let task=inputs.value;
      value.push(task);
      localStorage.setItem("values", JSON.stringify(value));
      let newel = document.createElement("ul");
      newel.innerHTML = task + "<i class='fa-solid fa-trash'></i>";
      text.appendChild(newel);
      inputs.value = "";
      newel.querySelector("i").addEventListener("click", remove);
      function remove() {
        newel.remove();
        value.splice(value.indexOf(task), 1);
      localStorage.setItem("values", JSON.stringify(value));
      }
    }
  }
