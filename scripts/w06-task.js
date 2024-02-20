document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const location = document.getElementById('location').value;
    
    
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    
 
    service.textSearch({
        query: `events in ${location}`
    }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            displayEvents(results); 
        } else {
            console.error('Error fetching events:', status);
        }
    });
});

function displayEvents(events) {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = ''; 
    
    events.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.textContent = event.name; 
        
        eventsList.appendChild(eventItem);
    });
}
