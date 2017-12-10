var link = document.querySelector(".btn-follow-mail");
var popup = document.querySelector(".modal-writeus");
var close = document.querySelector(".modal-writeus-close");
var user = document.querySelector(".user-name-field");


var topopupbookmarks = document.querySelectorAll(".goods-hidden-basket");
var popupbookmark = document.querySelector(".modal-add");
var btnclose = document.querySelector(".btn-add-close");
var modalclose = document.querySelector(".modal-add-close");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
    popup.classList.add("modal-show");
	user.focus();
  });
  
  

close.addEventListener("click", function (evt) {
	evt.preventDefault();
    popup.classList.remove("modal-show");
  });



for (var i = 0; i < topopupbookmarks.length; i++){
	topopupbookmarks[i].addEventListener("click", function(evt) {
	evt.preventDefault();
	popupbookmark.classList.add("modal-show");
});

}


btnclose.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupbookmark.classList.remove("modal-show");
});


modalclose.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupbookmark.classList.remove("modal-show");
});