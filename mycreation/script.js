document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");

    function toggleBtn() {
        btn.classList.toggle("active");
        light.classList.toggle("on");

        if (light.classList.contains("on")) {
            light.textContent = "Light is On";
        } else {
            light.textContent = "Light is Off";
        }
    }

    btn.addEventListener("click", toggleBtn);
});
