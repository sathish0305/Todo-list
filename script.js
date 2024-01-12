let inputbox = document.getElementById('textbox')
let savebtn = document.getElementById('savebtn')
let taskcard = document.getElementById('taskcard')

let taskbox = document.getElementById('taskbox')

let taskList = []

let saveaction = ()=>{
    let newTask = inputbox.value
    console.log(newTask)
    taskList.push(newTask)
    console.log(taskList)
}
savebtn.addEventListener('click', saveaction)