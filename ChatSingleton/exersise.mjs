import { User } from "./user.mjs";

class Chat 
{
    constructor()
    {
        if(!Chat.instance)
        {
            this.name = 'Chat';
            this.users = [];
            Chat.instance = Object.freeze(this);
        }
        return Chat.instance;
    }

    sendMessage(message)
    {
        this.users.forEach(element => element.receiveMessage(message));
    }

    addUser(user)
    {
        if( user instanceof User)
        {
            this.users.push(user);   
        }
        else
        {
            throw new Error('El campo no es un usuario')
        }

    }
    removeUser(name)
    {
        const userIndex = this.users.findIndex(element => element.name === name);

        if (userIndex !== -1)
        {
            this.users.splice(userIndex, 1);
        }
        else
        {
            throw new Error('No se encontro un usuario')
        }
    }
}

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");

chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages);
console.log(user2.messages);