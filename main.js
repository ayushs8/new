document.getElementById("use").style.color="red";
 document.getElementById("use").style.fontSize="15px"
function valid()
{

var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box1").value;

  

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("use").innerHTML="*only alphabets allowed";
    return false;
  }
  if(a.length>6)
  {
    document.getElementById("use").innerHTML="*Input Only 6 charaters";
    
   
  }
  
}
document.getElementById("pa").style.color="red";
document.getElementById("pa").style.fontSize="15px"
function pass()
{
  var password=document.getElementById("box2").value;
  
  if(password.length>8)
  {
    document.getElementById("pa").innerHTML="*Input password only 8 characters";
    return true;
  }
  
}