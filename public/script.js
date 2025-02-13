document.getElementById('myButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/button-click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'button_clicked' })
        });

        const data = await response.json();
        document.getElementById('responseMessage').textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
});
