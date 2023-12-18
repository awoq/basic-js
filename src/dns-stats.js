const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsObj = {};
  const domainsArr = domains.map(item => item.split('.').reverse());
  for(let arr of domainsArr){
    let domain = '';
    for(let elem of arr){
      domain += '.' + elem;
      if(domain in domainsObj) domainsObj[domain]++;
      else domainsObj[domain] = 1;
    }
  }
  return domainsObj;
}

module.exports = {
  getDNSStats
};
