document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const location = document.getElementById('location').value;
    
    // Initialize the Google Places Service
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    
    // Search for places based on the location input
    service.textSearch({
        query: `events in ${location}`
    }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            displayEvents(results); // Display events on the page
        } else {
            console.error('Error fetching events:', status);
        }
    });
});

function displayEvents(events) {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = ''; // Clear previous search results
    
    events.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.textContent = event.name; // Assuming event object has a 'name' property
        
        eventsList.appendChild(eventItem);
    });
}
