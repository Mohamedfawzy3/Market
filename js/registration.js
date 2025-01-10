const header_btns = document.querySelectorAll(".header-btn button");
const login_form = document.querySelector(".login");
const signup_form = document.querySelector(".signup");

let login_obj = {};
let signup_obj = {};
let validate = {
  name: false,
  email: false,
  password: false,
  repassword: true,
};

header_btns[0].addEventListener("click", function () {
  handle_buttons_click(header_btns[0]);
});
header_btns[1].addEventListener("click", function () {
  handle_buttons_click(header_btns[1]);
});
function handle_buttons_click(clicked_btn) {
  if (clicked_btn.classList.contains("active")) {
    return false;
  }
  login_form.classList.toggle("d-none");
  signup_form.classList.toggle("d-none");
  header_btns[0].classList.toggle("btn-warning");
  header_btns[0].classList.toggle("btn-light");
  header_btns[0].classList.toggle("text-white");
  header_btns[1].classList.toggle("btn-light");
  header_btns[1].classList.toggle("btn-warning");
  header_btns[1].classList.toggle("text-white");
  header_btns[1].classList.toggle("active");
  header_btns[0].classList.toggle("active");
}
function login() {
  login_obj.email = document.querySelector(".login .email").value;
  login_obj.password = document.querySelector(".login .password").value;
  console.log(login_obj);
}
function geting_signup_data(el) {
  signup_obj[el.getAttribute("name")] = el.value;
  if (!el.value.match(el.getAttribute("pattern"))) {
    el.nextSibling.classList.remove("d-none");
    validate[el.getAttribute("name")] = false;
  } else {
    validate[el.getAttribute("name")] = true;
    el.nextSibling.classList.add("d-none");
  }

  console.log(signup_obj)
}
// cheeck if all inputs is valid to submit
function isValid(obj) {
  let flag = true;
  for (let key in obj) {
    if (obj[key] == false) {
      flag = false;
     
    }
  }
  return flag;
}
// check password matching
function isMatched(){
  if(signup_obj.password===signup_obj.confirm_password){
    validate.repassword=true
  }

  validate.repassword=false
}
function submitData(ev){
  ev.preventDefault()
  
  isMatched()
  if(isValid(validate)){
    // post data in api 
  
  }
  else{
    
//     let formInputs=document.querySelectorAll(".signup input")
//     formInputs.forEach((el)=>{
// if(!validate[el.getAttribute("name")]){
//   console.log(el.nextElementSiblin)
// el.nextElementSibling().classList.remove("d-none")
// }
//     })

  }
}