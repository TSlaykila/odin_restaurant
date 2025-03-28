export function loadAbout() {
    const div_content = document.getElementById("content");
    div_content.innerHTML = "";
    div_content.className = "tab-content";

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const description = document.createElement("p");
    description.textContent = "The Gastronomy & Latin Caribbean Club is a passionate community of food lovers, celebrating the rich flavors and traditions of Latin and Caribbean cuisine. Our mission is to bring people together through food, culture, and shared experiences.";

    const missionDiv = document.createElement("div");
    missionDiv.className = "about-mission";

    const missionHeading = document.createElement("h2");
    missionHeading.textContent = "Our Mission";

    const missionText = document.createElement("p");
    missionText.textContent = "We strive to educate, inspire, and connect people through culinary traditions, hands-on cooking events, and cultural gatherings. Whether you're a seasoned chef or just discovering new flavors, there's a place for you here!";

    missionDiv.appendChild(missionHeading);
    missionDiv.appendChild(missionText);

    // Append elements to content
    div_content.appendChild(heading);
    div_content.appendChild(description);
    div_content.appendChild(missionDiv);
}
