function solve(array) {
    let currentSpeed = array[0];
    let area = array[1];

    let currentSpeeding = 0;

    if (area == "motorway") {

        currentSpeeding = currentSpeed - 130;

        if (currentSpeeding >= 1 && currentSpeeding <= 20) {
            console.log("speeding");
        }
        else if (currentSpeeding > 20 && currentSpeeding <= 40) {
            console.log("excessive speeding");

        }
        else if(currentSpeeding > 40){
            console.log("reckless driving");
        }
    }
    else if (area == "interstate") {

        currentSpeeding = currentSpeed - 90;

        if (currentSpeeding >= 1 && currentSpeeding <= 20) {
            console.log("speeding");
        }
        else if (currentSpeeding > 20 && currentSpeeding <= 40) {
            console.log("excessive speeding");

        }
        else if(currentSpeeding > 40){
            console.log("reckless driving");
        }
    }
    else if (area == "city") {

        currentSpeeding = currentSpeed - 50;

        if (currentSpeeding >= 1 && currentSpeeding <= 20) {
            console.log("speeding");
        }
        else if (currentSpeeding > 20 && currentSpeeding <= 40) {
            console.log("excessive speeding");

        }
        else if(currentSpeeding > 40){
            console.log("reckless driving");
        }
    }
    else if (area == "residential") {

        currentSpeeding = currentSpeed - 20;

        if (currentSpeeding >= 1 && currentSpeeding <= 20) {
            console.log("speeding");
        }
        else if (currentSpeeding > 20 && currentSpeeding <= 40) {
            console.log("excessive speeding");

        }
        else if(currentSpeeding > 40){
            console.log("reckless driving");
        }
    } 
}

solve([40, 'city']);