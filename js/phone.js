function updateNumber(isIncrease) {
  const phoneField = document.getElementById("phone-input");
  const phoneString = phoneField.value;
  const previousPhone = parseInt(phoneString);
  let newPhone;
  if (isIncrease) {
    newPhone = previousPhone + 1;
  } else {
    newPhone = previousPhone - 1;
  }
  phoneField.value = newPhone;
  return newPhone;
}

function updateTotal(newPhoneNumber) {
  const phoneTotal = document.getElementById("phone-text");
  const phoneTotalPrice = newPhoneNumber * 1219;
  phoneTotal.innerText = phoneTotalPrice;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  const newPhoneNumber = updateNumber(true);

  updateTotal(newPhoneNumber);
  //   calculate-total
  calculateSub();
});

document.getElementById("phone-minus").addEventListener("click", function () {
  const newPhoneNumber = updateNumber(false);
  updateTotal(newPhoneNumber);

  calculateSub();
});
