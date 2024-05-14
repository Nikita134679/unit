export function sortHealth(array) {
    return array.sort((a, b) => b.health - a.health);
};