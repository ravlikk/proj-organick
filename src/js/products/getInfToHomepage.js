import {
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "../universal/api.js";
import { createModal, checkUrlByModal } from "./showModal.js";
import { validateRoute } from "../universal/validateRoute.js";

createModal();
getCategoryCards();
getCardsByCategory();
getProducts();

checkUrlByModal();
validateRoute();
