// http://feederbox.cc/gh/CupConverter (MIT)

const cmToIn = cm => Math.round(cm * 0.393701)

// do opposite fromCharCode lookup
const USCup = (cupDiff) => cupDiff < 1
  ? 'AA'
  : String.fromCharCode(Math.round(cupDiff) + 65 - 1)

function JPtoUS(cupLetter, bustCm, waistCm, hipCm) {
  // get ASCII code to increment letter, start at 1
  // 1 letter = +1cm increment
  const cmIncrement = cupLetter.toUpperCase().charCodeAt() - 65 + 1
  const usCupSize = USCup(cmToIn(cmIncrement))
  return `${cmToIn(bustCm)}${usCupSize}-${cmToIn(waistCm)}-${cmToIn(hipCm)}`
}

module.exports = {
  JPtoUS,
  cmToIn,
  USCup
}