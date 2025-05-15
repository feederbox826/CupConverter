// http://feederbox.cc/gh/CupConverter (MIT)

const cmToIn = cm => Math.round(cm * 0.393701)

// do opposite fromCharCode lookup
const USCup = (cupDiff) => cupDiff < 1
  ? 'AA'
  : String.fromCharCode(Math.round(cupDiff) + 65 - 1)

const bandSize = (overBustCm, bustSizeCm) => {
  // round to nearest whole number, even add 4 odd add 5
  let band = cmToIn(Math.round(overBustCm - bustSizeCm))
  return band += band % 2 === 0 ? 4 : 5
}

function JPtoUS(cupLetter, bustCm, waistCm, hipCm) {
  // get ASCII code to increment letter, start at 1
  // 1 letter = +1cm increment
  const cupCm = cupLetter.toUpperCase().charCodeAt() - 65 + 1
  const bandIn = bandSize(bustCm, cupCm)
  const usCupSize = USCup(cmToIn(cupCm))
  return `${bandIn}${usCupSize}-${cmToIn(waistCm)}-${cmToIn(hipCm)}`
}

module.exports = {
  JPtoUS,
  bandSize,
  cmToIn,
  USCup
}