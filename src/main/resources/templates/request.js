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
