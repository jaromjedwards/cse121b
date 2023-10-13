// Declare global variables
const templesElement = document.getElementById('temples');
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
    // Clear the displayed list of temples
    reset();

    temples.forEach(temple => {
        // Create an HTML <article> element
        const articleElement = document.createElement('article');

        // Create an HTML <h3> element and add the temple's templeName property
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Create an HTML <img> element
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement
        templesElement.appendChild(articleElement);
    });
}

// Function: getTemples()
const getTemples = async () => {
    try {
        // Fetch temple data from an API (replace 'apiUrl' with the actual URL)
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        const templeData = await response.json();

        // Assign the fetched data to the templeList global variable
        templeList = templeData; // Reassigning is allowed since templeList is declared with "let"

        // Call displayTemples to display the fetched data
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
}


// Function: reset()
const reset = () => {
    // Clear the displayed list of temples by removing all <article> elements
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
}

// Function: sortBy()
const sortBy = (temples) => {
    // Clear the displayed list of temples
    reset();

    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

// Event Listener: sortBy Element change
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});

// Call getTemples to initially fetch and display temple data
getTemples();
