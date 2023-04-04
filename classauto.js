class Car {
    constructor(brand, model, year, mileage)
    {
        this._brand      = brand;
        this._model      = model;
        this._year       = year;
        this._mileage    = mileage;
        let state        =  false;
    }

    get mileage()
    {
        return this._mileage;
    }
    set mileage(newMileage)
    {
        this._mileage = newMileage;
    }


    get brand()
    {
        return this._brand;
    }

    set brand(newBrand)
    {
        this._brand = newBrand;
    }

    get model()
    {
        return this._model;
    }
    set model(newModel)
    {
        this._model = newModel;
    }

    get year()
    {
        return this._year;
    }

    set year(newYear)
    {
        this._year = newYear;
    }
    
    turnOn()
    {
       this.state = true; 
    }

    turnOff()
    {
        this.state = false; 
    }

    drive(kilometers)
    {
        if (this.state)
        {
            this.mileage += kilometers;
        }
        else
        {
            throw new Error('El auto está apagado');
        }
    }

   

  }


  const toyota = new Car("Toyota", "Corolla", 2020, 0);
  toyota.turnOn();
  toyota.drive(100);
  console.log(toyota.mileage)

