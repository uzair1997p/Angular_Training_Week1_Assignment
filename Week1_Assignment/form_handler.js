const form = document.getElementById('send_form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();  //prevents form from auto submitting

    let fullname=document.getElementById('fullname').value;
    let email=document.getElementById('email').value;
    let phone_number=document.getElementById('phonenumber').value;
    let message=document.getElementById('message').value;
    
    window.alert(fullname+","+email+","+phone_number+","+message)    
})