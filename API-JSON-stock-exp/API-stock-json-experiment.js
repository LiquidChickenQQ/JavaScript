var url = "http://api.open-notify.org/astros.json"; // Change this to your URL



fetch(url)
    .then(function(response) {
        if (response.ok) { // Check if response went through
            response.json().then(function(data) {
                var info = document.getElementById('info');

            });
        } else { // Response wasn't ok. Check dev tools
            console.log("response failed?");
        }
    });