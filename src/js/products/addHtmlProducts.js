import { rooot } from "../universal/root";

export function discountProduct(data, i) {
  rooot.listProducts.insertAdjacentHTML(
    "beforeend",
    `<li data-id="%${data[i].id}" class="products__item">
                <p class="products-item__text">${data[i].category.name}</p>
                <img class="products__img" src="${data[i].img}" alt="">
                <h3 class="products-item__title">${data[i].name}</h3>
                <div class="products-item__info">
                    <div>
                        <p class="products-item__price cancel">$${
                          data[i].price
                        }</p>
                        <p class="products-item__price">$${
                          data[i].price * (1 - data[i].discount / 100)
                        }</p>
                    </div>
                    <img src="../image/homepage/products/Star.png" alt="">
                </div>
            </li>`
  );
}

export function defaultProduct(data, i) {
  rooot.listProducts.insertAdjacentHTML(
    "beforeend",
    `<li data-id="%${data[i].id}" class="products__item">
                <p class="products-item__text">${data[i].category.name}</p>
                <img class="products__img" src="${data[i].img}" alt="">
                <h3 class="products-item__title">${data[i].name}</h3>
                <div class="products-item__info">
                    <div>
                        <p class="products-item__price">$${data[i].price}</p>
                    </div>
                    <img src="../image/homepage/products/Star.png" alt="">
                </div>
            </li>`
  );
}

export function discountProductOffer(data, i) {
  rooot.categoryCardsList.insertAdjacentHTML(
    "beforeend",
    `<li data-id="%${data[i].id}" class="products__item">
                <p class="products-item__text">${data[i].category.name}</p>
                <img class="products__img" src="${data[i].img}" alt="">
                <h3 class="products-item__title">${data[i].name}</h3>
                <div class="products-item__info">
                    <div>
                        <p class="products-item__price cancel">$${
                          data[i].price
                        }</p>
                        <p class="products-item__price">$${
                          data[i].price * (1 - data[i].discount / 100)
                        }</p>
                    </div>
                    <img src="../image/homepage/products/Star.png" alt="">
                </div>
            </li>`
  );
}

export function defaultProductOffer(data, i) {
  rooot.categoryCardsList.insertAdjacentHTML(
    "beforeend",
    `<li data-id="%${data[i].id}" class="products__item">
                <p class="products-item__text">${data[i].category.name}</p>
                <img class="products__img" src="${data[i].img}" alt="">
                <h3 class="products-item__title">${data[i].name}</h3>
                <div class="products-item__info">
                    <div>
                        <p class="products-item__price">$${data[i].price}</p>
                    </div>
                    <img src="../image/homepage/products/Star.png" alt="">
                </div>
            </li>`
  );
}