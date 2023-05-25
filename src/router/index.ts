import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import FormPage from "../pages/FormPage.vue";
import PreviewPage from "../pages/PreviewPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: FormPage },
  { path: "/preview", component: PreviewPage },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
