const ticketValue = 9000;

const soldTickets = (money, movie) => {
    const availableMovies = ['Batman','Superman','Avengers','Spiderman','Black widow', 'Enter the void'];
    if (availableMovies.includes(movie) && money >= ticketValue)
        return true;
    else return false;
}
var seatsUnavailable = [2,4,6,7,8,10,11,12,15,18,20,25,30]
const seatSelected = (number) => {
    if(number > 30 || number < 1)
        return false;
    if (seatsUnavailable.includes(number))
        return false;
    else return true;
}

module.exports = soldTickets, seatSelected;