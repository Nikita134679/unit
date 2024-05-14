const characted = {
    name: 'Маг', 
    health: 90,
};

const green = "healthy";
const yellow = "wounded";
const red = "critical";
  
export function viewHealth(obj) {
    if (obj.health > 50) {
        return green
    };
    if (obj.health <= 50 && obj.health >= 15) {
        return yellow
    };
    if (obj.health < 15) {
        return red
    };
};