// Navbar Dropdown Menu
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Dropdown Menu
    // document.getElementById('wblt').addEventListener('mouseenter', () => {
    //     if (window.location.pathname.endsWith('index.html')) {
    //         if (window.scrollY === 0) { // Ensure the user is at the top of the page
    //             const scrollAmount = window.innerHeight * 0.09; // Calculate 9vh
    //             window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); // Scroll down by 9vh
    //         }
    //     }         
    //     document.getElementById('wbl').style.height = '9vh';
    //     document.getElementById('wbl').style.visibility = 'visible';
    //     document.getElementById('wblt').style.backgroundColor = '#BA181B';
    //     document.getElementById('wblt').style.color = 'white';
    //     document.querySelectorAll(".wbltt").forEach(element => {
    //         element.style.bottom = "0px"; // Change to "0px" if needed
    //         element.style.opacity = "1";
    //     });
    // });
    // document.getElementById('wbl').addEventListener('mouseenter', () => {
    //     document.getElementById('wbl').style.height = '9vh';
    //     document.getElementById('wbl').style.visibility = 'visible';
    //     document.getElementById('wblt').style.backgroundColor = '#BA181B';
    //     document.getElementById('wblt').style.color = 'white';
    //     document.querySelectorAll(".wbltt").forEach(element => {
    //         element.style.bottom = "0px"; // Change to "0px" if needed
    //         element.style.opacity = "1";
    //     });
    // })
    // document.getElementById('wblt').addEventListener('mouseleave', () => {
    //     document.getElementById('wbl').style.height = '0vh';
    //     document.getElementById('wbl').style.visibility = 'hidden';
    //     document.getElementById('wblt').style.backgroundColor = '#F5F3F4';
    //     document.getElementById('wblt').style.color = '#161A1D';
    //     document.querySelectorAll(".wbltt").forEach(element => {
    //         element.style.bottom = "9vh"; // Change to "0px" if needed
    //         element.style.opacity = "0";
    //     });
    // });
    // document.getElementById('wbl').addEventListener('mouseleave', () => {
    //     document.getElementById('wbl').style.height = '0vh';
    //     document.getElementById('wbl').style.visibility = 'hidden';
    //     document.getElementById('wblt').style.backgroundColor = '#F5F3F4';
    //     document.getElementById('wblt').style.color = '#161A1D';
    //     document.querySelectorAll(".wbltt").forEach(element => {
    //         element.style.bottom = "9vh"; // Change to "0px" if needed
    //         element.style.opacity = "0";
    //     });
    // })

    // document.getElementById('ext').addEventListener('mouseenter', () => {
    //     if (window.location.pathname.endsWith('index.html')) {
    //         if (window.scrollY === 0) { // Ensure the user is at the top of the page
    //             const scrollAmount = window.innerHeight * 0.09; // Calculate 9vh
    //             window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); // Scroll down by 9vh
    //         }
    //     }     
    //     document.getElementById('extra').style.height = '9vh';
    //     document.getElementById('extra').style.visibility = 'visible';
    //     document.getElementById('ext').style.backgroundColor = '#BA181B';
    //     document.getElementById('ext').style.color = 'white';
    //     document.querySelectorAll(".extt").forEach(element => {
    //         element.style.bottom = "0px"; // Change to "0px" if needed
    //         element.style.opacity = "1";
    //     });
    // });
    // document.getElementById('extra').addEventListener('mouseenter', () => {
    //     document.getElementById('extra').style.height = '9vh';
    //     document.getElementById('extra').style.visibility = 'visible';
    //     document.getElementById('ext').style.backgroundColor = '#BA181B';
    //     document.getElementById('ext').style.color = 'white';
    //     document.querySelectorAll(".extt").forEach(element => {
    //         element.style.bottom = "0px"; // Change to "0px" if needed
    //         element.style.opacity = "1";
    //     });
    // })
    document.getElementById('alt').addEventListener('mouseenter', () => {
        document.getElementById('alt').setAttribute("src","./public/pictures/alt-signature-transparent-loop-once.gif")
        document.getElementById('alt').classList.add('invert')
    });
    document.getElementById('alt').addEventListener('mouseleave', () => {
        document.getElementById('alt').setAttribute("src","./public/pictures/alt-logo-600.png")
        document.getElementById('alt').classList.remove('invert')
    })
    window.addEventListener("scroll", () => {
        var navbar = document.getElementById('navbar');
        var navbarTwo = document.getElementById('navbar-two');
        if (window.location.pathname.endsWith('index.html')) {
            
            const triggerPosition = window.innerHeight - (window.innerHeight * 0.08);
            // console.log(window.scrollY, triggerPosition)
            // if (window.scrollY > triggerPosition) {
            //     navbarTwo.classList.add("visible");
            //     navbarTwo.classList.remove("invisible");
            // } else {
            //     navbarTwo.classList.add("invisible");
            //     navbarTwo.classList.remove("visible");
            // }
        }
    });
    
});

function redirect(url) {
    location.href = url;
};