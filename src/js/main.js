import "./modal_header";
import "./modal_reg";
import "./registration_modal";
import "./registration_put_info";
import "./auterization";
import "./cart_load";
import "./cart_delete";
import "./cart_put";
import "./cart__order";
import "./cart__dinamic";
import "./cart_html";
import "./cart_load-data";
import "./cart_update";
import { chekUrlByModal, createModal } from "./products/showModal.js";
import {
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "./universal/api.js";

getProducts();
getCategoryCards();
getCardsByCategory();
createModal();
chekUrlByModal();
