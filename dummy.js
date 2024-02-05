// let bagItems;
// onLoad();

// function onLoad() {
//   let bagItemsStr = localStorage.getItem("bagItems");
//   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//   displayItemsOnHomePage();
//   displayBagIcon();
// }

// function addToBag(itemId) {
//   bagItems.push(itemId);
//   localStorage.setItem("bagItems", JSON.stringify(bagItems));
//   displayBagIcon();
// }

// function displayBagIcon() {
//   let bagItemCountElement = document.querySelector(".bag-item-count");
//   if (bagItems.length > 0) {
//     bagItemCountElement.style.visibility = "visible";
//     bagItemCountElement.innerText = bagItems.length;
//   } else {
//     bagItemCountElement.style.visibility = "hidden";
//   }
// }

// function displayItemsOnHomePage() {
//   let itemsContainerElement = document.querySelector(".items-container");
//   if (!itemsContainerElement) {
//     return;
//   }
//   let innerHTML = "";
//   items.forEach((item) => {
//     innerHTML += ;
//   });
//   itemsContainerElement.innerHTML = innerHTML;
// }

// // console.log("I am inside index.js");
