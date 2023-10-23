// ES8: Object.values returns an array with the values of the object
const countries = { MX: 'Mexico', CO: 'Colombia', AR: 'Argentina', PE: 'Peru', VE: 'Venezuela' };

const countriesValues = Object.values(countries);
console.log(countriesValues); // ['Mexico', 'Colombia', 'Argentina', 'Peru', 'Venezuela']