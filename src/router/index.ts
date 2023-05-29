import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import FormPage from "../views/FormPage.vue";
import PreviewPage from "../views/PreviewPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: FormPage },
  { path: "/preview", component: PreviewPage },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
