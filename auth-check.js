// auth-check.js - HANDLES LOGIN REDIRECT

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('anicade_logged_in');
    const currentPage = window.location.pathname.split('/').pop();
    
    // List of pages that don't require login
    const publicPages = ['login.html', 'index.html', 'website.html', 'advertising.html', 
                        'premium.html', 'design.html', 'ai.html', 'agent.html', 
                        'bundles.html', 'contact.html'];
    
    // If trying to access dashboard without login, redirect to login
    if (currentPage === 'dashboard.html' && !isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    // If trying to access any page directly (except login) without login?
    // NO - All pages are public except dashboard
    // User can browse all services without logging in
}

// Logout function
function logout() {
    localStorage.removeItem('anicade_logged_in');
    localStorage.removeItem('anicade_username');
    window.location.href = 'index.html';
}

// Check auth on page load
document.addEventListener('DOMContentLoaded', checkAuth);