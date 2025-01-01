const cards = document.querySelectorAll('.card');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        let currentIndex = 0;

        function updateCards() {
            cards.forEach((card, index) => {
                card.classList.toggle('active', index === currentIndex);
            });
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === cards.length - 1;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCards();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateCards();
            }
        });

        updateCards();

