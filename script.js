const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');

function setError(input,message){
    formError=input.parentElement;
    formError.classList.add('error');
    formError.classList.remove('success');
    const span=formError.querySelector('.span');
    span.innerHTML=message;
    
}
function setSuccess(input){
    formSuccess=input.parentElement;
    formSuccess.classList.add('success');
    formSuccess.classList.remove('error');
    const span=formSuccess.querySelector('.span');
    span.innerHTML="Success";   
}
 username.addEventListener('keyup',function(){
    usernameValue=username.value.trim();
    if(usernameValue==''){
        setError(username,"User name not empty.")
    }else if(usernameValue.length<5){
        setError(username,"User name have 5 or more than.")
    }else{
        setSuccess(username)
    }
 })


  const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }
email.addEventListener('keyup',function(){
    emailValue=email.value.trim();
    if(emailValue==''){
        setError(email,"Email not empty.");
    }else if(isEmail(emailValue)==false){
        setError(email,"Invalid email");
    }else{
        setSuccess(email);
    }
})