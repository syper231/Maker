// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

// dashboard menu dropdown plus iframe options
function toggleDashboardDropdown() {
    const dashboardDropdown = document.querySelector('.dashboard-dropdown');
    dashboardDropdown.classList.toggle('active');
}

// Show the selected dashboard
function showDashboard(dashboardId, dashboardTitle) {
    const iframe = document.getElementById('dashboard-iframe');

    // Update iframe source based on the selected dashboard
    if (dashboardId === 'dashboard1') {
        iframe.src = "https://app.powerbi.com/view?r=eyJrIjoiYjMxZGE3ZjItODRlZC00Yzk0LThkN2EtMjc2YTg0ZWE1YzY1IiwidCI6ImNkMzE5NjcxLTUyZTctNGE2OC1hZmE5LWZjZjhmODlmMDllYSIsImMiOjN9";
        iframe.title = dashboardTitle;
    } else if (dashboardId === 'dashboard2') {
        iframe.src = "https://app.powerbi.com/view?r=eyJrIjoiYzVkYjU3NjMtZTg2Yi00ZTRjLTliOGEtZDExNmJmMjJiZjc5IiwidCI6ImNkMzE5NjcxLTUyZTctNGE2OC1hZmE5LWZjZjhmODlmMDllYSIsImMiOjN9";
        iframe.title = dashboardTitle;
    }

    // Close the dropdown menu
    const dashboardDropdown = document.querySelector('.dashboard-dropdown');
    dashboardDropdown.classList.remove('active');
}

// Sketchfab menu dropdown plus iframe options
function toggleMainMenuDropdown() {
    const mainMenuDropdown = document.querySelector('.main_menu-dropdown');
    mainMenuDropdown.classList.toggle('active');
}

function toggleVisualDropdown() {
    const visualDropdown = document.querySelector('.visual-dropdown');
    visualDropdown.classList.toggle('active');
}

function showVisual(visualId, visualTitle) {
    const iframe = document.querySelector('.sketchfab-embed-wrapper iframe');
    const visuals = {
        'visual1': "https://sketchfab.com/models/d29b7727024d4e12a144ed6a9c4e6762/embed",
        'visual2': "https://sketchfab.com/models/c2aa8b60b31a4aafbd87d937ef26b3c6/embed",
        'visual3': "https://sketchfab.com/models/217cc0f2de124ae8a6e87db77ed79b12/embed",
        'visual4': "https://sketchfab.com/models/19bf802148df45acafce846155242350/embed",
        'visual5': "https://sketchfab.com/models/fa96ca9105764de3a52d1ddd87c68a77/embed",
        'visual6': "https://sketchfab.com/models/9c3170fc8c2a49d4af3d89819d709455/embed",
        'visual7': "https://sketchfab.com/models/68128062161044dbba1eda0eda91d7e4/embed"
    };
    iframe.src = visuals[visualId];
    iframe.title = visualTitle;
    const visualDropdown = document.querySelector('.visual-dropdown');
    visualDropdown.classList.remove('active');
}

});