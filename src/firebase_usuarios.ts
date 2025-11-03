import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Credenciales de aimotelreservas directamente en el código para una prueba definitiva
const firebaseConfigUsers = {
  apiKey: "AIzaSyCsEimAr1d4z_vMKxNjJZ5MIw7uh-hgoAE",
  authDomain: "aimotelreservas.firebaseapp.com",
  databaseURL: "https://aimotelreservas-default-rtdb.firebaseio.com",
  projectId: "aimotelreservas",
  storageBucket: "aimotelreservas.firebasestorage.app",
  messagingSenderId: "882236089",
  appId: "1:882236089:web:396da3ea28e2948d1c1968",
  measurementId: "G-P9DK41CWE2"
};

// Inicializamos una app de Firebase secundaria con un nombre único
const appUsers = initializeApp(firebaseConfigUsers, "appUsers");

// Obtenemos una referencia a la base de datos de esta app secundaria
const dbUsers = getDatabase(appUsers);

export { dbUsers };
