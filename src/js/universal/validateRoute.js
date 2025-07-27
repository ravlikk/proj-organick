export function validateRoute() {
  const validRoutes = [
    "/",
    "/shop",
    "/about",
    "/cart",
    "/blog",
    "/service",
    "/service-single",
    "/projects",
    "/index",
  ];
  const path = window.location.pathname;
  const isProductPage = /^\/product\/\d+$/.test(path);

  if (!validRoutes.includes(path) && !isProductPage) {
    window.location.href = "/404.html";
  }
}
