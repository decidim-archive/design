function formValidationCustomErrors(){
  var formTrigger = document.querySelectorAll("[data-abide]");

  function formDisplayCustomErrors(){
    var customErrors = document.querySelectorAll("[data-custom-error].is-invalid-input"),
    displayedCustomErrors = document.querySelectorAll(".is-custom-error-visible");

    //Remove error classes before validations
    for (var i = "0"; i < displayedCustomErrors.length; i++){
      displayedCustomErrors[i].classList.remove("is-custom-error-visible");
    }

    //Show custom errors
    for (var i = "0"; i < customErrors.length; i++){
      var targetError = customErrors[i].getAttribute("data-custom-error");
      document.querySelector("#" + targetError).classList.add("is-custom-error-visible");
    }
  }

  //Form listener for submit and changes
  for (var i = "0"; i < formTrigger.length; i++){
    formTrigger[i].addEventListener("submit", formDisplayCustomErrors);
    formTrigger[i].addEventListener("change", formDisplayCustomErrors);
  }
}
