function solve(array) {

    let object = {};
     
    for (let i = 0; i < array.length; i += 2) {
        
        let fruitName = array[i];
        let calories = Number(array[i+1]);

        object[fruitName] = calories;
        
    }

    console.log(object);

}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);