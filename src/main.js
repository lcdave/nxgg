import { createApp } from "vue";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";

import "./sass/app.scss";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
