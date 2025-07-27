import {
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "../universal/api.js";
import { createModal } from "./showModal.js";
import { checkUrlByModal } from "./products/showModal";
import { validateRoute } from "./universal/validateRoute";

createModal();
getCategoryCards();
getCardsByCategory();
getProducts();

checkUrlByModal();
validateRoute();
