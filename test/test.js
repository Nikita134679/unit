import { viewHealth } from '../src/app.js';

// test('test health', () => {
//     const characted = {
//         name: 'Маг', 
//         health: 90
//     };
//     const result = viewHealth(characted.health);
//     expect(result).toBe("healthy");
// });

test.each([
    ['green', 60, 'healthy'],
    ['yellow', 40, 'wounded'],
    ['red', 10, 'critical'],
]) (
('test health'), (healthName, amount, expected) => {
    const result = viewHealth(amount);
    expect(result).toBe(expected);
});