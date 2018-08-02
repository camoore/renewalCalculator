var amount = document.getElementById('amount');
var percent = document.getElementById('percent');
var age = document.getElementById('age');
var button = document.getElementById('clicked');
var clearButton = document.getElementById('cleared');
var list = document.getElementById('results');
var iosIcon = document.getElementById('ios-icon');
var androidIcon = document.getElementById('android-icon');
var desktopIcon = document.getElementById('desktop-icon');
var appIcon = document.getElementById('app-icon');
var titleIcon = document.getElementById('title-icon');
var desktopIcon = document.getElementById('desktop-icon');
var iphoneDiv = document.getElementsByClassName('iphone-page')[0];
var androidDiv = document.getElementsByClassName('android-page')[0];
var homeDiv = document.getElementsByClassName('home-page')[0];
var listDiv = document.getElementById('resultsDiv');
var formDiv = document.getElementsByClassName('form-group')[0];



function calculate(amount, percent){
  var newpercent = percent/100;
  return amount - (amount * newpercent);
}

function listFunction(){
  var amountNow = amount.value;
  var percentage = percent.value;
  var ageNow = age.value;

  list.style.display="block";
  listDiv.style.display="block";

  while(ageNow <= 99){
      amountNow = calculate(amountNow, percentage);
      ageNow++;
      var text = "At age " + ageNow + " you will earn $" + parseInt(amountNow) + " in renewals.";
      list.innerHTML += text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
      list.appendChild(document.createElement("br"));
  }

}

button.addEventListener("click", listFunction);

clearButton.addEventListener("click", function(){
  list.innerHTML = "";
  list.style.display="none";
  listDiv.style.display="none";
});
appIcon.addEventListener("click", function() {
  homeDiv.style.display="block";
  formDiv.style.display = "none";
  androidDiv.style.display="none";
  iphoneDiv.style.display = "none";
});
titleIcon.addEventListener("click", function() {
  homeDiv.style.display="block";
  formDiv.style.display = "none";
  androidDiv.style.display="none";
  iphoneDiv.style.display = "none";
});
desktopIcon.addEventListener("click", function() {
  homeDiv.style.display="none";
  formDiv.style.display = "block";
  listDiv.style.display = "none";
  androidDiv.style.display="none";
  iphoneDiv.style.display = "none";
});
iosIcon.addEventListener("click", function() {
  homeDiv.style.display="none";
  formDiv.style.display = "none";
  androidDiv.style.display="none";
  iphoneDiv.style.display = "block";
});
androidIcon.addEventListener("click", function() {
  homeDiv.style.display="none";
  formDiv.style.display = "none";
  androidDiv.style.display="block";
  iphoneDiv.style.display = "none";
});
