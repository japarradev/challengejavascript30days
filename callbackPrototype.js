function arrayModified()
{

  Array.prototype.myFilter = function(callback)
  {
    const newArray = [];

    for (let index = 0; index < this.length; index++) 
    {
        const element = array[index];

        const newElement =  callback(element)
        newArray.push(newElement)
        
    }
    return newArray;
  };

  const array = [1,2,3,4,5,6]

  console.log(array.myFilter(num => num + 2))
  
  

}

arrayModified()