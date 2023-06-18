import ReactDOM from 'react-dom/client'
import  {Provider} from "react-redux";
import "@app/css/app.css";
import store from "./store/store.ts";
import {MainLayout} from "./layout/MainLayout.tsx";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <MainLayout />
  </Provider>
)
