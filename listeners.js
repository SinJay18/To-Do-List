import { addToDo, deleteAllTasks, deleteLastTask } from './tasks.js'
import { usersTasks, formTask, deleteAllTasksBtn, deleteLastTaskBtn, inputValue, todaysDate, setToLocalStorage } from './index.js'
import { createTaskDate, createTaskText } from './mapping.js'

//! Слушатели событий
export function addEventListenerSubmit() {
    formTask.addEventListener('submit', (event) => {
        event.preventDefault()
        if(inputValue.value){
        const task = {
            id: self.crypto.randomUUID(),
            text: `${inputValue.value}`,
            isCompleted: false,
            date: new Date().toLocaleDateString()
        }
        usersTasks.push(task)
            addToDo(task, createTaskText('text', `${inputValue.value}`), createTaskDate('date', `${todaysDate}`), task.id, task.isCompleted)
            } else{
                return alert('Enter your task')
            }
        inputValue.value = ''
        setToLocalStorage()
    })
}

export function deleteAllTasksTrigger() {
    deleteAllTasksBtn.addEventListener('click', (event) => {
        deleteAllTasks()
    })
}

export function deleteLastTaskTrigger() {
    deleteLastTaskBtn.addEventListener('click', (event) => {
        deleteLastTask()
    })
}
