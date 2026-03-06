// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let taxSwitch = document.querySelector("#switchCheckDefault");

taxSwitch.addEventListener("click", () => {

  document.querySelectorAll(".price").forEach(price => {

    let basePrice = Number(price.dataset.price);

    if(taxSwitch.checked){
        price.innerText = Math.round(basePrice * 1.18).toLocaleString("en-IN");
    }
    else{
        price.innerText = basePrice.toLocaleString("en-IN");
    }
  });

  document.querySelectorAll(".tax-info").forEach(info => {
    info.classList.toggle("show-tax");
  });

});