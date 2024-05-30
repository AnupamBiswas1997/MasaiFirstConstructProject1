document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("NavBarButton1");
    const dropdown = document.getElementById("signInDropdown");

    signInButton.addEventListener("mouseenter", function () {
        dropdown.style.display = "block";
    });

    signInButton.addEventListener("mouseleave", function () {
        setTimeout(function () {
            if (!dropdown.matches(':hover')) {
                dropdown.style.display = "none";
            }
        }, 200);
    });

    dropdown.addEventListener("mouseenter", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        dropdown.style.display = "none";
    });
});
