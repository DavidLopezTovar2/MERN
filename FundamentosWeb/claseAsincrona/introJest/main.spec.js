
const soldTickets = require('./main');
const seatSelected = require('./main');

describe('Test venta de tickets', () => {
    test('Dado una cantidad de dinero correcta y un nombre de pelicula, debe retornar un ticket', () => {
      expect(soldTickets(10000,'Batman')).toBeTruthy();
    });
    test('Dado una cantidad de dinero correcta, con pelicula invalida no debe retornar el ticket', () => {
        expect(soldTickets(10000,'Dr strange')).toBe(false);
    });
    test('Dado una cantidad de dinero inferior y un nombre de pelicula, debe rechazar la compra de un ticket', () => {
        expect(soldTickets(1000,'Batman')).toBe(false);
    });
    test('Dado una cantidad de dinero inferior, pero seleccionado una pelicula inexistente debe retornar false', () => {
        expect(soldTickets(10,'Linterna verde')).toBe(false);
    });
});

describe('Test venta de asientos', () => {
    test('Silla seleccionada ya ocupada', () => {
        const value = seatSelected(13);
        expect(value).toBe(false);
        //expect(value).toBeTruthy();
    });
    test('Silla seleccionada libre', () => {
        const value = seatSelected(25);
        expect(value).toBe(false)
    });
    test('Silla seleccionada invalida', () => {
        const value = seatSelected(33);
        expect(value).toBe(false)
    });
});
