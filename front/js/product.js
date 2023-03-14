var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
let article = " ";
 

const colorselection = document. querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");


// Retrieve articles from the API
function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
        return res.json();
    })

    // Distribute API data in the DOM
    .then(async function (resultatAPI) {
        article = await resultatAPI;
        console.table(article);
        if (article){
            getPost(article);
        }
    })
    .catch((error) => {
        console.log("API request error");
    })
} 
    
function getPost(article){
  // Insert the picture
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;


  // Modification of the "h1" title
    let productName = document.getElementById('title');
    productName.innerHTML = article.name;

    // Modify the price
    let productPrice = document.getElementById('price');
    productPrice.innerHTML = article.price;

   // Modification of the description
    let productDescription = document.getElementById('description');
    productDescription.innerHTML = article.description;

  // Insert color options
    for (let colors of article.colors){
        console.table(colors);
        let productColors = document.createElement("option");
        document.querySelector("#colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }
    addToCart(article);
    
}
function set_background() {
    // now, get all the p elements in the document
    const paragraphs = document.getElementsByTagName("p");
  
    // get the second paragraph from the list
    const secondParagraph = paragraphs[1];
  
    // set the inline style
    secondParagraph.style.background = "red";
  }
  
//Cart management for product
function addToCart(article) {
    const btn_envoyerPanier = document.querySelector("#addToCart");
    

    //Listen to the basket with 2 conditions non-zero color and quantity between 1 and 100
    btn_envoyerPanier.addEventListener("click", (event)=>{
        if (quantityPicked.value > 0 && quantityPicked.value <=100 && quantityPicked.value != 0){

  //Retrieve the choice of color
    let choixCouleur = colorselection.value;
                
    //Retrieve the quantity choice
    let choixQuantite = quantityPicked.value;

//Retrieve the options of the item to add to the basket
    let optionsProduit = {
        idProduit: idProduct,
        couleurProduit: choixCouleur,
        quantiteProduit: Number(choixQuantite),
        nomProduit: article.name,
        prixProduit: article.price,
        descriptionProduit: article.description,
        imgProduit: article.imageUrl,
        altImgProduit: article.altTxt
    };

    //Initialize local storage
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

  
    //Importation dans le local storage
   //If the basket already contains at least 1 item
    if (produitLocalStorage) {
    const resultFind = produitLocalStorage.find(
        (el) => el.idProduit === idProduct && el.couleurProduit === choixCouleur);
     //If the ordered product is already in the cart
        if (resultFind) {
            let newQuantite =
            parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
            resultFind.quantiteProduit = newQuantite;
            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            console.table(produitLocalStorage);
            popupConfirmation();
        
            //If the ordered product is not in the basket

        } else {
            produitLocalStorage.push(optionsProduit);
            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            console.table(produitLocalStorage);
            popupConfirmation();
        }

        //If the basket is empty
    } else {
        produitLocalStorage =[];
        produitLocalStorage.push(optionsProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        console.table(produitLocalStorage);
        popupConfirmation();
    }}
    });
}


getArticle(); 
