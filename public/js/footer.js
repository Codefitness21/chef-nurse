document.querySelector('.addBtn').addEventListener('click', openBrowser)
document.querySelector('.closeBtn').addEventListener('click', closeBrowser)

function openBrowser(){
    document.getElementById('browser-overlay').style.height = "40%"
}
function closeBrowser(){
    document.getElementById('browser-overlay').style.height = "0%"
}
