
export function loadMenu() {
    const div_content = document.getElementById("content");

    if (!div_content) {
        console.error("Error: #content div not found.");
        return;
    }

    div_content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const description = document.createElement("p");
    description.textContent = "Explore our delicious Latin and Caribbean dishes! Our menu features a variety of traditional flavors, each crafted with authentic ingredients.";

    const menuDiv = document.createElement("div");

    const menuItems = [
        { name: "Mofongo", description: "A delicious Puerto Rican dish made with fried green plantains, garlic, and pork cracklings." },
        { name: "Feijoada", description: "A traditional Brazilian black bean stew with pork and beef, served with rice." },
        { name: "Ceviche", description: "Fresh fish marinated in citrus juices, mixed with onions, cilantro, and peppers." }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDesc);
        menuDiv.appendChild(itemDiv);
    });

    div_content.appendChild(heading);
    div_content.appendChild(description);
    div_content.appendChild(menuDiv);
}
