// add solution here

function theBeatlesPlay(arrayPlayers, arrayInstruments) {
  const myArray = [];
  for (let i = 0; i < arrayPlayers.length; i++) {
    // console.log(arrayPlayers[i] + " plays " + arrayInstruments[i].toLowerCase());
    myArray.push(arrayPlayers[i] + " plays " + arrayInstruments[i].toLowerCase());
    // console.log(myArray);
  }
  return myArray;

}

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

console.log(theBeatlesPlay(musicians, instruments));

