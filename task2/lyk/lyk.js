var headSculpture = document.getElementById("bckpic").getElementsByTagName("img")[0];
var concern = document.getElementsByClassName("inme")[0];

headSculpture.onmouseover = function() {
    concern.style.display = 'block';
};
headSculpture.onmouseout = function() {
    concern.style.display = 'none';
};
concern.onmouseover = function() {
    this.style.display = 'block';
};
concern.onmouseout = function() {
    this.style.display = 'none';
};

