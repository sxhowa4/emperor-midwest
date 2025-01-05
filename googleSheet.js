const scriptURL =
  'https://script.google.com/macros/s/AKfycbxMAK_DS9KpAL83BtgqDO89EFhuRzZ6XM78vj_Pb1mZjEW3Nj_nJLzxRAxAGu9GxE8V/exec'

const form = document.forms['contact-us']

form.addEventListener('submit', (e) => {
  e.preventDefault()

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors',
  })
    .then((response) => alert('Thank you!'))
    .then(() => {
      window.location.reload()
    })
    .catch((error) => console.error('Error!', error.message))
})
