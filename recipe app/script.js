const searchBox=document.querySelector('.searchbox');
const searchBtn=document.querySelector('.searchbtn');
const recipeContainer=document.querySelector('.recipe-container');

const fetchRecipes = async (query) => {
    const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response= await data.json()
    // console.log(response.meals[0]);

    recipeContainer.innerHTML="";

    response.meals.forEach(meal => {
        const recipeDiv =document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeContainer.innerHTML=`
            <img src="${meal.strMealThumb}">   
            <h3>${meal.strMeal}</h3>  
            <p> ${meal.strArea}</p>   
            <p> ${meal.strCategory}</p>  
        `
        recipeContainer.appendChild(recipeDiv);
    });
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput= searchBox.value.trim();
    fetchRecipes(searchInput);
    // console.log("button clicked")
})