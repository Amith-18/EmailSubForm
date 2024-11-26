

const scriptURL = 'https://script.google.com/macros/s/AKfycbyFbFukDd385eWuPD6CgFkvOC_1vsTVWEMhHkrBFLIRljf0cy2Yo8Dly5JBqhsa_jU/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML= '';
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })