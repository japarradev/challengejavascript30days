function hotelSystem(rooms) 
{
    const reservations = [];

    return{
        searchReservation:(id)=>
        {
            const reservation = reservations.find(element => element.id === id);
            
            if(reservation)
            {
                return reservation;
            }
            else
            {
                throw new Error('La reservación no fue encontrada');
            }

        },
        getSortReservations: ()=>{

            const sortedReservations = reservations.sort((a,b) => {
                if(a.checkIn > b.checkIn)
                {
                    return 1
                }
                if(a.checkIn < b.checkIn)
                {
                    return -1 
                }
                if(b.checkIn === a.checkIn)
                {   
                    return 0
                }

            })
            return sortedReservations;

        },
        addReservation: (reservation) =>{
            
            const noAvailableroom = reservations.some(element => element.roomNumber === reservation.roomNumber && (element.checkIn <= reservation.checkIn || element.checkOut >= reservation.checkOut))

            if(!noAvailableroom)
            {
                reservations.push(reservation)
                return 'La habitación ha sido reservada'
            }
            else
            {
                throw new Error('La habitación no está disponible');
            }

        },
        removeReservation: (id) =>{
            const idReservation = reservations.findIndex(element => element.id === id);
            const reservation = reservations.at(idReservation)
            if(idReservation !==-1)
            {
                reservations.splice(idReservation, 1);
                return  reservation;
            }
            else
            {
                throw new Error('"La reservación que se busca remover no existe"');
            }
        },

        getReservations: () =>{
            return reservations;
        },

        getAvailableRooms: (checkIn, checkOut) =>{
            const availableRooms = [];
            for (let index = 1; index <= rooms; index++) 
            {            
                const noAvailableroom = reservations.some(element => element.roomNumber === index && (element.checkIn <= checkIn || element.checkOut >= checkOut))

                if (!noAvailableroom)
                {
                    availableRooms.push(index)
                }

            }

            return availableRooms;
        }

    }
}

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "02/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

hotel.removeReservation(1);

console.log(hotel.getReservations());
