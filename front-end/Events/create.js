

document.addEventListener('DOMContentLoaded', () => {
   
  
    const eventForm = document.getElementById('eventForm');
    const eventsList = document.getElementById('eventsList');

   
    // Handle form submission for creating/updating events
    eventForm.addEventListener('submit', async (e) => {
       
        e.preventDefault();
       
        
        // const eventId = document.getElementById('eventID').value;
        const title = document.getElementById('eventName').value;
        const description = document.getElementById('eventDescription').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const  total_no_of_participants= document.getElementById('participation').value;
      
   
        const eventData = {
            title , description , startDate , endDate,total_no_of_participants
        };
       
        try{     
            // const token = localStorage.getItem('authToken');
            // alert(token)
               
            const response=    await fetch("http://127.0.0.1:3005/api/events/create/", 
            {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventData),
                     credentials: 'include'
                });
 
                const res  = await response.json()
   
                // Check if the response status is not OK
                if(!response.ok){
                
                    alert(res.message)
                    return new Error(res.message)
                }
           
                window.location.href = "http://127.0.0.1:5500/front-end/panel.html";
                
               alert("Event created ")

   
        } catch (error) {
            console.error('Error saving event:', error);
        }
    

});
})