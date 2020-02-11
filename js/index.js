// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
var load = document.getElementById('load');
var error = document.getElementById('error');


btn.onclick = function() {
  var user = document.getElementById('fname').value;
  if (user !=="" || null) {
    error.style.display = "none";
    var http = new XMLHttpRequest();
    var response ;
    var url = " https://valmate.herokuapp.com/api/user";
    var value = {
       name:user
    };
    var params = JSON.stringify(value);
    http.open('PUT',url,true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onreadystatechange = function() {//Call a function when the state changes.
       if(http.readyState == 4 && http.status == 200) {
           response = JSON.parse(http.responseText);
           console.log(response);
           document.getElementById('partner').innerHTML = response.partner;
       }
    }
    http.send(params);
    load.style.display = "inline";
    setTimeout(()=>{modal.style.display = "block"; },3000);
  }
  else{
    error.style.display = "block";
  }


}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  load.style.display = "none";
  document.getElementById('fname').value ="";
  document.getElementById('partner').innerHTML = "";

}





