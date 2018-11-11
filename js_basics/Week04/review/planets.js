const planets = [
  {
    name: 'mercury',
    yearLength: 0.24,
    gravity: 0.38,
    moons: 0,
    size: 2440,
  },
  {
    name: 'venus',
    yearLength: 0.62,
    gravity: 0.91,
    moons: 0,
    size: 6052,
  },
  {
    name: 'earth',
    yearLength: 1,
    gravity: 1,
    moons: 1,
    size: 6371,
  },
  {
    name: 'mars',
    yearLength: 1.88,
    gravity: 0.38,
    moons: 2,
    size: 3390,
  },
  {
    name: 'jupiter',
    yearLength: 11.86,
    gravity: 2.4,
    moons: 79,
    size: 69911,
  },
  {
    name: 'saturn',
    yearLength: 29.46,
    gravity: 1.07,
    moons: 62,
    size: 58232,
  },
  {
    name: 'uranus',
    yearLength: 84.02,
    gravity: 0.89,
    moons: 27,
    size: 25362,
  },
  {
    name: 'neptune',
    yearLength: 164.8,
    gravity: 1.14,
    moons: 14,
    size: 24642,
  },
  {
    name: 'pluto',
    yearLength: 248,
    gravity: 0.06,
    moons: 5,
    size: 1188,
  }
];

const sendProbe = (planet) => {
    console.log(`Hi ${planet.name}`)
};

sendProbe();

// planets.forEach((planet) => {
//     if (planet.name !== 'earth') {
//         sendProbe()
//     }
// })
