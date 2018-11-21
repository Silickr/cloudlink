window.onload = function() {
  let search = location.search.substr(1)
  let keylist = ['token','code'];
  let [token, code] = keylist.map(key=>search.indexOf(`${key}=`) > -1)
    .map((exist,i)=> exist ? search
      .split('&')
      .filter(kv => kv.indexOf(keylist[i]+'=') > -1)[0]
      .split('=')[1] : '')

  hwh5
    .appInfo()
    .then(appInfo => {
      const textInfo = appInfo!==undefined ? `${JSON.stringify(appInfo)}` : 'undefined'
      displayResult(textInfo, token,code)
    })
    .catch(err => {
      const textInfo = `Error: ${err}`
      displayResult(textInfo, token,code)
    })
}

function displayResult(textInfo, token,code) {
  let result = `appInfo: ${textInfo}<br>
code: ${code}<br>
token: ${token}<br>
`
  display(result)
}

function display(textInfo) {
  let contentDiv = document.createElement('div')
  // let t = document.createTextNode(textInfo)
  // contentDiv.appendChild(t)
  contentDiv.innerHTML = textInfo
  document.body.appendChild(contentDiv)
}
