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


///////////////////////////////////////////////////////////

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
  else
      alert('OK. Đăng nhập thành công.'); 
      window.open("/trangchu.html")
} 


