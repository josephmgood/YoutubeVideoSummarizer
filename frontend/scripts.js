document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('YOUR_BACKEND_URL/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        
    
    document.getElementById('summary').innerText = result.summary;
    document.getElementById('result').style.display = 'block';
    } catch (error) {
        console.log("Error: ", error);
    }
});
