import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";

const routes = [
  {
    path: /\/a/,
    component: initPageA,
  },
  {
    path: /\/b/,
    component: initPageB,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    console.log("el handleRoute recibió una nueva ruta ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  console.log(location.pathname);
}
