const Battleship = require('./index');

describe('Battleship', () => {
    let battleship;

    beforeEach(() => {
        battleship = new Battleship();
    });

    test('should add a ship to the board', () => {
        battleship.addShip(0, 0, 5, 'horizontal');
        expect(battleship.board[0][0]).toBe('ship');
        expect(battleship.board[1][0]).toBe('ship');
        expect(battleship.board[2][0]).toBe('ship');
        expect(battleship.board[3][0]).toBe('ship');
        expect(battleship.board[4][0]).toBe('ship');
    });

    test('should not add a ship if it overlaps with another ship', () => {
        battleship.addShip(0, 0, 5, 'horizontal');
        battleship.addShip(3, 0, 3, 'vertical');
        expect(battleship.board[0][0]).toBe('ship');
        expect(battleship.board[1][0]).toBe('ship');
        expect(battleship.board[2][0]).toBe('ship');
        expect(battleship.board[3][0]).toBe(null);
        expect(battleship.board[3][1]).toBe(null);
        expect(battleship.board[3][2]).toBe(null);
    });

    test('should return "hit" if the attack hits a ship', () => {
        battleship.addShip(0, 0, 5, 'horizontal');
        expect(battleship.attack(0, 0)).toBe('hit');
    });

    test('should return "miss" if the attack misses a ship', () => {
        battleship.addShip(0, 0, 5, 'horizontal');
        expect(battleship.attack(5, 5)).toBe('miss');
    });
});// Test case 1: Adding a ship horizontally
