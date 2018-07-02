import './index.css';

var amount = document.getElementById('amount');
var percent = document.getElementById('percent');
var age = document.getElementById('age');
var button = document.getElementById('clicked');
var list = document.getElementById('results');




function calculate(amount, percent){
  var newpercent = percent/100;
  return amount - (amount * newpercent);
}

function listFunction(){
  var amountNow = amount.value;
  var percentage = percent.value;
  var ageNow = age.value;

  while(ageNow <= 99){
      amountNow = calculate(amountNow, percentage);
      ageNow++;
      var text = "Age: " + ageNow + "        $" + parseInt(amountNow);
      list.innerHTML += text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
      list.appendChild(document.createElement("br"));
  }
}

button.addEventListener("click", listFunction);
