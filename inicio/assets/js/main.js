const tiggerAcordeon = document.querySelectorAll('.acordeon .tigger')
tiggerAcordeon.forEach((tigger) => {
  tigger.addEventListener('click', (e) => {
    const acordeon = tigger.parentElement
    const isOpen = acordeon.classList.contains('open')
    if (isOpen) {
      acordeon.classList.remove('open')
    } else {
      acordeon.classList.add('open')
    }
  })
})