/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;

let highScore = 29

// Testing my variable
console.log( 'The high score is', highScore);

// 2. Make a new empty array called myScrabbleTiles.

myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

// Making a function to add objects into the array
function addTomyScrabbleTiles( tileletter, tilescore) {
  if (myScrabbleTiles > 0) {
    return undefined
  }
  else {  
    myScrabbleTiles.push({
         tile : tileletter,
         score : tilescore}
         );
    return myScrabbleTiles
  }  
}

addTomyScrabbleTiles( 'N', 1);
addTomyScrabbleTiles( 'K', 5);
addTomyScrabbleTiles( 'Z', 10);
addTomyScrabbleTiles( 'X', 8);
addTomyScrabbleTiles( 'D', 2);
addTomyScrabbleTiles( 'A', 1);


// Testing my function to see if I had succefully added my tiles
console.log( 'My scrabble tiles and their scores', myScrabbleTiles);


// 4. Remove the last tile from myScrabbleTiles.
let removedtile = myScrabbleTiles.pop();
console.log( 'The removed tile and score is', removedtile);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/

console.log( 'Adding a new F tile and putting 4 as its score', addTomyScrabbleTiles( 'F', 1 ) );


// 6. Complete this function. It needs to be given an array of tile objects. 
// The function will use a for-loop and return the sum of all the scores in the given 
//array.
function sumTiles(anArray) {
  for (let numbers  of myScrabbleTiles) {
    
  }
}
// This is where I am stuck at, Im not sure how to get just the values in the object
// or how to just call out the tiles and not get both I did the same on my week 5.3
// assignment as well.


// 7. Use the function above to get the total score for myScrabbleTiles
// and assign the value to a variable called "myScore".


// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.


// DONE!