function validation()
{
     var saccept = document.getElementById("saccept").value;
     document.getElementById('cField').innerHTML=saccept;
     if(!saccept.checked)
      {
            alert('You must agree to the terms first.');
            submit="false";
      }
}