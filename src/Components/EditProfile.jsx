import { useState } from "react";
import { useUserAuth } from "../Context/Auth/UserAuthContext";

// helper functions
import {
  InputIsMissing,
  handleError,
  handleSuccess,
  isNewEmailMissing,
  isPasswordMissing,
  isReAuthAndNewEmailPresent,
} from "../Context/Auth/Helper/AuthHelper";
import { AllertFailed, AllertSucceed } from "./Message/Allert";

export const EditProfile = () => {
  const {
    changeUserName,
    user,
    isEmailProvider,
    changeProfilePicture,
    uploadImageToFireBase,
    reAuthCredentialsEmail,
    updatePasswordLoginWithEmail,
    changeEmailUser,
    verifyEmailBeforeUpdate,
  } = useUserAuth();
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState({
    newUserName: "",
    newEmail: "",
    oldPassword: "",
    newPassword: "",
  });
  const [photoUrl, setPhotoUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isErrorCondition, setIsErrorCondition] = useState(false);

  const onChangeHandler = (key, event) => {
    setInputValue((prevValue) => ({
      ...prevValue,
      [key]: event.target.value,
    }));
  };

  /**************************************************************
   *                                                            *
   *               get photoUrl handler                         *
   *                                                            *
   **************************************************************/
  const onChangePhotoUrlHandler = (event) => {
    if (event.target.files[0]) {
      setPhotoUrl(event.target.files[0]);
    }
  };

  // mencegah form ter submit ketika user menekan enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return false;
    }
  };

  /**************************************************************
   *                                                            *
   *               Form Submission Handler                      *
   *                                                            *
   **************************************************************/
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.info(verifyEmailBeforeUpdate);

    try {
      setLoader(true); // Mengaktifkan loader

      // Mengecek apakah pengguna login dengan email
      const isEmailUser = isEmailProvider();

      // Melakukan reauthentication jika pengguna login dengan email
      const isAuth = await reAuthCredentialsEmail(inputValue.oldPassword);

      // jika reAuth gagal
      if (isAuth !== true) {
        setErrorMessage(
          "Failed to update your profile. please check your current password."
        );
        setIsErrorCondition(true);
        handleError(
          "Failed to update your profile. please check your current password."
        );
        return;
      }

      // user lupa memasukan semua input
      if (InputIsMissing(inputValue) && isAuth) {
        setErrorMessage("Failed to update your profile. No value to update.");
        setIsErrorCondition(true);
        handleError("Failed to update your profile. No value to update.");
        return;
      }

      // Jika user lupa memasukkan password saat ini
      if (isPasswordMissing(inputValue.oldPassword, isAuth)) {
        handleError("failed to update your profile Please check your password");
        setErrorMessage(
          "failed to update your profile Please check your password"
        );
        setIsErrorCondition(true);
        return;
      }

      // jika user mengklik submit namun email belum terverifikasi
      if (
        verifyEmailBeforeUpdate !== true &&
        isAuth &&
        inputValue.oldPassword !== "" &&
        inputValue.newPassword === "" &&
        inputValue.newEmail !== ""
      ) {
        setIsErrorCondition(true);
        setErrorMessage(
          "Failed to update your profile, verify email before update your profile"
        );
        handleError(
          "Failed to update your profile, verify email before update your profile"
        );
        return;
      }

      // jika user memasukan password saat ini dan password baru yang sama
      if (inputValue.oldPassword === inputValue.newPassword) {
        setIsErrorCondition(true);
        setErrorMessage(
          "Failed to update your profile, current password cannot same as new password"
        );
        handleError(
          "Failed to update your profile, current password cannot same as new password"
        );
        return;
      }

      // jika user mencoba mengubah email dan password dalam satu waktu
      if (inputValue.newEmail && inputValue.newPassword) {
        setIsErrorCondition(true);
        setErrorMessage(
          "Failed to update your profile, new password and new email cannot update in same time"
        );
        handleError(
          "Failed to update your profile, new password and new email cannot update in same time"
        );
        return;
      }

      if (isEmailUser && isAuth) {
        // jika user login dengan emial dan telah reAuth
        // Jika pengguna login dengan email dan reauthentication berhasil
        // Mengganti nama pengguna jika diisi
        if (inputValue.newUserName) {
          await changeUserName(inputValue.newUserName);
        }

        // mengganti email jika user tidak mengganti password dalam satu waktu dan kemudian verifikasi email sebelum update berhasil
        if (
          inputValue.newEmail &&
          isAuth &&
          verifyEmailBeforeUpdate &&
          inputValue.newPassword === ""
        ) {
          await changeEmailUser(inputValue.newEmail);
        }

        // Mengganti password pengguna jika diisi dan reauthentication berhasil
        if (inputValue.newPassword && isAuth) {
          await updatePasswordLoginWithEmail(inputValue.newPassword);
        }

        handleSuccess("Updating profile successfully");
        setErrorMessage("Updating profile successfully");
        setIsErrorCondition(false);
        return;
      } else {
        // Jika pengguna login dengan google
        if (inputValue.newUserName) {
          await changeUserName(inputValue.newUserName);
        }

        // Mengunggah gambar profil jika tersedia
        if (photoUrl) {
          await uploadImageToFireBase(photoUrl);
          await changeProfilePicture();
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorCondition(true);
      handleError(error.message);
      setLoader(false); // Mematikan loader jika terjadi error
    } finally {
      setLoader(false); // Mematikan loader
    }
  };

  /**************************************************************
   *                                                            *
   *           email address verification handler               *
   *                                                            *
   **************************************************************/
  const verifyHandler = async (e) => {
    e.preventDefault();

    try {
      // re authenticate user
      const reAuth = await reAuthCredentialsEmail(inputValue.oldPassword);

      // jika user lupa memasukan password saat ini
      if (isPasswordMissing(inputValue.oldPassword, reAuth)) {
        handleError("failed to verify your email please check your password");
        setErrorMessage(
          "failed to verify your email please check your password"
        );
        setIsErrorCondition(true);
        return;
      }

      // jika user memasukan current password namun lupa memasukan new email
      if (isNewEmailMissing(inputValue, reAuth)) {
        handleError("failed to verify your email please insert a new email");
        setErrorMessage(
          "failed to verify your email please insert a new email"
        );
        setIsErrorCondition(true);
        return;
      }

      // jika user memasukan email yang sama dengan emauk saat ini
      if (user.email === inputValue.newEmail && reAuth) {
        setIsErrorCondition(true);
        setErrorMessage(
          "failed to verify your email, your email must not be the same as the one currently used"
        );
        handleError(
          "failed to verify your email, your email must not be the same as the one currently used"
        );
        return;
      }

      // jika new email ada dan user terkah ter reAuth
      if (
        isReAuthAndNewEmailPresent(inputValue.newEmail, reAuth) &&
        user.email !== inputValue.newEmail
      ) {
        // kirim {link verification ke new email sebelum ubah email
        await verifyEmailBeforeUpdate(inputValue.newEmail);
        setIsErrorCondition(false);
        handleSuccess(
          "email verification has ben sent, please check your inbox"
        );
        setErrorMessage(
          "email verification has ben sent, please check your inbox"
        );
        return;
      }
    } catch (error) {
      setIsErrorCondition(true);
      console.info(error.message);
    }
  };

  // console.info({
  //   // name: inputValue.newUserName,
  //   // email: inputValue.newEmail,
  //   oldPassword: inputValue.oldPassword,
  //   newPassword: inputValue.newPassword,
  //   // photoUrl: photoUrl,
  // });
  // console.info(user.email);
  return (
    <div className="w-full p-8 bg-white shadow-md md:w-3/5 lg:ml-4">
      <form className="p-4 rounded-md shadow-md" onSubmit={onSubmitHandler}>
        {isErrorCondition ? (
          <AllertFailed message={errorMessage} />
        ) : (
          <AllertSucceed message={errorMessage} />
        )}

        <div className="pb-6">
          <h1 className="block pb-1 font-semibold text-gray-700 capitalize">
            new Name
          </h1>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              onChange={(event) => onChangeHandler("newUserName", event)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className={`pb-6 ${isEmailProvider() ? "" : "hidden"}`}>
          <h1 className="block pb-1 font-semibold text-gray-700 capitalize">
            new email
          </h1>
          <div className="flex w-full gap-x-2">
            <input
              type="email"
              placeholder="Type here"
              className="flex-1 w-full input input-bordered $"
              onChange={(event) => onChangeHandler("newEmail", event)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={verifyHandler}
              className="text-white w-[100px] capitalize btn btn-primary text-xs"
            >
              verify Email
            </button>
          </div>
        </div>
        <div className={`pb-6 ${isEmailProvider(user) ? "" : "hidden"}`}>
          <h1 className="block pb-1 font-semibold text-gray-700 capitalize">
            new password
          </h1>
          <div className="flex">
            <input
              type="password"
              placeholder="Type here"
              className="w-full input input-bordered"
              onChange={(event) => onChangeHandler("newPassword", event)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="pb-6">
          <h1 className="block pb-1 font-semibold text-gray-700">
            profile picture
          </h1>
          <div className="flex">
            <input
              type="file"
              className="w-full file-input file-input-bordered"
              onChange={onChangePhotoUrlHandler}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className={`pb-6 `}>
          <h1 className="block w-full pb-1 mx-auto mb-1 text-xs font-semibold text-red-500">
            To continue, please enter your current password.
          </h1>
          <div className="flex">
            <input
              type="password"
              placeholder="Type here"
              className={`w-full input ${
                inputValue.oldPassword ? "input-bordered" : "input-error"
              }`}
              onChange={(event) => onChangeHandler("oldPassword", event)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white capitalize btn btn-error"
          disabled={loader}
        >
          {loader ? "plase wait.." : "edit my profile"}
        </button>
      </form>
    </div>
  );
};
