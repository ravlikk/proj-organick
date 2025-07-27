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
  let path = window.location.pathname;
  if (path === "/index.html") path = "/";

  const isProductPage = /^\/product\/\d+$/.test(path);

  if (!validRoutes.includes(path) && !isProductPage) {
    window.location.href = "/404.html";
  }
}
