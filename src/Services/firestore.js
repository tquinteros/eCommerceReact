import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { doc, getDoc, addDoc } from "firebase/firestore";
import { products } from './../data/products';

const firebaseConfig = {
  apiKey: "AIzaSyDPI0bZ8Yn6aBFbDEk4WrcwcoHGZWhsROA",
  authDomain: "coderfire-489b9.firebaseapp.com",
  projectId: "coderfire-489b9",
  storageBucket: "coderfire-489b9.appspot.com",
  messagingSenderId: "729465027250",
  appId: "1:729465027250:web:6876420c7645952f3fe7ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default function testDatabase() {
  console.log(app);
}

export async function getItems() {
  const colectionProducts = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProducts);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function getSingleItem(id) {
  const docRef = doc(DB, "products", id);
  const docSnapshot = await getDoc(docRef);
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}

export async function getItemsByCategory(category) {
  const collectionRef = collection(DB, "products");

  const queryC = query(collectionRef, where("category", "==", category));

  const documentSnapshot = await getDocs(queryC);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  console.log(docOrder);
  return (docOrder.id);
}

export async function exportArray() {
  const collectionRef = collection(DB ,"products");

  for( let item of products ) {
    let docOrder = await addDoc(collectionRef, item)
    console.log("Creado")
  }
} 