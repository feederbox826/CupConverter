const metricToImp = (metric) => Math.round(metric * 0.393701)

// do opposite fromCharCode lookup
const lookupUSCup = (bustDiffIn) => bustDiffIn < 1
  ? 'AA'
  : String.fromCharCode(Math.round(bustDiffIn) + 65 - 1)

function jpToUS(cupLetter, bustCm, waistCm, hipCm) {
  // 1 letter = +1cm increment
  // get ASCII code to increment letter, start at 1
  const cmIncrement = cupLetter.toUpperCase().charCodeAt() - 65 + 1
  const usCupSize = lookupUSCup(metricToImp(cmIncrement))
  return `${metricToImp(bustCm)}${usCupSize}-${metricToImp(waistCm)}-${metricToImp(hipCm)}`
}

module.exports = {
  jpToUS,
  metricToImp,
  lookupUSCup
}