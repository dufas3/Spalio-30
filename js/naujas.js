const task = document.querySelector("input")
const addTask = document.querySelector("button")

addTask.addEventListener(`click`, ()=>{
    const tasksList = document.querySelector("ul"); //Task list in ul
    let li = document.createElement("li") //Create li element
    li.textContent = task.value; //Asign contenty to li
    tasksList.appendChild(li); // Add li to ul
})

document.querySelector(".delete").addEventListener("click",()=>{
    let tasksList = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    tasksList.removeChild(li)
})