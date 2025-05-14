document.addEventListener('DOMContentLoaded', () => {
    // Function to trigger the jumpscare with video duplication, image placement, and sound
    function triggerJumpscare() {
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
                // Random scale factor (between 0.5 and 1.5)
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

            // Optional: Remove image after 3 seconds (to prevent clutter)
            setTimeout(() => {
                document.body.removeChild(img);
            }, 3000);
        }

        // Start placing images randomly every 0.1 seconds
        setInterval(placeImage, 100);  // Place an image every 0.1 second
    }

    // Trigger the jumpscare after 5 clicks (if needed, adjust click count)
    let clickCount = 0;
    document.getElementById('prankButton').addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            triggerJumpscare();
        }
    });
});
