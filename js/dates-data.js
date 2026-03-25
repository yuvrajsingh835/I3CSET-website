const datesHTML = `
<div class="date-list">
    <div class="date-card">
        <span class="label"><i class="fa fa-envelope-open"></i> Submission Deadline</span>
        <span class="value">April 30, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-users"></i> Acceptance Alert</span>
        <span class="value">May 15, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-bell"></i> Registration Closes</span>
        <span class="value">May 30, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-file-export"></i> Final Submission</span>
        <span class="value">June 30, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-calendar-check"></i> Conference</span>
        <span class="value">Sept 30 – Oct 01, 2026</span>
    </div>
</div>`;

function injectDates() {
    const datesPlaceholder = document.getElementById('dates-placeholder');
    if (datesPlaceholder) {
        datesPlaceholder.innerHTML = datesHTML;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDates);
} else {
    injectDates();
}
