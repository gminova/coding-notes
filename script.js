//NAVIGATION
let menu = document.getElementById("menu");
let menuIcon = document.querySelector(".fas");
let menuDropdown = document.getElementById("menuDropdown");
menu.onclick = function() {
    menuDropdown.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-caret-up");
}
//CONTACT FORM
const scriptURL =
"https://script.google.com/macros/s/AKfycbwqttnIUNWZuSydSladbGf912Z5A_Hc3Pg8mJt1hQ/exec";
const form = document.forms["submit-to-google-sheet"];
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(scriptURL, { 
            method: "POST", 
            body: new FormData(form) })
        .then(response => console.log("Success!", response))
        .catch(error => console.error("Error!", error.message));
});