function protectDog(dog) 
{
    const protectedDog = {...dog};

    recursiveObject(protectedDog);

    function recursiveObject(object)
    {
        if(typeof object === 'object')
        {
            Object.freeze(object);

            for(let property in object)
            {
                recursiveObject(object[property])
            }
        }
    }
    
    return protectedDog;
}

const protectedDog = protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
  })
  

protectedDog.owner.name = "Pedro";

console.log(protectedDog.owner.name);