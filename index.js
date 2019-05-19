// add solution here

function theBeatlesPlay(arrayPlayers, arrayInstruments) {
  const myArray = [];
  for (let i = 0; i < arrayPlayers.length; i++) {
    // console.log(arrayPlayers[i] + " plays " + arrayInstruments[i].toLowerCase());
    myArray.push(arrayPlayers[i] + " plays " + arrayInstruments[i]);
    // console.log(myArray);
  }
  
  return myArray;
}

// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// console.log(theBeatlesPlay(musicians, instruments));

function johnLennonFacts(arrayFacts) {
  // While Loop
  let counter = 0;
  const johnFacts = arrayFacts.slice();
  while(counter < arrayFacts.length){
    counter += 1;
    // console.log(johnFacts);
    // console.log(arrayFacts[counter] + " !!!");
    johnFacts.push();
  }
  return johnFacts; 
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

console.log(johnLennonFacts(facts));

