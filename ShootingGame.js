class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    hit(opponent) {
        opponent.health -= this.power;
    }

    useItem(item) {
        if (item === "Upgrade Health") {
            this.health += 10;
        } else {
            this.power += 10;
        }
    }

    showStatus() {
        return `${this.name} (Health: ${this.health}, Power: ${this.power})`;
    }
}

class ShootingGame {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    getRandomItem() {
        const items = ["Upgrade Health", "Upgrade Power"];
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    start() {
        let result = "";
        let turn = 1;
        while (true) {
            result += `TURN ${turn}\n`;
            result += "-----------------\n";
            result += `At the start of the turn:\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}\n`;

            const itemA = this.getRandomItem();
            const itemB = this.getRandomItem();

            this.playerA.useItem(itemA);
            this.playerB.useItem(itemB);

            result += `${this.playerA.name} used ${itemA}\n`;
            result += `${this.playerB.name} used ${itemB}\n`;

            result += `After using items:\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}\n`;

            this.playerA.hit(this.playerB);
            this.playerB.hit(this.playerA);

            result += `${this.playerA.name} is shooting ${this.playerB.name}\n`;

            result += `At the end of the turn:\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}\n`;

            if (this.playerA.health <= 0 && this.playerB.health <= 0) {
                result += "Game Over. It's a draw; both players have died.\n";
                break;
            } else if (this.playerA.health <= 0) {
                result += `Game Over. ${this.playerB.name} wins the game!\n`;
                break;
            } else if (this.playerB.health <= 0) {
                result += `Game Over. ${this.playerA.name} wins the game!\n`;
                break;
            }

            result += "\n";
            turn++;
        }
        return result;
    }
}

const playerA = new Player("Player A");
const playerB = new Player("Player B");
const shootingGame = new ShootingGame(playerA, playerB);
const gameResult = shootingGame.start();
console.log(gameResult);
