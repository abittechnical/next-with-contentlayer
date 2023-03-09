const radixToTailwind = (radixColorObject) => {
  const captureScaleRegEx = new RegExp(/(\d{1,2})/)
  const color = {}
  for (const [token,value] of Object.entries(radixColorObject)) {
    const match = token.match(captureScaleRegEx)
    if(match) {
      Object.assign(color,{[match[1]]: value})
    }
  }
  return color
}
module.exports = {
  radixToTailwind
}
