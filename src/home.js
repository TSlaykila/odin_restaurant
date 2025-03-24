import logoSrc from './logo.jpg';
import foodImg1 from './food_img_1.jpg';
import foodImg2 from './food_img_2.jpg.jpg';
import foodImg3 from './food_image_3.jpeg';

export function loadHome() {
    const div_content = document.getElementById("content");
    div_content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Gastronomy Latin & Caribbean Club";

    const description = document.createElement("p");
    description.textContent = "Welcome to the Gastronomy & Latin Caribbean Club! We’re a community of food lovers and culture enthusiasts who come together to celebrate the rich flavors, traditions, and history of Latin Caribbean cuisine.";

    const logo = document.createElement("img");
    logo.src = logoSrc;  // ✅ Use imported path
    logo.alt = "Club Logo";

    const infoDiv = document.createElement("div");
    const infoText = [
        "The Gastronomy & Latin Caribbean Club is dedicated to celebrating the rich culinary and cultural traditions of Latin America and the Caribbean...",
        "We believe that food has the power to bring people together, creating bonds that transcend borders and backgrounds...",
        "Beyond cooking and tasting, we aim to educate and inspire..."
    ];

    infoText.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        infoDiv.appendChild(p);
    });

    const subheading = document.createElement("h2");
    subheading.textContent = "Some Dishes that we made before";

    const imagesDiv = document.createElement("div");
    const images = [
        { src: foodImg1, alt: "Arroz con habichuelas y pernil" },
        { src: foodImg2, alt: "Sopa Paraguaya" },
        { src: foodImg3, alt: "Arepas Rellenas Venezolanas" }
    ];

    images.forEach(img => {
        const newimg = document.createElement("img");
        newimg.src = img.src;  // ✅ Use imported paths
        newimg.alt = img.alt;
        imagesDiv.appendChild(newimg);
    });

    // Append elements to content
    div_content.appendChild(heading);
    div_content.appendChild(description);
    div_content.appendChild(logo);
    div_content.appendChild(infoDiv);
    div_content.appendChild(subheading);
    div_content.appendChild(imagesDiv);
}
