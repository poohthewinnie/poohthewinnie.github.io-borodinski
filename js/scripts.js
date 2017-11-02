/* variables */
var loginBtn = document.querySelector(".login");
var loginPopup = document.querySelector(".login-popup");
var usernameField = document.querySelector(".username");

var mapBtn = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map-popup");

var closePopupBtn = document.querySelector(".popup-btn-close");

loginBtn.addEventListener("click", function(event){
  event.preventDefault();
  loginPopup.classList.add("popup-show");
  usernameField.focus();
});
closePopupBtn.addEventListener("click", function(event){
  event.preventDefault();
  loginPopup.classList.remove("popup-show");

});

mapBtn.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("popup-show");
});
closePopupBtn.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("popup-show");
});
