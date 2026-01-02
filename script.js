document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation & Header Logic ---
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const header = document.getElementById('header');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            } else {
                header.style.padding = '25px 0';
                header.style.boxShadow = 'none';
            }
        }
    });

    // --- Fundraising Progress Logic ---
    const container = document.getElementById('progress-container');
    const fill = document.getElementById('dynamic-fill');
    
    if (container && fill) {
        const goal = parseFloat(container.getAttribute('data-goal'));
        const raised = parseFloat(container.getAttribute('data-raised'));
        
        // Calculate percentage (Max 100%)
        let percentage = Math.min((raised / goal) * 100, 100);

        // Update UI
        fill.style.width = percentage + '%';
        
        // Use optional chaining or check existence for text elements
        const raisedEl = document.getElementById('raised-text');
        const goalEl = document.getElementById('goal-text');
        const percentEl = document.getElementById('percentage-text');

        if (raisedEl) raisedEl.innerText = raised.toLocaleString('bn-BD');
        if (goalEl) goalEl.innerText = goal.toLocaleString('bn-BD');
        if (percentEl) percentEl.innerText = percentage.toFixed(1);
    }
});