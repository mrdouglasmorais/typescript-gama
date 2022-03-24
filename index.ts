import getPersonType from "./src/function";
import AllPersons from "./src/object";

console.log(AllPersons);
console.log('Retorna genero feminino', getPersonType(AllPersons, 'Female'));
console.log('Retorna genero masculino', getPersonType(AllPersons, 'Male'));