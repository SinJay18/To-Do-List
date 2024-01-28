export function createButton(text, type, className){
    const button = document.createElement('button')
    button.innerText = text
    button.className = className
    button.type = type
    return button
}

export function createForm(className){
    const form = document.createElement('form')
    form.className = className
    return form
}

export function addInput(type, placeholder, className){
    const input = document.createElement('input')
    input.type = type
    input.placeholder = placeholder
    input.className = className
    return input
}

export function createTaskText(className, task){
    const taskText = document.createElement('span')
    taskText.className = className
    taskText.innerText = task
    return taskText
}

export function createTaskDate(className, date){
    const taskDate = document.createElement('time')
    taskDate.className = 'date'
    taskDate.innerText = date 
    return taskDate
}