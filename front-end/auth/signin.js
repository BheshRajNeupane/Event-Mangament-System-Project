


document.addEventListener('DOMContentLoaded', () => {
    // Select the form and message div
    const form = document.getElementById('signupForm')

    // Event listener for form submission
    form.addEventListener('submit', async (event) => {

        event.preventDefault();
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        const data = { email, password };
      
    
        try {
            // Send a POST request using Fetch API
            const response = await fetch("http://127.0.0.1:3005/api/events/users/signin/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
         
          
            const res  = await response.json()
  
            // Check if the response status is not OK
            if(!response.ok){
            
                alert(res.message)
                return new Error(res.message)
            }
           
            window.location.href = "http://127.0.0.1:5500/front-end/panel.html"

            // Parse the JSON response
            // const responseData =  await response.json();
            // console.log(responseData);
            // alert(responseData);    

        } catch (error) {
    
            console.error('Fetch error:', error);

        }
    });
});
