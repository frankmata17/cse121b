let templeList = [];
let templesElement;

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("temple-card"); // Add a class for styling

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        img.width = 200;
        img.height = 150;

        card.appendChild(h3);
        card.appendChild(img);

        templesElement.appendChild(card);
    });
};

const createTemplesElement = () => {
    const newElement = document.createElement("div");
    newElement.id = "templesElement";
    document.body.appendChild(newElement);
    return newElement;
};

const getTemples = async () => {
    templesElement = document.getElementById("templesElement") || createTemplesElement();

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

const reset = () => {
    templesElement = document.getElementById("templesElement") || createTemplesElement();
    templesElement.innerHTML = "";
};

const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));
getTemples();
