const navHTML = `
<div class="nav-container px-4">
    <a href="index.html" style="display: flex; align-items: center; text-decoration: none; background: white; padding: 6px 14px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);">
        <img src="images/gcet_logo.png" alt="GCET Logo" style="height: 40px; width: auto; display: block;">
    </a>
    <ul class="nav-links">
        <li><a href="index.html" id="nav-home">Home</a></li>
        <li><a href="plenary-speakers.html" id="nav-speakers">Speakers</a></li>
        <li><a href="technical-program.html" id="nav-program">Program</a></li>
        <li><a href="paper-sub-guidelines.html" id="nav-submission">Submission</a></li>
        <li><a href="authors.html" id="nav-authors">Authors</a></li>
        <li><a href="registration.html" id="nav-registration">Registration</a></li>
        <li><a href="committe.html" id="nav-committee">Committee</a></li>
        <li><a href="sponsors.html" id="nav-sponsors">Sponsors</a></li>
        <li><a href="prevconf.html" id="nav-prev">History</a></li>
    </ul>
    <button id="theme-toggle" class="theme-toggle" title="Toggle Light/Dark Mode">
        <i class="fa fa-moon dark-mode-icon"></i>
        <i class="fa fa-sun light-mode-icon"></i>
    </button>
</div>`;

function injectNav() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
        
        // Highlight active link based on current filename
        const currentPath = window.location.pathname;
        const page = currentPath.split("/").pop() || "index.html";
        
        const navMap = {
            "index.html": "nav-home",
            "plenary-speakers.html": "nav-speakers",
            "technical-program.html": "nav-program",
            "paper-sub-guidelines.html": "nav-submission",
            "authors.html": "nav-authors",
            "registration.html": "nav-registration",
            "committe.html": "nav-committee",
            "sponsors.html": "nav-sponsors",
            "prevconf.html": "nav-prev"
        };
        
        const activeId = navMap[page];
        if (activeId) {
            const activeLink = document.getElementById(activeId);
            if (activeLink) activeLink.classList.add('active');
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
} else {
    injectNav();
}
