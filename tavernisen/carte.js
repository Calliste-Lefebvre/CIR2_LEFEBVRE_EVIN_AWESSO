let products = {
    data: [

    {
        productName: "Anosteke",
        category: "beer",
        price: "6",
        image: "img/carte/beer/anosteke.png",
    },

    {
        productName: "Cuvée des Trolls",
        category: "beer",
        price: "6",
        image:"img/carte/beer/cuvee.png",
    },

    {
        productName: "Duvel",
        category: "beer",
        price: "6",
        image: "img/carte/beer/duvel.png",
    },

    {
        productName: "Rince Cochon Blonde",
        category: "beer",
        price: "6",
        image: "img/carte/beer/cochonB.png",
    },

    {
        productName: "Rince Cochon Rouge",
        category: "beer",
        price: "6",
        image: "img/carte/beer/cochonR.png",
    },

    {
        productName: "Jack Daniel's Old No. 7",
        category: "whisky",
        price: "9",
        image: "img/carte/whisky/jackD.png",
    },

    {
        productName: "Ballantine's Finest",
        category: "whisky",
        price: "7",
        image: "img/carte/whisky/ball.png",
    },

    {
        productName: "Coca Cola",
        category: "soft",
        price: "4",
        image: "img/carte/soft/coca.png",
    },

    {
        productName: "Coca Cola Zero",
        category: "soft",
        price: "4",
        image: "img/carte/soft/cocaZ.png",
    },

    {
        productName: "Fanta",
        category: "soft",
        price: "4",
        image: "img/carte/soft/fanta.png",
    },

    {
        productName: "Oasis",
        category: "soft",
        price: "4",
        image: "img/carte/soft/oasis.png",
    },

    {
        productName: "Chips Lay's",
        category: "snack",
        price: "4",
        image: "img/carte/snack/chips.png",
    },

    {
        productName: "Saucisson du jour",
        category: "snack",
        price: "4",
        image: "img/carte/snack/saucisson.png",
    },

    ],
};
    
for (let i of products.data) {
    //Creation de la carte
    let card = document.createElement("div");
    //Categorie de la carte et son etat (hide)
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Container
    let container = document.createElement("div");
    container.classList.add("container");
    //Nom du produit
    let name = document.createElement("h5");
    name.classList.add("products-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //Prix
    let price = document.createElement("h6");
    price.innerText = i.price + "€";
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//Paramete par le bouton
function filterProduct(value) {
    //class code bouton
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //Selectionner toutes les cartes
    let elements = document.querySelectorAll(".card");
    //Boucle entre tout les elements
    elements.forEach(element => {
        //Montre toutes les cartes lorsqu'on appuie sur "Tout"
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Verification des class
            if (element.classList.contains(value)) {
                //Affiche les elements de cette class
                element.classList.remove("hide");
            } else {
                //Cacher les autres elements
                element.classList.add("hide");
            }
        }
    });
};

/*
//bouton de recherche
document.getElementById("search").addEventListener("click", () => {
    //Initialisation
    let searchInput = document.getElementById("search-input").value.toUpperCase;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //Boucle entre les elements
    elements.forEach((element, index) => {
        //Verification de l'input (recherche)
        if (element.innerText.includes(searchInput)) {
            //Affichage tri des cartes
            cards[index].classList.remove("hide");
        } else {
            //Cacher les autres
            cards[index].classList.add("hide");
        }
    });
});
*/

//Initiallement les produits sont affichés
window.onload = () => {
    filterProduct("all");
};