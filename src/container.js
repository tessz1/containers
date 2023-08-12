export default class Character {
    constructor(hero) { 
        this.hero = hero;
    }
}


export class Team {
    constructor() {
        this.members = new Set();
    }

    add(hero) {
        if (this.members.has(hero)) {
            throw new Error("duplicate");
        }
        this.members.add(hero);
    }
    addAll(...heroes) {
        for (const hero of heroes){
            this.members.add(hero)
        }
    }

    toArray(){
        return Array.from(this.members);
    }
}


