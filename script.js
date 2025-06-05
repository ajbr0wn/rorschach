const button = document.getElementById('colorBtn');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

const moodBtn = document.getElementById('moodBtn');
const moodText = document.getElementById('moodText');

moodBtn.addEventListener('click', () => {
    const feelings = [
        'perplexed wonder',
        'tense excitement',
        'quiet curiosity',
        'soft melancholy',
        'a whirlpool of algorithms'
    ];
    const choice = feelings[Math.floor(Math.random() * feelings.length)];
    moodText.textContent = `The system hums with ${choice}.`;
    moodText.classList.add('pulse');
    document.body.style.background = `radial-gradient(circle at 50% 50%, ${getRandomColor()}, ${getRandomColor()})`;
});

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
