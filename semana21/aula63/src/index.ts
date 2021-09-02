export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
}

export const validateCharacter = (character: Character):boolean =>{
    const { name, life, strength, defense} = character;

    if ( !name || life === undefined || strength === undefined || defense === undefined ){
        return false;
    };

    if (life <= 0 || strength <= 0 || defense <= 0){
        return false;
    };

    return true;
};

// export const performAttack = (
//     attacker: Character,
//     defender: Character
// ) => {
//     if(!validateCharacter(attacker) || !validateCharacter(defender)){
//         throw new Error("Invalid Character");
//     };

//     if(attacker.strength > defender.defense){
//         defender.life = defender.life - attacker.strength + defender.defense;
//     };
// };

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character");
    };

    if(attacker.strength > defender.defense){
        return defender.life = defender.life - attacker.strength + defender.defense;
    };

    return defender.life;
};