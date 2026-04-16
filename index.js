window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Photographer", "UW Husky!!"];
    var random;
    var count = 0;
    updateRole();

    function updateRole() {
        roles.innerText = "";
        count = 0;
        random = 6;//Math.floor(Math.random() * myroles.length);
        typeEffect();
    }

    function typeEffect() {
        if (count < myroles[random].length) {
            roles.innerText = roles.innerHTML + myroles[random].charAt(count);
            count++;
            setTimeout(typeEffect, 100);
        }
        if (random == 6) {
            roles.style.color = "#c5b4e3"
        } else {
            roles.style.color = "#ffffff"
        }
    }

    // Trigger the update every 10 seconds
    setInterval(updateRole, 10000);
};