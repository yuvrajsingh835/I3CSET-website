const footerHTML = `
<footer>
    <div class="footer-grid">
        <div class="footer-section">
            <h4>Conference</h4>
            <ul>
                <li><a href="prevconf.html">Previous Conferences</a></li>
                <li><a href="plenary-speakers.html">Speakers</a></li>
                <li><a href="sponsors.html">Sponsors</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Authors</h4>
            <ul>
                <li><a href="paper-sub-guidelines.html">Submission Guidelines</a></li>
                <li><a href="registration.html">Registration</a></li>
                <li><a href="review-process.html">Review Process</a></li>
                <li><a href="paper-sub-guidelines.html#support">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Connect</h4>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <a href="https://www.instagram.com/i3cset_gcet/" target="_blank"><i
                        class="fab fa-2x fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/galgotias-college-of-engineering-and-technology-greater-noida/"
                    target="_blank"><i class="fab fa-2x fa-linkedin"></i></a>
                <a href="mailto:i3cset2026@galgotiacollege.edu"><i class="fa fa-2x fa-envelope"></i></a>
            </div>
            <p style="margin-top: 2rem; color: var(--text-muted); font-size: 0.8rem;">
                &copy; 2026 I3CSET Conference. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>`;

function injectFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
} else {
    injectFooter();
}
