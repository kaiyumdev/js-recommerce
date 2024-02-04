displayItemsOnHomePage();
let bagItems = [];

function addToBag(itemId) {
  bagItems.push(itemId);
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item-container">
    <img class="item-image" src=${item.image} alt="image" />
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}k</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}

// console.log("I am inside index.js");
