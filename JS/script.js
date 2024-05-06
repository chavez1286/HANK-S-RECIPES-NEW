document.getElementById('search-input').addEventListener('input', function() {
    searchRecipes();
});

function searchRecipes() {
    var searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    var searchResults = new Set(); // Use a Set to store unique recipes

    // Define folders to search
    var folders = ['deli', 'salads', 'kitchen', 'juice bar'];

    // Iterate over folders
    folders.forEach(function(folder) {
        fetchRecipes('recipes/' + folder, searchTerm, searchResults);
    });

    // Display search results
    displayResults(searchResults);
}

function fetchRecipes(folderPath, searchTerm, searchResults) {
    // Simulate fetching recipes (replace with actual fetching logic)
    var recipes = [
        { name: 'Recipe 1', category: 'Deli', path: '../recipes/deli/recipe1.html' },
        { name: 'Caesar Salad', category: 'Salads', path: '../recipes/salads/caesar_salad_recipe.html' },
        { name: 'Recipe 3', category: 'Kitchen', path: '../recipes/kitchen/recipe3.html' },
        { name: 'Recipe 4', category: 'Juice Bar', path: '../recipes/juice bar/recipe4.html' }
        // Add more recipes here
    ];

    // Filter recipes based on search term
    var filteredRecipes = recipes.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(searchTerm);
    });

    // Add filtered recipes to search results
    filteredRecipes.forEach(function(recipe) {
        if (!searchResults.has(recipe.name)) { // Check if recipe is not already in search results
            searchResults.add(recipe.name);
            searchResults.add(recipe); // Add recipe object to set
        }
    });
}

function displayResults(results) {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.size === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(function(result) {
            if (typeof result === 'object') { // Check if result is a recipe object
                var link = document.createElement('a');
                link.href = result.path;
                link.textContent = result.name + ' - ' + result.category;
                var paragraph = document.createElement('p');
                paragraph.appendChild(link);
                resultsContainer.appendChild(paragraph);
            }
        });
    }
}
