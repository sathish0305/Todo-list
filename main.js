let inputbox = document.getElementById('textbox')
let savebtn = document.getElementById('savebtn')
let deletebtn = document.getElementById('deletebtn')
let section = document.querySelector('section')
let taskList = document.getElementById('list')
let taskArray = (localStorage.length === 0)? [].sort() : Object.keys(localStorage).sort()

let deleteAllTasks = ()=>{
    localStorage.clear()
}

let saveTask = (task)=>{
    let li = document.createElement('li')
    li.innerHTML = localStorage.getItem(task)
    taskList.append(li)
}

if(localStorage.length>0){
    taskArray.forEach((task)=>saveTask(task))
}

let taskid = localStorage.length
let addTask = ()=>{
    let new_task = inputbox.value
    taskArray.push(`task${taskid}`)
    localStorage.setItem(`task${taskid}`,new_task)
    saveTask(`task${taskid}`)
    taskid+=1
    inputbox.value = ''
    
}

savebtn.addEventListener('click',addTask)
deletebtn.addEventListener('click',deleteAllTasks)