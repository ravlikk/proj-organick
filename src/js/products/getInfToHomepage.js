import {
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "../universal/api.js";
import { createModal } from "./showModal.js";

createModal();
getCategoryCards();
getCardsByCategory();
getProducts();
