import  {taskContainer} from './index.js'
import  {usersTasks} from './index.js'
import  {addToDo} from './tasks.js'
import  {createTaskDate, createTaskText} from './mapping.js'
export const renderTasks = () => {
    taskContainer.innerHTML = '';
    
    if (usersTasks.length > 0) {
        usersTasks.forEach(task => {
            addToDo(task, createTaskText('text', `${task.text}`), createTaskDate('date', `${task.date}`), task.id, task.isCompleted)
        });
    } 
}