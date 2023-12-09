document.addEventListener('DOMContentLoaded', function() {
    fetch('../assets/content/misc/motd.txt')
        .then(response => response.text())
        .then(data => {
            console.log('Fetched data:', data);

            const quotes = data.split('\n');

            if (quotes.length > 0) {
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                document.getElementById('motd').textContent = randomQuote;
            } else {
                console.error('No quotes found in the file.');
            }
        })
        .catch(error => console.error('Error fetching quotes:', error));
});
