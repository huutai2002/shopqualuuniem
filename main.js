//-------------- SLIDER-----------------//
let sliderIndex = 0;
const slides = document.getElementsByClassName("slide")
const slideCount = slides.length;
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

function showSlide(n) {
  if (n < 0) {
    sliderIndex = slideCount - 1;
  } else if (n >= slideCount) {
    sliderIndex = 0;
  } else {
    sliderIndex = n;
  }
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.opacity = "0";
  }
  slides[sliderIndex].style.opacity = "1";
}

function nextSlide() {
  showSlide(sliderIndex + 1);
}

function prevSlide() {
  showSlide(sliderIndex - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);
//--------------END SLIDER-----------------//

//-------------- SEARCH-----------------//
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
//--------------END SEARCH-----------------//

//-----------------LIEN HE----------------------//
let searchForm = document.forms["form-search"];
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

function result(keyword) {
    if (keyword.length === 0) return;
    searchForm.submit();
}

function frmValidateContact(frm) {
    if (frm.name.value.length < 4) {
        alert("Tên không hợp lệ !")
        return false
    }
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(frm.email.value)) {
        alert("Email không hợp lệ !")
        return false
    }
    if (frm.feedback.value.length < 10) {
        alert("Nội dung quá ngắn !")
        return false;
    }
    alert("Gửi thành công")
    return true;
}
//--------------END LIEN HE----------------------//

//--------------DANG KY-DANG NHAP----------------//
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


function checkdk() { 
  var email = document.getElementById('email').value; 
  var password= document.getElementById('password').value;
  var password1= document.getElementById('password1').value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //bieu thuc chinh quy
  if(email=='' && password=='' && password1=='')
      alert('Vui lòng nhập email và password !')
  if (!filter.test(email) || email =='') { 
      alert('Email không hợp lệ.');
      email.focus; 
      return false; 
  }
  else if (password=='' || password.length < 8){
      alert('Password không hợp lệ.');
      return false; 
  }
  else if (password1=='' || password.length < 8 || password1 != password){
      alert('Password không khớp.');
      return false; 
  }
  else
      alert('OK. Đăng ký thành công.'); 
} 


function checkdn() { 
  var email = document.getElementById('email').value; 
  var password= document.getElementById('password').value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if(email=='' && password=='')
      alert('Vui lòng nhập email và password !')
  if (!filter.test(email) || email =='') { 
      alert('Email không hợp lệ.');
      email.focus; 
      return false; 
  }
  else if (password=='' || password.length < 8){
      alert('Password không hợp lệ.');
      return false; 
  }
  else{
      alert('OK. Đăng nhập thành công.'); 
      window.open("./trangchu.html");
      window.open("./dangnhap.html");
  }

}
//--------------END DANG KY-DANG NHAP----------------//

// ------------SLIDER CHINH SACH------------------//
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// ------------------------------------------
