function searchValue(array, value) 
{
  let row = 0;
  let column = 0;

  if (array.flat(1).includes(value))
  {
    for (let index = 0; index < array.length; index++) 
    {
        const element = array[index];    
        if(element.includes(value))
        {
            row = index;
            column = element.findIndex(item => item === value);
            break;
        }
    }
    return {row, column}
  }
  else
  {
    throw new Error("Valor no encontrado");
  }
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
const value = 45;
  
console.log(searchValue(array, value));

