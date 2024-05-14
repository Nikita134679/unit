import { viewHealth } from '../src/app.js';
import { sortHealth } from '../src/sort.js';

test.each([
    ['green', { health: 60 }, 'healthy'],
    ['yellow', { health: 40 }, 'wounded'],
    ['red', { health: 10 }, 'critical'],
]) (
('test health: %s'), (healthName, amount, expected) => {
    const result = viewHealth(amount);
    expect(result).toBe(expected);
});

const sortCharacted = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];;
const sortArray = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];
expect(sortCharacted).toEqual(sortArray);

test('test sort health', () => {
    const sortCharacted = sortHealth([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);
    const sortArray = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(sortCharacted).toEqual(sortArray);
  });