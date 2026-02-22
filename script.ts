interface Task{
    id: number;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
}

let firstTask: Task = {
    id: 1,
    title: 'Learn TypeScript interfaces',
    status: 'todo'
}

let secondTask: Task = {
    id: 2,
    title: 'Build task management app',
    status: 'in-progress'
}

let thirdTask: Task = {
    id: 3,
    title: 'Write unit tests',
    status: 'done'
}

function getTaskInfo(task: Task):string{
    return `Task ${task.id}: ${task.title} - ${task.status}`
}

function addTask(taskList: Task[], title: string): Task[] {
    let newTask: Task = {
        id: taskList.length + 1,
        title: title,
        status: 'todo'
    }

    return [...taskList, newTask]
}

function changeTaskStatus(taskList: Task[], taskId:number, newStatus: 'todo' | 'in-progress' | 'done'): Task[]{
    return taskList.map(task =>
        task.id === taskId ?
            {...task, status: newStatus}
            : task
    )
}

function listTasksByStatus(taskList: Task[], status: 'todo' | 'in-progress' | 'done'): Task[]{
    return taskList.filter(task => task.status === status)
}

function printTaskSummary(task: Task): void{
    console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`)
}

function printAllTaskSummary(tasks: Task[]): void{
    tasks.forEach(task => console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`))
}

// Print the required outputs
console.log(getTaskInfo(firstTask))
console.log(getTaskInfo(secondTask))
console.log(getTaskInfo(thirdTask))
console.log(firstTask.status)
console.log(secondTask.title)

const initialTasks: Task[] = [firstTask, secondTask]
const updateTasks: Task[] = addTask(initialTasks, 'Review code changes')

console.log(initialTasks.length)
console.log(updateTasks.length)
console.log(getTaskInfo(updateTasks[updateTasks.length-1]))
console.log(updateTasks[updateTasks.length-1].title)
console.log(updateTasks[updateTasks.length-1].status)


const testTasks: Task[] = [firstTask, secondTask, thirdTask]
const progressTasks = changeTaskStatus(testTasks, 1, 'in-progress')
const completedTasks = changeTaskStatus(progressTasks, 2, 'done')

console.log(getTaskInfo(testTasks[0]))
console.log(getTaskInfo(progressTasks[0]))
console.log(getTaskInfo(completedTasks[1]))
console.log(testTasks[0].status)
console.log(completedTasks[1].status)

const mixedTasks: Task[] = [firstTask, secondTask, thirdTask]
const todoTasks = listTasksByStatus(mixedTasks, 'todo')
const inProgressTasks = listTasksByStatus(mixedTasks, 'in-progress')
const doneTasks = listTasksByStatus(mixedTasks, 'done')

console.log(mixedTasks.length)
console.log(todoTasks.length)
console.log(inProgressTasks.length)
console.log(doneTasks.length)
console.log(getTaskInfo(todoTasks[0]))
console.log(getTaskInfo(inProgressTasks[0]))
console.log(getTaskInfo(doneTasks[0]))

const projectTasks: Task[] = [
    {
        id: 201,
        title: 'Setup development environment',
        status: 'done'
    },

    {
        id: 202,
        title: 'Create project structure',
        status: 'todo'
    },
]

const expandedTasks = addTask(projectTasks, 'Write documentation')
const updatedProjectTasks = changeTaskStatus(expandedTasks, 202, 'in-progress')
const finalTask = changeTaskStatus(updatedProjectTasks, 3, 'done')
const completedProjectTasks = listTasksByStatus(finalTask, 'done')

console.log(projectTasks.length)
console.log(finalTask.length)
console.log(completedProjectTasks.length)
printTaskSummary(completedProjectTasks[0])
printTaskSummary(completedProjectTasks[completedProjectTasks.length-1])
printAllTaskSummary(finalTask)
















