'use strict';

class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
        this.wins = 0;
        this.loses = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getHealth() {
        return this.hp;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    attack(defender) {
        let attackSuccess = 1 - (defender.getStrength() + defender.getAgility()) / 100;
        if (Math.random() < attackSuccess) {
            defender.dealDamage(this.damage);
            console.log(this.name + ' makes ' + this.damage + ' damage to ' + defender.getName());
        } else {
            console.log(defender.getName() + ' attack missed');
        }
    }

    dealDamage(damagePoints) {
        if (this.hp < damagePoints) {
            this.hp = 0;
        } else {
            this.hp -= damagePoints;
        }
    }

    logCombatHistory() {
        console.log('Name: ' + this.name + ', Wins: ' + this.wins + ', Losses: ' + this.loses);
    }

    heal(healpoints) {
        this.hp += healpoints;
    }

    addWin() {
        this.wins += 1;
    }

    addLoss() {
        this.loses += 1;
    }
}


function battle(fighter1, fighter2) {
    function checkIfDead(fighter) {
        if (fighter.getHealth() === 0) {
            console.log(fighter.getName() + ' is dead and can\'t fight');
            return true;
        }
    }

    if (checkIfDead(fighter1)) {
        return;
    }
    if (checkIfDead(fighter2)) {
        return;
    }

    function kick(f1, f2) {
        f1.attack(f2);
        if (checkIfDead(f2)) {
            f1.addWin();
            f2.addLoss();
            console.log(f1.getName() + ' has won!');
            return true;
        }
        return false;
    }

    for (;;) {
        if (kick(fighter1, fighter2)) {
            break;
        } else if (kick(fighter2, fighter1)) {
            break;
        }
    }


}

const fighter1 = new Fighter('Maximus', 20, 100, 20, 15);
const fighter2 = new Fighter('Commodus', 20, 90, 25, 20);

battle(fighter1, fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
battle(fighter1, fighter2);