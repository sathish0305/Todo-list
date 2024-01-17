let inputbox = document.getElementById('textbox')
let savebtn = document.getElementById('savebtn')
let section = document.querySelector('section')

let saveaction = () => {
    if (inputbox.value === ''){
        alert('Task must not be Empty')
    }else{
        let newTask = inputbox.value
        let taskdesc = document.createElement('div')
        taskdesc.classList.add('taskdesc')
        let taskText = document.createElement('p')
        taskText.innerHTML = newTask
        taskdesc.appendChild(taskText)
        section.appendChild(taskdesc)
    
        let statusContainer = document.createElement('div')
        statusContainer.classList.add('statusContainer')
        taskdesc.appendChild(statusContainer)
    
        let statusTextContainer = document.createElement('div')
        statusTextContainer.classList.add('statusTextContainer')
        statusTextContainer.innerHTML = 'STATUS'
        statusContainer.appendChild(statusTextContainer)
    
        let statusBoxes = document.createElement('div')
        statusBoxes.classList.add('statusBoxes')
        statusContainer.appendChild(statusBoxes)
    
        let not_started = document.createElement('div')
        let in_progress = document.createElement('div')
        let completed = document.createElement('div')
    
        not_started.innerHTML = 'Not Started'
        in_progress.innerHTML = 'In Progress'
        completed.innerHTML = 'Completed'
    
        statusBoxes.appendChild(not_started)
        statusBoxes.appendChild(in_progress)
        statusBoxes.appendChild(completed)
    
        not_started.addEventListener('click',()=>{
            taskdesc.style.background = '#FF595E'
            not_started.style.border = '1px solid black'
            in_progress.style.border = 'none'
            completed.style.border = 'none'
        })
    
        in_progress.addEventListener('click',()=>{
            taskdesc.style.background = '#FFCA3A'
            in_progress.style.border = '1px solid black'
            not_started.style.border = 'none'
            completed.style.border = 'none'
        })
    
        completed.addEventListener('click',()=>{
            taskdesc.style.background = '#8AC926'
            completed.style.border = '1px solid black'
            not_started.style.border = 'none'
            in_progress.style.border = 'none'
    
        })
        inputbox.value = ''
    }
}
savebtn.addEventListener('click', saveaction)