document.querySelector('.add-recipe-btn').addEventListener('click', openNewRecipeBook)
document.querySelector('.close-btn').addEventListener('click', closeNewRecipeBook)
document.querySelector('.addBtn').addEventListener('click', openBrowser)

function openNewRecipeBook(){
    document.querySelector('.search-overlay').style.height = "40%"
    document.querySelector('.browser-overlay').style.height = "0%"
}

function closeNewRecipeBook(){
    document.querySelector('.search-overlay').style.height = "0%"
}