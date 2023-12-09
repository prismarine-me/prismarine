document.addEventListener('DOMContentLoaded', function() {
    // Fetch quotes from a text file
    fetch('../assets/content/misc/motd.txt')
        .then(response => response.text())
        .then(data => {
            // Log the data to the console
            console.log('Fetched data:', data);

            // Split quotes by new line
            const quotes = data.split('\n');

            // Check if quotes are non-empty
            if (quotes.length > 0) {
                // Pick a random quote
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                // Display the quote in the 'motd' paragraph
                document.getElementById('motd').textContent = randomQuote;
            } else {
                console.error('No quotes found in the file.');
            }
        })
        .catch(error => console.error('Error fetching quotes:', error));
});