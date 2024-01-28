import { addEventListenerSubmit, deleteAllTasksTrigger, deleteLastTaskTrigger } from './listeners.js';
import { createButton, createForm, addInput } from './mapping.js';
import { renderTasks } from './render.js';

//! Переменные разметки
const root = document.getElementById('root')

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'

const header = document.createElement('header')
export const taskContainer = document.createElement('div')
taskContainer.className = 'task-container'

//! Добавление разметки
root.append(mainContainer)
const title = document.createElement('h3')
title.innerText = 'My To Do List'

mainContainer.append(title, header, taskContainer)

header.append(createForm('form-task'))
export const formTask = header.querySelector('.form-task')
formTask.append(createButton('Delete All', 'button', 'button-dlt-all'), createButton('Delete Last', 'button', 'button-dlt-last'), addInput('text', 'Create your new task', 'input-task'), createButton('Add', 'submit', 'button'))

//! Переменные для функций
export const inputValue = document.querySelector('.input-task')
export const todaysDate = new Date().toLocaleDateString()
export const deleteAllTasksBtn = document.querySelector('.button-dlt-all')
export const deleteTaskBtn = document.querySelector('.button-x') 
export const deleteLastTaskBtn = document.querySelector('.button-dlt-last')
export let usersTasks = []


//! Функции
export function getDataLocalStorage() {
    if (localStorage.getItem('todos')){
        usersTasks = JSON.parse(localStorage.getItem('todos'))
        renderTasks();
    }
}

export function setToLocalStorage(key, task) {
    localStorage.setItem('todos', JSON.stringify(usersTasks));
}

addEventListenerSubmit()
deleteAllTasksTrigger()
deleteLastTaskTrigger()
getDataLocalStorage()