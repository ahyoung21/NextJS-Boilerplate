import { database } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebaseConfig';

const getData = async (collectionName) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName, data) => {
  return await addDoc(collection(database, collectionName), data);
};

const deleteData = async (collectionName, id) => {
  return await deleteDoc(doc(database, collectionName, id));
};

const updateData = async (collectionName, id, data) => {
  return await updateDoc(doc(database, collectionName, id), data);
};

const loginAuth = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

const joinAuth = async (email, password) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export { getData, setData, deleteData, updateData, loginAuth, joinAuth };
