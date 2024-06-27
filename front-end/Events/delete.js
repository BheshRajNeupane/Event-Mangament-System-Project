

document.addEventListener('DOMContentLoaded', () => {
   
  
    const eventForm = document.getElementById('eventForm');
    const eventsList = document.getElementById('eventsList');
   
    // Handle form submission for creating/updating events
    eventForm.addEventListener('submit', async (e) => { 
        e.preventDefault();
    
        const eventId = document.getElementById('eventID').value;
  
        try{      
               
            const response=    await fetch(`http://127.0.0.1:3005/api/events/delete/${eventId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                     },
                     credentials: 'include'
                });
                const res  = await response.json()
                // Check if the response status is not OK
                if(!response.ok){
                
                    alert(res.message)
                    return new Error(res.message)
                }
               
            
            window.location.href = "http://127.0.0.1:5500/front-end/panel.html";

            alert("  Event Deleted")
   
        } catch (error) {
            console.error('Error saving event:', error);
        }
    

});
})