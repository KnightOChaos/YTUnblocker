javascript:(function() {
    var html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Google Classroom</title>
            <style>
                body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #111;
            color: #fff;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #007BFF; /* Blue text color */
        }

        p {
            color: #ddd;
        }

        #inputContainer {
            margin-top: 20px;
        }

        #youtubeLink {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            width: 300px;
            background-color: #333;
            color: #fff;
        }

        #embedButton {
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }

        #embedButton:hover {
            background-color: #0056b3;
        }

        #videoContainer {
            margin-top: 20px;
        }

        #historyContainer {
            margin-top: 20px;
        }

        .historyItem {
            margin-bottom: 10px;
            padding: 5px;
            background-color: #333;
            border: 1px solid #007BFF;
            border-radius: 4px;
            cursor: pointer;
        }

        .historyItem:hover {
            background-color: #007BFF;
        }

        #githubLink {
            margin-top: 30px;
            color: #007BFF;
            text-decoration: none;
        }
            </style>
        </head>
        <body>
            <h1>YouTube Unblocker</h1>

            <div id="inputContainer">
                <p>Enter a YouTube link:</p>
                <input type="text" id="youtubeLink" placeholder="Enter YouTube Link">
                <br>
                <button id="embedButton" onclick="embedVideo()">Unblock Video</button>
            </div>

            <div id="videoContainer">
                <!-- Embedded YouTube video will appear here -->
            </div>

            <div id="historyContainer">
                <h2>History</h2>
                <div id="historyItems">
                    <!-- Previously embedded videos will appear here -->
                </div>
            </div>

            <a id="githubLink" href="https://github.com/KnightOChaos?tab=repositories" target="_blank">My GitHub</a>

            <script>
                var currentIframe = null;

                function embedVideo() {
                    var youtubeLink = document.getElementById("youtubeLink").value;
                    var videoContainer = document.getElementById("videoContainer");
                    var historyContainer = document.getElementById("historyItems");

                    // ... (paste your JavaScript code here) ...

                }

                function createIframe(src) {
                    var iframe = document.createElement("iframe");
                    iframe.src = src;
                    iframe.width = "560"; // You can adjust the width and height as needed
                    iframe.height = "315";
                    iframe.allowfullscreen = true;
                    iframe.frameborder = "0";
                    return iframe;
                }
            </script>
        </body>
        </html>
    `;

    var page = window.open('about:blank');
    page.document.open();
    page.document.write(html);
    page.document.close();
})();
