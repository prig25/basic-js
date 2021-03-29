const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) throw Error();
    let encryptResult = [];
    let encryptResultIndex = 0;
    let k = 0;
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let deltaLength = message.length - key.length;
    for(let i=0; i<deltaLength; i++) {
      key = key + key[i]; 
    }
    for(let i=0; i<message.length; i++) {
      let messageLet = alphabet.indexOf(message[i]);
      let keyLet = alphabet.indexOf(key[i-k]);
      if(message[i] === ' ' || messageLet === -1) {
        encryptResult.push(message[i]);
        k++;
        continue;
      }
      encryptResultIndex = (messageLet + keyLet)%26; 
      encryptResult.push(alphabet[encryptResultIndex]);
    }
    if (this.direct) {
      return encryptResult.join('');
    }
    return encryptResult.reverse().join(''); 
  }    

  decrypt(messageEncrypt, key) {
    if(messageEncrypt === undefined || key === undefined) {
      throw Error();
    }
    let encryptResult = [];
    let encryptResultIndex = 0;
    let k = 0;
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    messageEncrypt = messageEncrypt.toUpperCase();
    key = key.toUpperCase();
    let deltaLength = messageEncrypt.length - key.length;
    for(let i=0; i<deltaLength; i++) {
      key = key + key[i]; 
    }
    for(let i=0; i<messageEncrypt.length; i++) {
      let messageLet = alphabet.indexOf(messageEncrypt[i]);
      let keyLet = alphabet.indexOf(key[i-k]);
      if(messageEncrypt[i] === ' ' || messageLet === -1) {
        encryptResult.push(messageEncrypt[i]);
        k++;
        continue;
      }
      encryptResultIndex = (messageLet - keyLet + 26)%26; 
      encryptResult.push(alphabet[encryptResultIndex]);
    }
    if (this.direct) {
      return encryptResult.join('');
    }
    return encryptResult.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;



//const directMachine = new VigenereCipheringMachine();
//const reverseMachine = new VigenereCipheringMachine(false);

//directMachine.encrypt('attack at dawn!', 'alphonse');
//'AEIHQX SX DLLU!'
//directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
//'ATTACK AT DAWN!'
//reverseMachine.encrypt('attack at dawn!', 'alphonse');
//'!ULLD XS XQHIEA'
//reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
//'!NWAD TA KCATTA'