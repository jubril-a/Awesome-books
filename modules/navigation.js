export function navigate(event) {
    const sections = document.querySelectorAll("section");
    let id = event.target.href.split("#")[1];
    let currentSection;

    for (let section of sections) {
        if (section.id == id) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }

    }
}