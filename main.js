// -------------Subnav------------------
const optionsDiv = document.querySelector("subnav");

optionsDiv.addEventListener('mouseover', () => {
  // Hiển thị các tùy chọn khi di chuột vào
  optionsDiv.style.display = 'block';
});

optionsDiv.addEventListener('mouseout', () => {
  // Ẩn các tùy chọn khi di chuột ra khỏi div
  optionsDiv.style.display = 'none';
});



//-------------- Slider-----------------
let slideIndex = 0;
const slides = document.getElementsByClassName("slide")
const slideCount = slides.length;
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slideCount - 1;
  } else if (n >= slideCount) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex].style.opacity = "1";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
//-----------------Search-----------------------
function formValidate (){
  var frm= document.forms['regForm'];
  if (frm.search.value.length>0){
      return true;
  }
  else return false;
}

var btn= document.getElementById('tim');
btn.addEventListener("keypress", function(event){
  if (event.key=="Enter"){
      formValidate();
    }
});


var send=document.getElementById('gui');
send.addEventListener("click", formValidate);
//-----------------Lien he----------------------
let searchForm = document.forms["frm-search"];
let searchButton = document.querySelector(".search-button");
if (searchForm) {
    searchForm.onsubmit = (e) => { e.preventDefault(); };
    if (searchButton) {
        searchButton.onclick = () => {
            result(searchForm.search.value);
        };
    }
    searchForm.search.onkeypress = (e) => { if (e.which === 13) { result(e.target.value); } };
}

