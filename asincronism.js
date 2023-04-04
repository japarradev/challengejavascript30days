

function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email != "" && subject != "" && body != "")
            {
                resolve({email: email, subject:subject, body:body})
            }
            else
            {
                reject(new Error("Hacen falta campos para enviar el email"))
            }    
        }, 2000);
    })
  }
console.log(

    sendEmail(
        "test@mail.com",
        "",
        "Únete a los 30 días de JS"
      )
      .then(result => console.log(result))
      .catch(error => console.log(error))
)