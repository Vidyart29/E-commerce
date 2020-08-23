var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modall = document.getElementById("myModal2");

// Get the button that opens the modal
var btnn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var spann = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btnn.onclick = function() {
    modall.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann.onclick = function() {
    modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }
}


var modal2 = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}