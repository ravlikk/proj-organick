import { createModal } from "./products/showModal.js";
import {
  getCardByModal,
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "./universal/api.js";

getProducts();
getCategoryCards();
getCardsByCategory();
createModal();
