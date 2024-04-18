const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const header = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;
    console.log(`\nCategory: ${header}`);
    console.log(`Elements: ${elements}`);
});
