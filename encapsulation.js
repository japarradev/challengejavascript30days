const { measureMemory } = require("vm");

class User {
    constructor(name, age, friends = [], messages = [])
    {
        this._name      = name;
        this._age       = age;
        this._friends   = friends;
        this._messages  = messages;
    }

    get name()
    {
        return this._name;
    }
    set name (newName)
    {
        this._name = newName;
    }
    get age()
    {
        return this._age;
    }
    set age(newAge)
    {
        this._age = newAge;
    }

    addFriend(friend)
    {
        this._friends.push(friend);
    }

    sendMessage(message, friend)
    {
    
        this._messages.push(message);

        if (friend)
        {
            friend.sendMessage(message)
        }
    }

    showMessages()
    {
        return this._messages;
    }

  }
  
const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario1.showMessages());