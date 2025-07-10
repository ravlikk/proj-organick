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

