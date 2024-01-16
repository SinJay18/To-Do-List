const root = document.getElementById('root')

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'

const header = document.createElement('header')
const subHeader = document.createElement('section')
subHeader.className = 'sub-header'

const taskContainer = document.createElement('div')
taskContainer.className = 'task-container'
const taskCard = document.createElement('div')
taskCard.className = 'task-card'
const taskCardCompleted = document.createElement('div')
taskCardCompleted.classList.add('task-card', 'task-card-completed')

const buttonDeleteAll = document.createElement('button')
buttonDeleteAll.classList.add('button', 'button-header')

const buttonDeleteLast = document.createElement('button')
buttonDeleteLast.classList.add ('button', 'button-header')

const inputContainer = document.createElement('div')
inputContainer.className = 'input-container'
const inputAddTask = document.createElement('input')
inputAddTask.className = 'input-task'
inputAddTask.type = 'text'
inputAddTask.placeholder = 'Create your new task'

const buttonAddTask = document.createElement('button')
buttonAddTask.classList.add ('button', 'button-header')

root.append(mainContainer)
const title = document.createElement('h3')
title.innerText = 'My To Do List'
mainContainer.append(title, header, subHeader, taskContainer)

header.append(buttonDeleteAll, buttonDeleteLast, inputContainer, buttonAddTask)
inputContainer.append(inputAddTask)

buttonDeleteAll.innerText = 'Delete All'
buttonDeleteLast.innerText = 'Delete Last'
buttonAddTask.innerText = 'Add'

const buttonTasksAmount = document.createElement('button')
buttonTasksAmount.classList.add ('button', 'button-subheader')

const buttonCompletedAmount = document.createElement('button')
buttonCompletedAmount.classList.add ('button', 'button-subheader')

const buttonShowAllTasks = document.createElement('button')
buttonShowAllTasks.classList.add ('button', 'button-subheader')

const buttonShowCompleted = document.createElement('button')
buttonShowCompleted.classList.add ('button', 'button-subheader')

const inputSearchContainer = document.createElement('div')
inputSearchContainer.className = 'input-search-container'
const inputSearch = document.createElement('input')
inputSearch.className = 'input-search'
inputSearch.type = 'search'
inputSearch.placeholder = 'Search...'

subHeader.append(buttonTasksAmount, buttonCompletedAmount, buttonShowAllTasks, buttonShowCompleted, inputSearchContainer)
inputSearchContainer.append(inputSearch)

buttonTasksAmount.innerText = 'All'
buttonCompletedAmount.innerText = 'Completed: 1'
buttonShowAllTasks.innerText = 'Show All Tasks'
buttonShowCompleted.innerText = 'Show Completed'

taskContainer.append(taskCard, taskCardCompleted)

const checkboxContainer = document.createElement('div')
checkboxContainer.className = 'checkbox-container'
const inputButton = document.createElement('input')
inputButton.className = 'input-button'
inputButton.type = 'checkbox'

const todoText = document.createElement('p')
todoText.className = 'todo-text'

const buttonDeleteTask = document.createElement('button')
buttonDeleteTask.className = ('button-x')

const date = document.createElement('time')
date.setAttribute('datetime', '2024/01/16')
date.className = 'date'

const checkboxContainerDone = document.createElement('div')
checkboxContainerDone.className = 'checkbox-container'
const inputButtonDone = document.createElement('input')
inputButtonDone.className = 'input-button'
inputButtonDone.type = 'checkbox'

const todoTextDone = document.createElement('p')
todoTextDone.className = 'todo-text'

const buttonDeleteDoneTask = document.createElement('button')
buttonDeleteDoneTask.className = ('button-x')

const previousDate = document.createElement('time')
previousDate.setAttribute('datetime', '2024/01/13')
previousDate.className = 'previous-date'

taskCard.append(checkboxContainer, todoText, buttonDeleteTask, date)
checkboxContainer.append(inputButton)
taskCardCompleted.append(checkboxContainerDone, todoTextDone, buttonDeleteDoneTask, previousDate)
checkboxContainerDone.append(inputButtonDone)

todoText.innerText = 'Pet my Cat'
buttonDeleteTask.innerText = 'X'
date.innerText = '2024/01/16'

todoTextDone.innerText = 'Do my HW'
buttonDeleteDoneTask.innerText = 'X'
previousDate.innerText = '2024/01/13'