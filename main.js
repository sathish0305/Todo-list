let inputbox = document.getElementById('textbox')
let savebtn = document.getElementById('savebtn')
let deletebtn = document.getElementById('deletebtn')
let section = document.querySelector('section')
let taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
let emptyDiv = document.createElement('div')

let emptyTasks =()=>{
    if(taskArray.length === 0){
        emptyDiv.innerHTML = 'No Tasks, Add new Task!!!'
        emptyDiv.style.fontSize = '2rem'
        emptyDiv.style.marginTop = '2rem'
        emptyDiv.style.textAlign = 'center'
        section.appendChild(emptyDiv)
    }else{
        emptyDiv.style.display = 'none'
    }
}


let saveItem = (text) => {
    emptyTasks()
    let card = document.createElement('div')
    card.classList.add('card')

    let taskText = document.createElement('div')
    taskText.classList.add('taskText')
    taskText.innerHTML = JSON.parse(text).new_task
    card.appendChild(taskText)
    section.append(card)
    
    
    let boxes = document.createElement('div')
    let complete = document.createElement('div')
    let notStarted = document.createElement('div')
    let deleteTask = document.createElement('div')
    
    boxes.classList.add('boxes')
    card.appendChild(boxes)
    
    complete.classList.add('complete')
    boxes.appendChild(complete)
    
    notStarted.classList.add('notStarted')
    boxes.appendChild(notStarted)
    
    deleteTask.classList.add('deleteTask')
    boxes.appendChild(deleteTask)
    
    complete.addEventListener('click',()=>{
        let taskobj = JSON.parse(text)
        taskobj.current_status = 'complete'
        let str_taskobj = JSON.stringify(taskobj)
        taskArray[taskArray.indexOf(text)] = str_taskobj
        localStorage.setItem('tasks',JSON.stringify(taskArray))
        card.style.background = '#8ac926'
    })

    notStarted.addEventListener('click',()=>{
        let taskobj = JSON.parse(text)
        taskobj.current_status = 'not started'
        let ns_str_taskobj = JSON.stringify(taskobj)
        taskArray[taskArray.indexOf(text)] = ns_str_taskobj
        localStorage.setItem('tasks',JSON.stringify(taskArray))
        card.style.background = '#ff595e'
    })

    deleteTask.addEventListener('click',()=>{
        section.removeChild(card)
        let res = taskArray.indexOf(text)
        if (res > -1) {
            taskArray.splice(res, 1);  // Remove the element
        }
        localStorage.setItem('tasks',JSON.stringify(taskArray))
        location.reload()
        emptyTasks()
    })
    
    let task_object = JSON.parse(text)
    if(task_object.current_status === 'not started'){
        card.style.background = '#ff595e'
    }else if(task_object.current_status === 'complete'){
        card.style.background = '#8ac926'
    }
    
}

taskArray.forEach(saveItem);

let addTask = () => {
    if (inputbox.value === '') {
        alert('TaskBox should not be Empty!!')
    } else {
        let task = {
            current_status: 'not started',
            new_task: inputbox.value
        }
        taskArray.push(JSON.stringify(task))
        localStorage.setItem('tasks', JSON.stringify(taskArray))
        saveItem(JSON.stringify(task))
        inputbox.value = ''
    }
}
let deleteAllTasks = () => {
    if(taskArray.length === 0){
        alert('No Tasks to Delete')
    }else{
        localStorage.clear()
        taskArray.length = 0;
        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }
        location.reload()
    }
}
savebtn.addEventListener('click', addTask)
deletebtn.addEventListener('click', deleteAllTasks)
emptyTasks()