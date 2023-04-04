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
  

function runCode() 
{
    const strings = [];
    
    return doTask1()
    .then(response => strings.push(response))
    .then(() => doTask2())
    .then(response => strings.push(response))
    .then(()=> doTask3())
    .then(response => strings.push(response))
    .then(response => strings);
        

}

runCode().then(response => console.log(response));