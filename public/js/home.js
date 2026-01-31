document.querySelector('.add-recipe-btn').addEventListener('click', openNewRecipeBook)
document.querySelector('.close-btn').addEventListener('click', closeNewRecipeBook)

function openNewRecipeBook(){
    document.getElementById('search-overlay').style.height = "40%"
}
function closeNewRecipeBook(){
    document.getElementById('search-overlay').style.height = "0%"
}


