document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            let theme = 'dark';
            if (body.classList.contains('light-mode')) {
                theme = 'light';
            }
            localStorage.setItem('theme', theme);
        });
    }
    // The news ticker is handled by ticker-data.js for cross-browser local file support.
});
