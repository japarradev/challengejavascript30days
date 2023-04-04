 function doTask1() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Task 1'), 300);
    })
  }
  
 function doTask2() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Task 2'), 300);
    })
  }
  
 function doTask3() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Task 3'), 300);
    })
  }
  
async function runCode() 
{
    const strings = [];
    
    
    const task1  = await doTask1();
    strings.push(task1);

    const task2  = await doTask2();
    strings.push(task2);

    const task3  = await doTask3();
    strings.push(task3);

    return strings;

}

runCode().then(response => console.log(response));