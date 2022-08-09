export function setFocus(id: string | object) {
  if (typeof id === 'string') {
    const x = document.getElementsByName(id)[0]
    if (x) {
      console.log(focus)
      setTimeout(() => x.focus(), 300)
    }
  } else if (typeof id === 'object') {
    const x = document.getElementById(Object.keys(id)[0])
    if (x) setTimeout(() => x.focus(), 200)
  }
}
