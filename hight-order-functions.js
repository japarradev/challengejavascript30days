function myMap(array, func) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        newArray.push(func(element));
    }
    return newArray;
  }
  
  const elements = MyMap([1,2,3,4], (num) => num * 2);
  console.log('Elements', elements);
