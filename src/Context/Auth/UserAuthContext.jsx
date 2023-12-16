import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  deleteUser,
  reauthenticateWithPopup,
  updateProfile,
  sendEmailVerification,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { auth } from "../../FireBase/FireBaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../FireBase/FireBaseConfig";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fungsi bantu untuk menentukan apakah pengguna login menggunakan email
  const isEmailProvider = () => {
    return user.providerData?.[0]?.providerId === "password";
  };

  // fungsi untuk register akun
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
  };

  // fungsi untuk login akun
  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  };

  // Fungsi login dengan akun Google
  const gooogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Fungsi authentication ulang untuk hapus akun yang login dengan Google
  const reAuthGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();

    try {
      // Coba merefresh token pengguna
      await reauthenticateWithPopup(user, googleProvider);
      return true;
    } catch (refreshError) {
      console.error("Error refreshing user token:", refreshError.message);
      return false;
    }
  };

  // Fungsi untuk melakukan otentikasi ulang user yang login dengan Email
  const reAuthCredentialsEmail = async (currPassword) => {
    const credentials = EmailAuthProvider.credential(user.email, currPassword);

    try {
      await reauthenticateWithCredential(user, credentials);
      return true; // kembalikan nilai true jika reauth berhasil
    } catch (error) {
      // Tangani kesalahan otentikasi ulang
      console.error(
        "Error during reauthentication with credentials:",
        error.message
      );
      return false; // kembalikan nilai false jika reauth gagal
    }
  };

  // Fungsi hapus akun pengguna yang login dengan Google
  const deleteUserAccountGoogle = async () => {
    const reAuthSuccess = await reAuthGoogleLogin();

    try {
      if (!user) {
        throw new Error("No user is currently signed in.");
      }

      if (reAuthSuccess) {
        await deleteUser(user);
        return true; // Memberikan nilai kembalian true jika penghapusan berhasil
      } else {
        throw new Error(
          "Failed to delete user account. Reauthentication failed."
        );
      }
    } catch (error) {
      console.error("Error deleting user account:", error.message);
      throw error;
    }
  };

  // Fungsi hapus akun pengguna yang login dengan email
  const deleteUserAccountUserEmail = async (currentPassword) => {
    try {
      if (!user) {
        throw new Error("No user is currently signed in.");
      }

      if (await reAuthCredentialsEmail(currentPassword)) {
        await deleteUser(user);
        return true; // Memberikan nilai kembalian true jika penghapusan berhasil
      }
    } catch (error) {
      console.error("Error deleting user account:", error.message);
      throw error;
    }
  };

  // fungsi reset password akun (forgot password)
  const resetPasswordAccount = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error resetting password:", error.message);
      throw error;
    }
  };

  // fungsi edit user Name
  const changeUserName = async (newUserName) => {
    try {
      await updateProfile(user, {
        displayName: newUserName,
      });
    } catch (error) {
      console.error("Error updating user Name:", error.message);
      throw error;
    }
  };

  // fungsi uploade image ke server storage firebase
  const uploadImageToFireBase = async (newProfilePicture) => {
    // upload file to firebase storage
    const fileRef = ref(storage, `userProfile/${user.uid}/${user.uid}.png`); // lokasi file foto
    try {
      await uploadBytes(fileRef, newProfilePicture); // ini akan mengupload foto ke firebase
    } catch (error) {
      console.error("Error uploading profile picture:", error.message);
      throw error;
    }
  };

  // fungsi mengambil foto profile dari firebase dan menemapilkan ke user hasil pembarua gambar photo profile
  const changeProfilePicture = async () => {
    const fileRef = ref(storage, `userProfile/${user.uid}/${user.uid}.png`); // lokasi file foto
    try {
      const photoUrl = await getDownloadURL(fileRef); // get photo url from firebase storage
      // update profile picture
      await updateProfile(user, {
        photoURL: photoUrl,
      });
    } catch (error) {
      console.error("Error updating profile picture:", error.message);
      throw error;
    }
  };

  // fungsi send email verification untuk auth email
  const emailVerification = async (currUser) => {
    try {
      await sendEmailVerification(currUser);
    } catch (error) {
      console.error("failed to send email verification", error.message);
      throw error;
    }
  };

  // Fungsi untuk memperbarui kata sandi login dengan email
  const updatePasswordLoginWithEmail = async (newPassword) => {
    try {
      await updatePassword(user, newPassword);
      console.info("Updated password successfully");
      // Proses pembaruan kata sandi berhasil
    } catch (error) {
      // Tangani kesalahan pembaruan kata sandi
      console.error("Error during password update:", error.message);
      throw error;
    }
  };

  // fungsi ubah email user yang login dengan menggunakan email
  const changeEmailUser = async (newEmail) => {
    try {
      await updateEmail(user, newEmail);
    } catch (error) {
      console.error("Failed to update email", error.message);
      throw error;
    }
  };

  // fungsi  verifkasi sebelum update email
  const verifyEmailBeforeUpdate = async (newEmail) => {
    try {
      await verifyBeforeUpdateEmail(user, newEmail);
      return true;
    } catch (error) {
      console.error("error verifying email", error.message);
      return false;
    }
  };

  // fungsi untuk logout
  const logOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // mengambil current user setiap komponen  childe  di mounts / render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      // Memastikan untuk unsubscribe saat komponen dilepas (unmounted)
      unsubscribe();
    };
  }, []);

  console.info(user);
  return (
    <UserAuthContext.Provider
      value={{
        emailVerification,
        user,
        signUp,
        logIn,
        logOut,
        gooogleSignIn,
        resetPasswordAccount,
        deleteUserAccountGoogle,
        deleteUserAccountUserEmail,
        changeUserName,
        isEmailProvider,
        changeProfilePicture,
        uploadImageToFireBase,
        reAuthCredentialsEmail,
        updatePasswordLoginWithEmail,
        changeEmailUser,
        verifyEmailBeforeUpdate,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

UserAuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
