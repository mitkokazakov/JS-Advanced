function solve(ticket, criteria) {

    class Ticket {

        constructor(destination, price, status) {

            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let allTickets = [];

    for (const line of ticket) {
    
        let ticketInfo = line.split('|');

        let destination = ticketInfo[0];
        let price = ticketInfo[1];
        let status = ticketInfo[2];

        let currentTicket = new Ticket(destination,price,status);

        allTickets.push(currentTicket);

    }

    if (criteria === 'destination') {
        allTickets.sort((a,b) => a.destination.localeCompare(b.destination));
    }
    else if(criteria === 'price'){
        allTickets.sort((a,b) => a.price - b.price);
    }
    else if(criteria === 'status'){
        allTickets.sort((a,b) => a.status.localeCompare(b.status));
    }

     return allTickets;
}

let ticket1 = ['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'];

let criteria1 = 'destination';


console.log(solve(ticket1,criteria1));
