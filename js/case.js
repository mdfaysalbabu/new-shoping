function updateNumber(isIncrease){
    const caseField=document.getElementById('case-input');
    const caseFieldString=caseField.value;
    const previousCase=parseInt(caseFieldString);

    let newCase;
    if(isIncrease){
        newCase=previousCase+1;
    }
    else{
        newCase=previousCase-1;
    }
    caseField.value=newCase;
    return newCase;
}

function updateCasePrice(newCase){
    const totalPrice=newCase*59;
    const caseTotal=document.getElementById('total-case');
    caseTotal.innerText=totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
 const newCaseNumber= updateNumber(true);
 updateCasePrice(newCaseNumber)
 calculateSub();
})

document.getElementById('case-minus').addEventListener('click',function(){
    const newCaseNumber= updateNumber(false);
  updateCasePrice(newCaseNumber)
  calculateSub();
})