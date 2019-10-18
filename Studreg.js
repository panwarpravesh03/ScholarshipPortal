function validation()
{
      var iadhar = document.forms["stuRegForm"]["iadhar"]; 
      var imobno = document.forms["stuRegForm"]["imobno";
      var stateSel = document.forms["stuRegForm"]["stateSel"];               
      var districtSel = document.forms["stuRegForm"]["districtSel"];
      var inscode = document.forms["stuRegForm"]["inscode"];  
      var disecode = document.forms["stuRegForm"]["disecode"];              
      var itype = document.forms["stuRegForm"]["itype"];              
      var iaffstate = document.forms["stuRegForm"]["iaffstate"]; 
      var iaffuniv = document.forms["stuRegForm"]["iaffuniv"];              
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

      var date = document.getElementById("iadmstart").value;
      var varDate = new Date(date); //dd-mm-YYYY
      var today = new Date();


       if (iadhar.value=="defaultVal")                                  
      { 
           document.getElementById('iadhar_error').innerHTML = "*field can't be empty";
           inscag.focus(); 
           submit="false"; 
       }

       if (mobno.value == "")                               
       { 
          document.getElementById('iname_error').innerHTML = "*field can't be empty";
          iname.focus(); 
          submit="false"; 
      } 
      
   
      
      if (stateSel.value == "defaultVal")                                  
      { 
           document.getElementById('stateSel_error').innerHTML = "*field can't be empty";
           stateSel.focus(); 
           submit="false"; 
       } 
   
       if (districtSel.value == "defaultVal")                               
       { 
          document.getElementById('districtSel_error').innerHTML = "*field can't be empty";
          districtSel.focus(); 
          submit="false"; 
      } 
      
      if (inscode.value == "")                                  
      { 
           document.getElementById('inscode_error').innerHTML = "*field can't be empty";
           inscode.focus(); 
           submit="false"; 
      }
      if (disecode.value == "")                                  
      { 
           document.getElementById('disecode_error').innerHTML = "*field can't be empty";
           disecode.focus(); 
           submit="false"; 
       }  
   
       
      if (itype.value == "defaultVal")                                  
      { 
           document.getElementById('itype_error').innerHTML = "*field can't be empty";
           itype.focus(); 
           submit="false"; 
       }  
   
       if (iaffstate.value == "defaultVal")                               
       { 
          document.getElementById('iaffstate_error').innerHTML = "*field can't be empty";
          iaffstate.focus(); 
          submit="false"; 
      } 
      if (iaffuniv.value == "defaultVal")                                  
      { 
           document.getElementById('iaffuniv_error').innerHTML = "*field can't be empty";
           iaffuniv.focus(); 
           submit="false"; 
       }  
   