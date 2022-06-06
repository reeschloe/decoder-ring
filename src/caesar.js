// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false if shift is undefined, 0, greater than 25, or less than -25
    if (shift > 25 || shift < -25 || !shift) return false;

    // convert all to lowercase then split string into an array of each character
    let message = input.toLowerCase().split("");

    // convert each character to the encoded version
    let encodedMessage = message.map(letter => {
      const unicode = letter.charCodeAt();
      // unicode for a is 97 and z is 122. if outside that range, return the symbol without shifting
      if (unicode < 97 || unicode > 122) return String.fromCharCode(unicode);
      else {
        let encodedUnicode = 0;
        // add shift if encoding, subtract if decoding
        if (encode) {
          encodedUnicode = unicode + shift;
        } else {
          encodedUnicode = unicode - shift;
        }
        // handle cases where shift puts unicode outside of range, wrap back around alphabet
        if (encodedUnicode < 97) {
          encodedUnicode += 26;
        } else if (encodedUnicode > 122) {
          encodedUnicode -= 26;
        }

        // retranslate unicode into letters
        return String.fromCharCode(encodedUnicode);
      }
    }, [])

    // rejoin array into a string
    return encodedMessage.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
