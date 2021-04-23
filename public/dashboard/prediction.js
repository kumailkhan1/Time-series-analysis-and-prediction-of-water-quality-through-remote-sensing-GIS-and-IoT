

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('predictBtn').addEventListener('click', (event) => {
        document.getElementById("headline").innerText = "Form is working!";
        event.preventDefault();
    });
});
