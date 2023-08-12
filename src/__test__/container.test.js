import Character, { Team } from "../container";


describe('Character Class test', () => {
    it('should create provided hero', () => {
        const heroName = 'Zombie';
        const character = new Character(heroName);
        expect(character.hero).toBe(heroName);
    });
});


describe('Team Class', () => {
    let teamInstance;
    beforeEach(() => {
        teamInstance = new Team();
    });
    it('should add a hero to the team;', () => {
        const heroName = 'Zombie';
        teamInstance.add(heroName);
        expect(teamInstance.members.has(heroName)).toBe(true);
    });
    it('should not allow duplicates', () => { 
        const heroName = 'Swordsman';
        teamInstance.add(heroName);
        expect(() => {
            teamInstance.add(heroName);
        }).toThrow('duplicate');
    });
});


test('should add all heroes to the team', () => {
    const heroNames = ['Hero1', 'Hero2', 'Hero3'];
    const instance = new Team();
    
    instance.addAll(...heroNames);

    for (const hero of heroNames) {
        expect(instance.members.has(hero)).toBe(true);
    }
});


test('should convert to array', () => {
    const heroNames = ['Hero1', 'Hero2', 'Hero3'];
    const instance = new Team();
    instance.addAll(...heroNames);
    const array = instance.toArray();
    expect(array).toEqual(expect.arrayContaining(heroNames));
});
