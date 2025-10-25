// src/firebase/config.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCs-B-pdzT1ixdurz6LY4bZS0hIEVQlDbA",
  authDomain: "vnr202-63db3.firebaseapp.com",
  projectId: "vnr202-63db3",
  storageBucket: "vnr202-63db3.firebasestorage.app",
  messagingSenderId: "1023581168149",
  appId: "1:1023581168149:web:8b0df367f716f56599a41c",
  measurementId: "G-R2YSRVN716",
};

// ⚡ Sửa ở đây: Kiểm tra nếu Firebase đã khởi tạo thì dùng lại
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const database = getDatabase(app);
