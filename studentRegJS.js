function validation()
{
      var aadhar = document.forms["stuRegForm"]["aadhar"]; 
      var fullname = document.forms["stuRegForm"]["fullname"];
      var mobileno = document.forms["stuRegForm"]["mobileno"];               
      var fathername = document.forms["stuRegForm"]["fathername"];
      var mothername = document.forms["stuRegForm"]["mothername"];  
      var gender = document.forms["stuRegForm"]["gender"];              
      var dob = document.forms["stuRegForm"]["dob"];              
      var religion = document.forms["stuRegForm"]["religion"]; 
      var mstatus = document.forms["stuRegForm"]["mstatus"];              
      var iadmstart = document.forms["stuRegForm"]["iadmstart"];
      var ispwd = document.forms["stuRegForm"]["ispwd"];
      var iconfpwd = document.forms["stuRegForm"]["iconfpwd"];  
      var ilineOne = document.forms["stuRegForm"]["ilineOne"];
      var ilineTwo = document.forms["stuRegForm"]["ilineTwo"]; 
      var icity = document.forms["stuRegForm"]["icity"];
      var istate = document.forms["stuRegForm"]["istate"];
      var ipriname = document.forms["stuRegForm"]["ipriname"]; 
      var imobno = document.forms["stuRegForm"]["imobno"];
      var itele = document.forms["stuRegForm"]["itele"];
      var iaccept = document.forms["stuRegForm"]["iaccept"];

      var submit="true";
      var alphaExp = /^[a-zA-Z]+$/;
      var phoneno = /^\d{10}$/;
      var aadharVal = /^\d{12}$/;

      var date = document.getElementById("iadmstart").value;
      var varDate = new Date(date); //dd-mm-YYYY
      var today = new Date();


       if (aadhar.value=="")                                  
      { 
           document.getElementById('aadhar_error').innerHTML = "** field can't be empty";
           aadhar.focus(); 
           submit="false"; 
       }
       if (aadhar.value.match(aadharVal))                                  
      { 
           aadhar.focus(); 
           submit="true"; 
       }
       else                                  
      { 
           document.getElementById('aadhar_error').innerHTML = "*invalid Aadhar Number";
           aadhar.focus(); 
           submit="false"; 
       }

       if (fullname.value == "")                               
       { 
          document.getElementById('fullname_error').innerHTML = "** field can't be empty";
          fullname.focus(); 
          submit="false"; 
      } 
      
   
      
      if (mobileno.value == "defaultVal")                                  
      { 
           document.getElementById('mobileno_error').innerHTML = "** field can't be empty";
           mobileno.focus(); 
           submit="false"; 
       } 
   
       if (fathername.value == "defaultVal")                               
       { 
          document.getElementById('fathername_error').innerHTML = "** field can't be empty";
          fathername.focus(); 
          submit="false"; 
      } 
      
      if (mothername.value == "")                                  
      { 
           document.getElementById('mothername_error').innerHTML = "** field can't be empty";
           mothername.focus(); 
           submit="false"; 
      }
      if (gender.value == "")                                  
      { 
           document.getElementById('gender_error').innerHTML = "** field can't be empty";
           gender.focus(); 
           submit="false"; 
       }  
   
       
      if (dob.value == "defaultVal")                                  
      { 
           document.getElementById('dob_error').innerHTML = "** field can't be empty";
           dob.focus(); 
           submit="false"; 
       }  
   
       if (religion.value == "defaultVal")                               
       { 
          document.getElementById('religion_error').innerHTML = "** field can't be empty";
          religion.focus(); 
          submit="false"; 
      } 
      if (mstatus.value == "defaultVal")                                  
      { 
           document.getElementById('mstatus_error').innerHTML = "** field can't be empty";
           mstatus.focus(); 
           submit="false"; 
       }  
   
       if (iadmstart.value == "")                               
       { 
          document.getElementById('iadmstart_error').innerHTML = "** field can't be empty";
          iadmstart.focus(); 
          submit="false"; 
      } 
      if(varDate >= today) 
      {
          document.getElementById('iadmstart_error').innerHTML = "** date invalid";
          iadmstart.focus(); 
          submit="false"; 
      }
      if (ispwd.value == "")                               
       { 
          document.getElementById('ispwd_error').innerHTML = "** field can't be empty";
          ispwd.focus(); 
          submit="false"; 
      } 
      if (iconfpwd.value == "")                               
       { 
          document.getElementById('iconfpwd_error').innerHTML = "** field can't be empty";
          iconfpwd.focus(); 
          submit="false"; 
      } 
      if (iconfpwd.value != ispwd.value)                               
       { 
          alert ("password not matching");
          iconfpwd.focus(); 
          submit="false"; 
      } 
      if (ilineOne.value == "")                               
       { 
          document.getElementById('ilineOne_error').innerHTML = "** field can't be empty";
          ilineOne.focus(); 
          submit="false"; 
      } 
      if (ilineTwo.value == "")                               
       { 
          document.getElementById('ilineTwo_error').innerHTML = "** field can't be empty";
          ilineTwo.focus(); 
          submit="false"; 
      } 
      if (icity.value == "")                               
       { 
          document.getElementById('icity_error').innerHTML = "** field can't be empty";
          icity.focus(); 
          submit="false"; 
      } 
      if (istate.value == "")                               
       { 
          document.getElementById('istate_error').innerHTML = "** field can't be empty";
          istate.focus(); 
          submit="false"; 
      } 
      if (ipriname.value == "")                               
       { 
          document.getElementById('ipriname_error').innerHTML = "** field can't be empty";
          ipriname.focus(); 
          submit="false"; 
      } 
      if (imobno.value == "")                               
       { 
          document.getElementById('imobno_error').innerHTML = "** field can't be empty";
          imobno.focus(); 
          submit="false"; 
      } 
      if (imobno.value.match(phoneno))                               
       { 
         // document.getElementById('imobno_error').innerHTML = "** invalid number";
          imobno.focus(); 
          submit="true"; 
      } 
      else
      {
            document.getElementById('imobno_error').innerHTML = "** invalid number";
          imobno.focus(); 
          submit="false"; 
      }
      if (itele.value= "")                               
       { 
          document.getElementById('itele_error').innerHTML = "** field can't be empty";
          itele.focus(); 
          submit="false"; 
      } 
      if (itele.value.match(phoneno))                               
       { 
          itele.focus(); 
          submit="true"; 
      } 
      else
      {
          document.getElementById('itele_error').innerHTML = "** invalid number";
          itele.focus(); 
          submit="false"; 
      }
      if(!iaccept.checked)
      {
            alert('You must agree to the terms first.');
            submit="false";
      }

      return submit;
}
function removeWarning()
{
      document.getElementById(this.id + "_error").innerHTML= "";
}
document.getElementById("aadhar").onchange= removeWarning;
document.getElementById("fullname").onchange= removeWarning;
document.getElementById("mobileno").onclick= removeWarning;
document.getElementById("fathername").onchange= removeWarning;
document.getElementById("mothername").onkeyup= removeWarning;
document.getElementById("gender").onkeyup= removeWarning;
document.getElementById("dob").onchange= removeWarning;
document.getElementById("religion").onchange= removeWarning;
document.getElementById("mstatus").onchange= removeWarning;
document.getElementById("iadmstart").onchange= removeWarning;
document.getElementById("ispwd").onkeyup= removeWarning;
document.getElementById("iconfpwd").onkeyup= removeWarning;
document.getElementById("ilineOne").onkeyup= removeWarning;
document.getElementById("ilineTwo").onkeyup= removeWarning;
document.getElementById("icity").onkeyup= removeWarning;
document.getElementById("istate").onkeyup= removeWarning;
document.getElementById("ipriname").onkeyup= removeWarning;
document.getElementById("imobno").onkeyup= removeWarning;
document.getElementById("itele").onkeyup= removeWarning;