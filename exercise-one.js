let surf = ['bodyboard', 'shortboard', 'longboard', 'wax', 'sunblock'];

surf.push('wetsuit');

console.log(surf);

surf.splice(2, 1);

console.log(surf);

const surfList = surf.join(', ');

console.log(surfList);