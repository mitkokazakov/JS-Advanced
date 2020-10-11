function solve(data) {

    const catalog = {};

    for (const line of data) {

        let [system, component, sub] = line.split(' | ');

        if (!catalog.hasOwnProperty(system)) {
            catalog[system] = {};
        }

        if (!catalog[system].hasOwnProperty(component)) {
            catalog[system][component] = [];
        }

        catalog[system][component].push(sub);

    }

    Object.entries(catalog).sort((a,b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system,component]) => {
        console.log(system);
        Object.entries(component).sort((a,b) => {
            return b[1].length - a[1].length;
        }).forEach(([name,sub]) => {
            console.log('|||' + name);
            sub.forEach(s => console.log('||||||' + s));
        })
    });
}


let test1 = ['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'];



console.log(solve(test1));