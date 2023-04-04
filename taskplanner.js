function createTaskPlanner() 
{
    const tasks = [];

    return {
        addTask: (task) => {
            const newTask = {...task, completed:false}
            tasks.push(newTask);
        },
        removeTask: (value)=>{
            const index = tasks.findIndex(item => item.id === value || item.name === value);
            tasks.splice(index, 1);
        },
        getTasks: ()=> tasks,
        getPendingTasks: () => tasks.filter(item => !item.completed),
        getCompletedTasks:()=> tasks.filter(item => item.completed),
        markTaskAsCompleted:(value)=>{
            const index = tasks.findIndex(item => item.id === value || item.name === value);
            tasks[index].completed = true;
        },
        getSortedTasksByPriority:()=> {
            const newTasksSort = [...tasks];
            newTasksSort.sort((a,b) => a.priority - b.priority)
            return newTasksSort },
        filterTasksByTag: (tag)=> tasks.filter(item => item.tags.find(element => element === tag)),
        updateTask : (taskId, updates) =>{
            const index = tasks.findIndex(item => item.id === taskId);
            tasks[index] = {...tasks[index], ...updates}
        }
    }
}

// Test 1
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });


// planner.addTask({
//     id: 2,
//     name: "Llamar a Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// planner.markTaskAsCompleted("Llamar a Juan")


// console.log(planner.getCompletedTasks())


// Test 2


const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

console.log(planner.getSortedTasksByPriority())
