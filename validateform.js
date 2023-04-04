function validateForm(formData, registeredUsers) 
{
    const errorString = []
    const validateEmail = registeredUsers.findIndex(element => element.email === formData.email);

    if(!formData.hasOwnProperty('name'))
    {
        errorString.push('name')
    }
    if(!formData.hasOwnProperty('lastname'))
    {
        errorString.push('lastname')
    }
    if(!formData.hasOwnProperty ('email'))
    {
        errorString.push('email')
    }
    if(!formData.hasOwnProperty('password'))
    {
        errorString.push('password')
    }
    

    if(errorString.length > 0)
    {   
        throw new Error(`Faltan los siguientes campos: ${errorString.join(", ")}`);
    }
    else if(validateEmail !== -1)
    {
        const error = `Email ${formData.email} ya se encuentra en la lista de usuarios registrados ${JSON.stringify(registeredUsers)}`
        throw new Error(error)
    }
    else
    {

        registeredUsers.push(
            {
                name:formData.name,
                lastname:formData.lastname,
                email:formData.email
            }
        )
       
        return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`
    }
        
}


const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  
  
  console.log(validateForm(formData, registeredUsers))
