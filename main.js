const amountInput = document.getElementById("amount");
const firstOption = document.getElementById("firstCurrencyOption");
const secondOption = document.getElementById("secondCurrencyOption");
const resultInput = document.getElementById("result");

const currency =new Currency();


runEventListeners();

function runEventListeners() {
    amountInput.addEventListener("input",exchange);
    
}
function exchange() {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue =firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue =secondOption.options[secondOption.selectedIndex].textContent;
   
    currency.exchange(amount,firstOptionValue,secondOptionValue)
    
    
    .then((result) => {
        resultInput.value =result.toFixed(3)

    })
   
    console.log(" hoşgeldin kral çalışıyor  url = https://l24.im/joShNK");
    

    
}
