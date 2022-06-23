//collecting data form

let form = document.querySelector('#loginForm');
let salvarForm = document.querySelector('#clickButton');
let nameF = document.querySelector('#Fname');
let nameL = document.querySelector('#Lname');
let ad = document.querySelector('#adress');
let cit = document.querySelector('#city');
let iState = document.querySelector('#inputState');
let pass = document.querySelector('#password');
let pass2 = document.querySelector('#password2');
let error = document.querySelector('#error-data');


salvarForm.addEventListener ("click", function(event){
   event.preventDefault();

   let nameValue = nameF.value;
   let nameLvalue = nameL.value;
   let end = ad.value;
   let cid = cit.value;
   let stateValue = iState.value;
   let passValue =pass.value;
   let passValue2 = pass2.value;

   
  /*validation empty space and passWord */

   if (nameValue  == ""| nameLvalue == ""| end == "" |stateValue==""| cid ==""|passValue ==""|passValue2==""|passValue!=passValue2){
         
         error.innerHTML = "Please Fill out the fields!";
         setTimeout (() => {error.innerHTML ="";
      
         }, 3000);

         return;
 
       
   }else{ 
      
      let myArray = [nameValue, nameLvalue, end, stateValue, cid, passValue];

      console.log(myArray);
      

      //let nValue = [nameValue];
      //let lValue = [nameLvalue];
      //let endValue = [end];
      //let sValue = [stateValue];
      //let cidValue = [cid];
      //let paValue = [passValue];
      //let paValue2 = [passValue2];

      //console.log(nValue, lValue, endValue, sValue, cidValue, paValue, paValue2);
     //alert(nValue,"Registration Successful");

     Swal.fire(
      'Good job!',
      'Registration Successful!',
      'success'
    )

    
      
   } 

});



/*Construction validation Email */

form.email.addEventListener('change', function(){

   validEmail(this);
   
});





const validEmail = function (inputEmail){

   let emailRegExp = new RegExp(

      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
      'g'

   );

   //constrution msg error and if ok in validation save data in array
   let small = inputEmail.nextElementSibling;

   if (emailRegExp.test(inputEmail.value ||inputEmail.value=="")){
      small.innerHTML = 'email valid';
      small.classList.add('text-success');
      small.classList.remove('text-danger');

     let email = [inputEmail.value];
     
     console.log(email); 

   

   } else{

      small.innerHTML = 'email NO valid';
      small.classList.add('text-danger');
      small.classList.remove('text-sucess');

   }
  

}








