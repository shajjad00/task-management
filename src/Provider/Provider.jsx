import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const DataContext = createContext(null);
const provider = new GoogleAuthProvider();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  //create user

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user sign in

  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user logOut

  const userLogOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  //update profile

  const profileUpdate = (name, photoUrl) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //google login

  const googleLogIn = () => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  //watch user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // user sign out

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };
  const providedData = {
    createUser,
    signIn,
    userLogOut,
    profileUpdate,
    googleLogIn,
    logOut,
    loading,
    user,
  };
  return (
    <DataContext.Provider value={providedData}>{children}</DataContext.Provider>
  );
};

export default Provider;
