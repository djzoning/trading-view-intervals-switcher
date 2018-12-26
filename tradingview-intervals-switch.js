let intervals = $('#header-toolbar-intervals>div')

let checkKey = (e) => {
  e = e || window.event
  if(e.keyCode == '37') {
    intervals.siblings('.isActive-22S-lGpa-').prev().click()
  } else if (e.keyCode == '39') {
    intervals.siblings('.isActive-22S-lGpa-').next().click()
  }
}

document.onkeydown = checkKey
