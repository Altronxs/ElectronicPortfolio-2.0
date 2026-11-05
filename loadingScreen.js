// Listen for the complete page to finish loading all assets
window.addEventListener('load', function() {
    const loader = document.getElementById('loading-screen');
    const spinner = document.getElementById('spinner');
    loader.classList.add('loader-hidden');
    spinner.classList.add('!h-[60%]');
    document.getElementById('heroOne').classList.add('!translate-y-[-20vw]')
    document.getElementById('heroTwo').classList.add('!translate-y-[-10vw]')
});