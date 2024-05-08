const characted = {
    name: 'Маг', 
    health: 90
};

const green = "healthy";
const yellow = "wounded";
const red = "critical";
  
function viewHealth(obj) {
    if (characted.health > 50) {
        return green
    };
    if (characted.health < 50 && characted.health > 15) {
        return yellow
    };
    if (characted.health < 15) {
        return red
    };
};