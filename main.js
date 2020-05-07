const jumpStopRecords = [];

const chattenRecords = [];

const polarRecords = [];

const createFunkArtist = (name, genre, age) => {
  jumpStopRecords.push({
    name: name,
    genre: genre,
    age: age,
  });
};

const createRapArtist = (name, genre, age) => {
  jumpStopRecords.push({
    name: name,
    genre: genre,
    age: age,
  });
};

const createCountryArtist = (name, genre, age) => {
  chattenRecords.push({
    name: name,
    genre: genre,
    age: age,
  });
};

const createBluegrassArtist = (name, genre, age) => {
  chattenRecords.push({
    name: name,
    genre: genre,
    age: age,
  });
};

const createPopArtist = (name, genre, age) => {
  polarRecords.push({
    name: name,
    genre: genre,
    age: age,
  });
};

createFunkArtist("Dre Funkz", "funk", 25);
createRapArtist("Dusta Grimes", "rap", 21);
createCountryArtist("Bruce Atikins", "country", 23);
createPopArtist("Jensen Brown", "pop", 20);
createBluegrassArtist("Bartholomew Danielson", "bluegrass", 23);
createCountryArtist("Avilee Dallas", "country", 19);
createPopArtist("Austin Kinkaid", "pop", 22);
createRapArtist("Leyoncé Branis", "rap", 27);

console.log("Jump Stop Records:", jumpStopRecords);
console.log("Chatten Records:", chattenRecords);
console.log("Polar Records:", polarRecords);
