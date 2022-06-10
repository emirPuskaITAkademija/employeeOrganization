<!DOCTYPE html>
<html>
<body>

<script>
function userAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            document.getElementById("demo").innerHTML=this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:8080/api", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
</script>

<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="userAction()">Request data</button>
<p id="demo">loadDoc()</p>

<script src="request.js"></script>

</body>
</html>
