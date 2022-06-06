// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // create alphabet variable to map to
  const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // return false if alphabet not given or not exactly 26 characters
    if (!alphabet || alphabet.length !== 26) return false;

    // return false if there are repeat characters in given alphabet
    if (!stringIsUnique(alphabet)) return false;

    // convert all letters of inputted message and alphabet to lowercase and split into an array of characters
    let message = input.toLowerCase().split("");
    let alphabetArray = alphabet.toLowerCase().split("")

    let index = 0;
    let alphabetMap = {}

    // create translation array to pair together each character with the correct letter in standard alphabet
    for (let i = 0; i < 26; i++) {
      alphabetMap[trueAlphabet[i]] = alphabet[i]
    }

    if (encode) {
      let encodedMessage = message.reduce((encodedMessage, character) => {
        let encodedCharacter;
        // keep spaces in place
        if (character === " ") {
          encodedCharacter = " ";
        // translate each character in inputted message to the mapped alphabet character
        } else {
          encodedCharacter = alphabetMap[character];
        }
        // concatenate encoded character onto result string
        return encodedMessage + encodedCharacter;
      }, "")
      return encodedMessage;
    } else {
      let decodedMessage = message.reduce((decodedMessage, character) => {
        // keep spaces in place
        if (character === " ") {
          decodedCharacter = " ";
        // return key at index where the value === given character
        } else {
          decodedCharacter = Object.keys(alphabetMap).find(key => alphabetMap[key] === character);
        }
        // concatenate decoded character onto result string
        return decodedMessage + decodedCharacter;
      }, "")
      return decodedMessage
    }
  }

  // function to check if all characters in given alphabet are unique
  function stringIsUnique(input) {
    for (i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
        return false;
      }
    }
    return true;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
