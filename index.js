

class Battleship {
    constructor() {
        this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
        this.ships = [];
    }

    addShip(x, y, length, direction) {
        const ship = { x, y, length, direction };
        if (this.checkShip(ship)) {
            this.ships.push(ship);
            this.placeShip(ship);
        }
    }

    checkShip(ship) {
        const { x, y, length, direction } = ship;
        if (direction === 'horizontal') {
            if (x + length > 10) {
                return false;
            }
            for (let i = x; i < x + length; i++) {
                if (this.board[i][y] !== null) {
                    return false;
                }
            }
        } else {
            if (y + length > 10) {
                return false;
            }
            for (let i = y; i < y + length; i++) {
                if (this.board[x][i] !== null) {
                    return false;
                }
            }
        }
        return true;
    }

    placeShip(ship) {
        const { x, y, length, direction } = ship;
        if (direction === 'horizontal') {
            for (let i = x; i < x + length; i++) {
                this.board[i][y] = 'ship';
            }
        } else {
            for (let i = y; i < y + length; i++) {
                this.board[x][i] = 'ship';
            }
        }
    }

    attack(x, y) {
        if (this.board[x][y] === 'ship') {
            this.board[x][y] = 'hit';
            return 'hit';
        } else {
            this.board[x][y] = 'miss';
            return 'miss';
        }
    }
}

module.exports = Battleship;