function solve(data) {



    let heroRespository = [];

    for (let i = 0; i < data.length; i++) {

        let currentInput = data[i].split(' / ');
        let heroName = currentInput[0];
        let heroLevel = Number(currentInput[1]);
        let heroItems = currentInput[2] ? currentInput[2].split(', ') : [];

        let hero = {
            name: '',
            level: 0,
            items: []
        }

        hero.name = heroName;
        hero.level = heroLevel;
        hero.items = heroItems;

        heroRespository.push(hero);

    }



    return JSON.stringify(heroRespository);
}

let test1 = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

console.log(solve(test1));;