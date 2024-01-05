var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
        document.getElementById('Message').innerText = ("Thank You "+username+" for your order we will contact to you soon");