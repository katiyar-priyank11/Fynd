function myFunction1() {
    var x = document.getElementById("add-team");
    var y = document.getElementById("add-team-form");
    if (x.style.display === "none") {
      x.style.display = "grid";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}