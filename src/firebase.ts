import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLF_BclwdmavNPMk0gJtR2M22fhvNRK-s",
    authDomain: "aireservas-admin.firebaseapp.com",
    databaseURL: "https://aireservas-admin-default-rtdb.firebaseio.com",
    projectId: "aireservas-admin",
    storageBucket: "aireservas-admin.firebasestorage.app",
    messagingSenderId: "900812322152",
    appId: "1:900812322152:web:e8d8fe6c763c252c82d2dd",
    measurementId: "G-DL6SBEEE2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

/**
 * Uploads a receipt file to Firebase Storage with progress tracking.
 * @param file The file to upload.
 * @param reservationId A unique identifier for the reservation.
 * @param onProgress A callback function to report upload progress (0-100).
 * @returns A Promise that resolves with the download URL of the uploaded file.
 */
export const uploadReceipt = (
    file: File, 
    reservationId: string, 
    onProgress: (progress: number) => void
): Promise<string> => {
    if (!file) {
        return Promise.reject(new Error("No file selected."));
    }

    const filePath = `receipts/${reservationId}/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
};
