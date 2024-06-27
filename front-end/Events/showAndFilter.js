
 // Event handler for the filter form submission
 document.getElementById('filterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
 
    const title = document.getElementById('filterTitle').value;
    const startDate = document.getElementById('filterStartDate').value;
    const endDate = document.getElementById('filterEndDate').value;

    // Fetch and filter events based on input criteria
    await fetchEvents({ title, startDate, endDate });
});

// Function to fetch events from the API and optionally filter them
async function fetchEvents(filter = {}) {
    try {
        // Construct the query parameters based on the provided filter
        const params = new URLSearchParams();
    

        if (filter.title) {
            params.append('title', filter.title);
        }
        if (filter.startDate) {
            params.append('startDate', filter.startDate);
        }
        if (filter.endDate) {
            params.append('endDate', filter.endDate);
        }    


        // Create the full URL with the query parameters
        const queryString = params.toString();
    
        const url = `http://127.0.0.1:3005/api/events${queryString ? '?' + queryString : ''}`;

        console.log(url);
        // Fetch the filtered events from the API
        const response = await fetch(url ,{
            credentials: 'include'
        });
    
        if (!response.ok) {
            const err =  await response.json()
            alert(err.message)
            return new Error(err.message);
        }

        const events = await response.json();

        // Check if the API returned a list of events
        if (Array.isArray(events)) {
            const eventsList = document.getElementById('eventsList');
            eventsList.innerHTML = ''; // Clear the list before adding new items

            // Iterate through each event and create a list item
            events.forEach(event => {
                const listItem = document.createElement('li');

                // Create and populate the content for each event
                const titleDiv = document.createElement('div');
                titleDiv.className = 'event-title';
                // titleDiv.textContent = event.title;

                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'event-details';
                detailsDiv.innerHTML = `
                    <p><strong>Id:</strong> ${event.id}</p>
                    <p><strong>Title:</strong> ${event.title}</p>
                    <p><strong>Description:</strong> ${event.description}</p>
                    <p><strong>Start Date:</strong> ${event.startDate}</p>
                    <p><strong>End Date:</strong> ${event.endDate}</p>
                    <p><strong>Participants:</strong> ${event.total_no_of_participants}</p>
                `;

                // Append the title and details to the list item
                listItem.appendChild(titleDiv);
                listItem.appendChild(detailsDiv);

                // Add the list item to the events list
                eventsList.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}
