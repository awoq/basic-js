const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++, j++){
      if (message[i] >= 'A' && message[i] <= 'Z'){
      let index = (i >= message.length) ? i % message.length : i; 
      const mi = alphabet.indexOf(message[index]);
      index = (j >= key.length) ? j % key.length : j;
		  const ki = alphabet.indexOf(key[index]);
      index = (alphabet.length + mi + ki) % alphabet.length;
      const c = alphabet[index];
      result += c;
    }
    else {
      result += message[i];
      j--;
      }
    }
    if(!this.isDirect) return result.split('').reverse().join('');
    return result;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++, j++){
      if (message[i] >= 'A' && message[i] <= 'Z'){
      let index = (i >= message.length) ? i % message.length : i; 
      const mi = alphabet.indexOf(message[index]);
      index = (j >= key.length) ? j % key.length : j;
		  const ki = alphabet.indexOf(key[index]);
      index = (alphabet.length + mi - ki) % alphabet.length;
      const c = alphabet[index];
      result += c;
    }
      else {
        result += message[i];
        j--;
      }
    }
    if(!this.isDirect) return result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
