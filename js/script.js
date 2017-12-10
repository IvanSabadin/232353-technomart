var link = document.querySelector(".btn-follow-mail");
var popup = document.querySelector(".modal-writeus");
var close = document.querySelector(".modal-writeus-close");
var user = popup.querySelector(".user-name-field");


var topopupbookmark = document.querySelector(".goods-hidden-basket");
var popupbookmark = document.querySelector(".modal-add");
var btnclose = popupbookmark.querySelector(".btn-add-close");
var modalclose = popupbookmark.querySelector(".modal-add-close");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
    popup.classList.add("modal-show");
	user.focus();
  });
  
  

close.addEventListener("click", function (evt) {
	evt.preventDefault();
    popup.classList.remove("modal-show");
  });






topopupbookmark.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupbookmark.classList.add("modal-show");	
});


btnclose.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupbookmark.classList.remove("modal-show");
});


modalclose.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupbookmark.classList.remove("modal-show");
});