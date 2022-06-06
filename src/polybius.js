// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // create translation variables for letters to numbers and back
  const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i/j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };

  function polybius(input, encode = true) {
    let result = "";
    if (encode) {
      result = polybiusEncode(input);
    } else {
      result = polybiusDecode(input);
    }

    return result;
  }

  function polybiusEncode(input) {
    // convert to lowercase and split into an array of characters
    let message = input.toLowerCase().split("");
    let numericValue = message.reduce((numericValue, letter) => {
      let number;
      // keep spaces present
      if (letter === " ") {
        number = " "
        // handle if the letter is i or j since they share a number
      } else if (letter === "i" || letter === "j") {
        number = encoder["i/j"]
      } else {
        number = encoder[letter];
      }
      // concatenate numeric value with result string
      return numericValue + number;
    },"");

    return numericValue;
  }

  function polybiusDecode(input) {
    // return false if odd number of characters when spaces removed
    let withoutSpaces = input.replace(" ", "");
    if (withoutSpaces.length % 2 !== 0) return false;

    let decodeArray = [];
    for (let i = 0; i < input.length; i++) {
      // keep spaces present
      if (input[i] === " ") {
        decodeArray.push(" ");
      } else {
        // split into an array at each two characters
        let twoDigitNumber = input.substring(i, i + 2);
        decodeArray.push(twoDigitNumber);
        i++;
      }
      
    }

    let message = decodeArray.reduce((message, number) => {
      let letter;
      // keep spaces
      if (number === " ") {
        letter = " ";
        // return (i/j) if 42
      } else if (number === "42") {
        letter = "(i/j)"
        // use decoder translation variable to return correct letter associated with number
      } else {
        letter = decoder[number];
      }
      // concatenate returned letter onto result string
      return message + letter;
    }, "")

    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
