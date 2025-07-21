import {
  getCardsByCategory,
  getCategoryCards,
  getProducts,
} from "../universal/api.js";
import { createModal, chekUrlByModal } from "./showModal.js";

createModal();
getCategoryCards();
getCardsByCategory();
getProducts();
chekUrlByModal();
