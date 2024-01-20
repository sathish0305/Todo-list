let inputbox = document.getElementById('textbox')
let savebtn = document.getElementById('savebtn')
let deletebtn = document.getElementById('deletebtn')
let section = document.querySelector('section')
let taskArray = localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) : [];

console.log(taskArray)
let saveItem = (text) => {
    let card = document.createElement('div')
    card.classList.add('card')

    let taskText = document.createElement('div')
    taskText.classList.add('taskText')
    taskText.innerHTML = JSON.parse(text).new_task
    card.appendChild(taskText)
    section.append(card)


    let boxes = document.createElement('div')
    let complete = document.createElement('div')
    let deleteTask = document.createElement('div')

    boxes.classList.add('boxes')
    card.appendChild(boxes)

    complete.classList.add('complete')
    boxes.appendChild(complete)

    deleteTask.classList.add('deleteTask')
    boxes.appendChild(deleteTask)

}

taskArray.forEach(saveItem);

let addTask = () => {
    if (inputbox.value === '') {
        alert('textbox must not be empty')
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
    localStorage.clear()
    taskArray.length = 0;
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}
savebtn.addEventListener('click', addTask)
deletebtn.addEventListener('click', deleteAllTasks)