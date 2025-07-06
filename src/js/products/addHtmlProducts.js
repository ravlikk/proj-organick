import { rooot } from "../universal/root";

export function discountProduct(data, i) {
  rooot.listProducts.insertAdjacentHTML(
    "beforeend",
    `<li data-id="${data[i].id}" class="products__item">
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
    `<li data-id="${data[i].id}" class="products__item">
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
    `<li data-id="${data[i].id}" class="products__item">
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
    `<li data-id="${data[i].id}" class="products__item">
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

export function modalProduct(data) {
  rooot.modal.insertAdjacentHTML(
    "beforeend",
    `
    <div class="detail__container" data-id="${data.id}">
            <div>
                <button class="detail__close">X</button>
                <div class="detail__wrapper">
                    <p class="detail-wrapper__text">${data.category.name}</p>
                    <img class="detail__img" src="${data.img}" alt="image">
                </div>
                <div class="detail__content">
                    <h3 class="detail__title">${data.name}</h3>
                    <div class="detail__inf">
                        <img class="detail__rait" src="../image/homepage/products/Star.png" alt="">
                        <div class="detail__prices">
                            <p class="detail__price cancel">$${data.price}</p>
                            <p class="detail__price">$${
                              data.price * (1 - data.discount / 100)
                            }</p>
                        </div>
                    </div>
                    <p class="detail__text">${data.description}</p>
                    <div class="detail__quanity">
                        <p class="detail-quanity__text">Quantity :</p>
                        <input class=" detail-quantity__count" type="number" name="" min="1" max="100" id="quantity" step="1" value="1">
                        <button class="detail__btn">Add To Cart
                            <svg class="detail__svg">
                                <use xlink:href="../image/symbol-defs.svg#icon-Aerrow"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="detail__btns">
                    <button class="detail-btns__btn active">Product Description</button>
                    <button class="detail-btns__btn">Additional Info</button>
                </div>
                <p class="detail__text">Welcome to the world of natural and organic. Here you can discover the bounty of
                    nature. We have
                    grown on the principles of health, ecology, and care. We aim to give our customers a healthy
                    chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
                    glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
            </div>
        </div>`
  );
}
