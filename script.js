document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        '"Peace comes from within. Do not seek it without."',
        '"You, yourself, as much as anybody in the entire universe, deserve your love and affection."',
        '"The mind is everything. What you think you become."',
        '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."'
    ];

    const quoteElement = document.getElementById('quote');
    const changeQuoteBtn = document.getElementById('changeQuoteBtn');

    changeQuoteBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });

    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    const changeFontBtn = document.getElementById('changeFontBtn');

    changeFontBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        quoteElement.style.fontFamily = fonts[randomIndex];
    });

    const colors = ['#ffdddd', '#ddffdd', '#ddddff', '#ffffdd', '#ddffff'];
    const changeBgColorBtn = document.getElementById('changeBgColorBtn');

    changeBgColorBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
    });

    const eventDate = new Date('2024-05-26T00:00:00'); // Set your event date here
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const timeDifference = eventDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Event has started!';
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    const modal = document.getElementById('infoModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
