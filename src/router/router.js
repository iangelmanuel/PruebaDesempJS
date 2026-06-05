import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import { isAuthenticated } from "@/utils";


const privateRoutes =["/home"]
const routes = {
  "/": loginView,
  "/home": homeView
  // "": 
};

export const router = () => {
  const app = document.querySelector("#app");
  
  let path = window.location.pathname;
  
  const view = routes[path] || loginView;
  
  app.innerHTML = view();
};



export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};
window.addEventListener("popstate", router);
