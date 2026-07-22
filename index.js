window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Photographer", "UW Husky!!"];
    var random;
    var count = 0;
    updateRole();

    function updateRole() {
        roles.innerText = "";
        count = 0;
        random = Math.floor(Math.random() * myroles.length);
        typeEffect();
    }

    function typeEffect() {
        if (count < myroles[random].length) {
            roles.innerText = roles.innerHTML + myroles[random].charAt(count);
            count++;
            setTimeout(typeEffect, 100);
        }
        if (random == 6) {
            roles.style.color = "#4b2e83"
        } else {
            roles.style.color = "#ffffff"
        }
    }

    // Trigger the update every 10 seconds
    setInterval(updateRole, 10000);
};