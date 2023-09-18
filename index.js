var ageElement = document.getElementById("age");
var footerDate = document.getElementById("footer_date");
var date = new Date();
if (footerDate != null) {
    footerDate.textContent = date.getFullYear().toString();
}
function calculate_age() {
    var year = date.getFullYear();
    var age = year - 2002;
    if (ageElement != null) {
        ageElement.textContent = age.toString();
    }
}
calculate_age();
var postWall = document.getElementById("post_wall");
var donMark = document.getElementById("don_mark");
var vanilaLib = document.getElementById("vanilla_lib");
var portfolio = document.getElementById("portfolio");
postWall === null || postWall === void 0 ? void 0 : postWall.addEventListener("click", function () {
    window.open("https://github.com/Benbellah-Owino/PostWallApp");
});
donMark === null || donMark === void 0 ? void 0 : donMark.addEventListener("click", function () {
    window.open("https://github.com/Benbellah-Owino/School-Project");
});
vanilaLib === null || vanilaLib === void 0 ? void 0 : vanilaLib.addEventListener("click", function () {
    window.open("https://github.com/Benbellah-Owino/VanillaLibManagement");
});
portfolio === null || portfolio === void 0 ? void 0 : portfolio.addEventListener("click", function () {
    window.open("https://github.com/Benbellah-Owino/BenbellahOwinoPortfolio");
});
