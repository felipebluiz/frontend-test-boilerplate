import Home from "../pages/home";
import Result from "../pages/result";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "home"
  },
  {
    exact: true,
    path: "/result",
    component: Result,
    key: "result"
  },
];

export default routes;
