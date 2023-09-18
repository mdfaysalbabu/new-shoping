function getElement(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhone = parseInt(currentPhoneTotalString);
    return currentPhone;
  }
  function setElement(elementId,value){

    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;

  }
  function calculateSub() {
    const currentPhone = getElement("phone-text");
    const currentCase = getElement("total-case");

    const currentPrice = currentPhone + currentCase;
   setElement('sub-total',currentPrice)
    
    
    // calculate tax
    const taxAmountString=(currentPrice*0.1).toFixed(2);
    const taxAmount=parseInt(taxAmountString)
    setElement('tex',taxAmount)

    const finalAmount=currentPrice+taxAmount;
    setElement('final-total',finalAmount)

  }