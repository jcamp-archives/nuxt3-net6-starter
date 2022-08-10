export function setFocus(id: string | object) {
  setTimeout(() => {
    if (typeof id === 'string') {
      const x = document.getElementsByName(id)[0]
      if (x) x.focus()
    } else if (typeof id === 'object') {
      const x = document.getElementById(Object.keys(id)[0])
      if (x) x.focus()
    }
  }, 100)
}
