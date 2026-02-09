document.querySelector('.addBtn').addEventListener('click', openBrowser)
document.querySelector('.closeBtn').addEventListener('click', closeBrowser)
document.querySelector('.add-recipe-btn').addEventListener('click', openNewRecipeBook)

function openBrowser(){
    document.querySelector('.browser-overlay').style.height = "40%"
    document.querySelector('.search-overlay').style.height = "0%"
}
function closeBrowser(){
    document.querySelector('.browser-overlay').style.height = "0%"
}
