const servo = {
    nome: 'Jeann Dark Alter',
    class: 'Avenger',
    heatPoints: 12123,
    attackPoints: 16123,
    type: 'SR',
    skills: [
        {
            name: 'Crit Queen',
            effects: [
                'Crit absorb', 'Crit Damage'
            ]
        },
        {
            name: 'Charisma',
            effects: [
                'Party Attack Up', 'Party Dragons Attack Up'
            ]
        },
        {
            name: 'Mana Burst',
            effects: [
                'Buster UP', 'Invencible', 'Reduce HP'
            ]
        }
    ],
    noblePhathasm: {
        name: 'La Groundment Del Rein',
        effects: [
            'Single Target Damage', 'Nullify buff', 'Critical Stars Gain'
        ]
    }
};

servo.attackPoints = 18123;

servo.trait = 'human';

servo.skills[2].effects.push('NP Gain');

console.log(servo);

console.log(servo.skills[2].effects);
