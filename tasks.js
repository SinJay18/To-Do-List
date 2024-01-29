import { createButton, addInput } from './mapping.js'
import { taskContainer } from './index.js'
import { renderTasks } from './render.js'
import { setToLocalStorage } from './index.js'
import { usersTasks } from './index.js'

export const addToDo = (task, text, date, id, isCompleted) => {

    const taskCard = document.createElement('li')
    taskCard.id = id
    if (isCompleted === true) {
        taskCard.className ='task-card-completed'
    } else {
        taskCard.className ='task-card'
    }
    taskCard.isCompleted = isCompleted
    const checkbox = addInput('checkbox', '', 'checkbox')
    checkbox.checked = taskCard.isCompleted

    checkbox.addEventListener('change', () => changeCardState(task))

    const deleteTaskBtn = createButton('X', 'button', 'button-x')
    deleteTaskBtn.addEventListener('click', () => deleteTask(taskCard.id))

    taskContainer.append(taskCard)

    taskCard.append(checkbox, text, deleteTaskBtn, date)

    return taskCard
}

export function changeCardState(task) {
    if (task.isCompleted === false) {
        task.isCompleted = true
    } else if (task.isCompleted === true) {
        task.isCompleted = false
    }
    renderTasks()
    setToLocalStorage()
}

export const deleteAllTasks =() => {
    if(usersTasks.length > 0){
        for (let i = usersTasks.length; i > 0; i--) {
            usersTasks.splice(usersTasks[i],1)
        }
    }
    renderTasks()
    setToLocalStorage()
}

export const deleteLastTask =() => {
if(usersTasks.length > 0){
    usersTasks.pop()
}
renderTasks()
setToLocalStorage()
}

export const deleteTask = (id) => {
    const taskIndex = usersTasks.findIndex(task => task.id === id)

    if (taskIndex !== -1) {
        usersTasks.splice(taskIndex, 1)
    }
    renderTasks()
    setToLocalStorage()
}