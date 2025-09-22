/*Mini Project: Task Manager with Closures
Problem Statement
Create a Task Manager using JavaScript that:
1. Allows adding new tasks.
2. Marks a task as completed.
3. Removes a task.
4. Shows all tasks.
5. Filters tasks by their status (completed or not completed).
All data must be stored in a closure, so the task list cannot be modified directly from outside. 



Requirements
Each task should be stored as an object:
    { task: "Task name", done: false }
- Use array methods (push, filter, map, etc.) where appropriate.
- Return an object with methods:
    add(task) → adds a task
    markDone(task) → marks a task as completed
    remove(task) → removes a task
    getAll() → returns all tasks
    filterByStatus(status) → returns only tasks with done === status



Example Usage
const myTasks = createTaskManager()

myTasks.add("Finish homework")
myTasks.add("Read a book")
myTasks.add("Buy milk")

console.log(myTasks.getAll())
// [
//   { task: "Finish homework", done: false },
//   { task: "Read a book", done: false },
//   { task: "Buy milk", done: false }
// ]

myTasks.markDone("Read a book")

console.log(myTasks.getAll())
// [
//   { task: "Finish homework", done: false },
//   { task: "Read a book", done: true },
//   { task: "Buy milk", done: false }
// ]

console.log(myTasks.filterByStatus(true))
// [{ task: "Read a book", done: true }] */