document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Get input URL value
        let url = document.getElementById('url-input').value.trim();
        
        // Validate URL
        if (!isValidUrl(url)) {
            alert('Please enter a valid URL.');
            return;
        }

        try {
            // Send URL to backend (replace with your backend URL)
            let response = await fetch('http://localhost:5000/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Process response from backend
            let data = await response.json();
            document.getElementById('summary').textContent = data.summary; // Display summary
            document.getElementById('response-textarea').value = data.url; // Update textarea

        } catch (error) {
            console.error('Error:', error);
            alert('Error processing URL. Please try again.');
        }
    });

    // Function to validate URL format
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
});