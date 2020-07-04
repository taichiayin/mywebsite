// 是否是手機的IOS
export function isMobileIOS() {
  var isiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
  return isiOS
}

// 判断手机还是PC
export function IsPC() {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
// 轉小數點數三位數
export function formatPrice(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function isMobile() {
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|ios|Android|webOS|BlackBerry)/i)) {
    return true
  }
  return false
}
