document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('YOUR_BACKEND_URL/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('summary').innerText = result.summary;
    document.getElementById('result').style.display = 'block';
});
