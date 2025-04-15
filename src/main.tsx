import React from 'react';
import ReactDOM from 'react-dom/client'; // 오타: ReactDom ❌ → ReactDOM ✅
import './index.css';
import App from './App'; // 누락: App 뒤에 작은 따옴표 빠짐 ❌
import { Provider } from 'react-redux';
import  store  from './store'; // 누락된 store import 추가 필요

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
