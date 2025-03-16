document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('light');
    document.getElementById('myButton').addEventListener('click', () => {
        const currentBgColor = getComputedStyle(document.body).backgroundColor;
        if (currentBgColor === 'rgb(0, 0, 0)') { // Black in RGB
            LightTheme();
        } else {
            DarkTheme();
        }
    });
});

function DarkTheme() {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    document.getElementById("switch").innerText = 'Light';
}

function LightTheme() {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    document.getElementById("switch").innerText = 'Dark';
}
