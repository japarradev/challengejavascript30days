function printTriangle(size, character) 
{   let triangle = "";
        for (let index = 1; index <= size; index++) 
        {
            const row = character.repeat(index).padStart(size, ' ');
            
            triangle += row;

            if(index != size)
            {
               triangle += "\n";
            }            
        }

        return triangle;

  }
  
console.log(printTriangle(6, "$"));