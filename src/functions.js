const cc = document.getElementById("content-container");
const displayHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");
    cc.appendChild(header);

    const h1 = document.createElement("h1");
    h1.textContent = "Food Shoppe";
    header.appendChild(h1);

    const ul = header.appendChild(Object.assign(document.createElement("ul")));

    const li1 = document.createElement("li");
    li1.innerHTML = '<a href="#">home</a>';
    ul.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerHTML = '<a href="#">menu</a>';
    ul.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerHTML = '<a href="#">contact</a>';
    ul.appendChild(li3);
};

const displayHome = () => {
    const mainType = document.createElement("div");
    mainType.classList.add("main-type");
    cc.appendChild(mainType);

    const t1 = document.createElement("h1");
    t1.textContent = "WE";
    const t2 = document.createElement("h1");
    t2.textContent = "SELL";
    const t3 = document.createElement("h1");
    t3.textContent = "FOOD.";
    mainType.appendChild(t1);
    mainType.appendChild(t2);
    mainType.appendChild(t3);
};

const displayMenu = () => {
    const menuContainer = cc.appendChild(
        Object.assign(document.createElement("div"))
    );
    
    for (let j = 0; j < 3; j++) {
        const section = document.createElement("div");
        section.classList.add("section");
        menuContainer.appendChild(section);
        section.appendChild(
            Object.assign(document.createElement("h3"), {
                textContent: "ap·pe·tiz·er",
            })
        );
        for (let i = 0; i < 3; i++) {
            const listing = section.appendChild(
                Object.assign(document.createElement("div"))
            );
            listing.setAttribute("class", "food-listing");

            const item = listing.appendChild(
                Object.assign(document.createElement("p"))
            );
            item.innerHTML = `<span class="food-item">Food. </span><span class="food-desc">This food is filled with food.</span>`;
            const sep = listing.appendChild(
                Object.assign(document.createElement("div"))
            );
            sep.setAttribute("class", "separator");
            const price = listing.appendChild(
                Object.assign(document.createElement("p"), {
                    textContent: "18",
                })
            );
        }
    }
    cc.querySelectorAll(".section > h3")[1].textContent = "en·trée";
    cc.querySelectorAll(".section > h3")[2].textContent = "des·sert";
};

const displayContact = () => {
    const contact = cc.appendChild(
        Object.assign(document.createElement("div"))
    );
    contact.classList.add("contact-container");
    contact.innerHTML = `
                    <h3>290 Bremner Blvd</h3>
                    <h3>Toronto, ON M5V 3L9</h3>
                    <h3>647-753-9254</h3>
                    <a href="#"><h3>127.0.0.1:5500</h3></a>`;
};

const displayFooter = () => {
    const copy = cc.appendChild(Object.assign(document.createElement("p")));
    copy.textContent = "2023.";
    copy.classList.add("copyright");
};
export {
    displayHome,
    displayHeader,
    displayMenu,
    displayContact,
    displayFooter,
};
