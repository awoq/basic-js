const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const resVlalue = value === 'undefined' ? '' : value;
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number') {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }
    position--;
    if(!Number.isInteger(position) || 
      position < 0 || position >= this.getLength()) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
      }
    this.chain.splice(position, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const strChain = this.chain.join('~~');
    this.chain = [];
    return strChain;
  }
};

module.exports = {
  chainMaker
};
