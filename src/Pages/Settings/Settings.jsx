import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/Auth/UserAuthContext";
import { useState } from "react";
import { InfoCard } from "../../Components/InfoCard";
import { EditProfile } from "../../Components/EditProfile";
import { DialogPopUP } from "../../Components/Message/DialogPopUp";

export const Settings = () => {
  const {
    user,
    logOut,
    deleteUserAccountGoogle,
    deleteUserAccountUserEmail,
    isEmailProvider,
  } = useUserAuth();
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteUserAccount = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const FinalDeleteUserHandler = async () => {
    try {
      setIsDeletingAccount(true); // Set state menjadi true saat proses penghapusan dimulai
      (await isEmailProvider())
        ? await deleteUserAccountUserEmail()
        : await deleteUserAccountGoogle();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsDeletingAccount(false); // Set state kembali menjadi false setelah proses selesai atau terjadi kesalahan
    }
  };

  const editAccountHandler = () => {
    editAccount ? setEditAccount(false) : setEditAccount(true);
  };

  return (
    <div className="flex flex-col items-center justify-around w-full border border-red-700">
      <h1 className="mb-5 text-3xl font-bold capitalize">dashboard</h1>
      <div className="block w-full sm:w-[80%] md:w-[80%]  md:flex gap-x-4 gap-y-5">
        <div className="w-full p-4 bg-white shadow-md md:w-2/5 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="block text-xl font-semibold capitalize">
              user Profile
            </span>
            <button
              onClick={editAccountHandler}
              className="px-3 py-1 text-sm font-bold text-white bg-gray-700 rounded-md - hover:bg-gray-800"
            >
              Edit
            </button>
          </div>
          <h1 className="text-gray-600">
            This information is secret so be careful
          </h1>
          <div className="flex justify-center w-full p-8 mx-2">
            <img
              className="items-center w-32 max-w-xs border"
              src={
                user && user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              }
              referrerPolicy="no-referrer"
              alt="user image"
            />
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-1 text-sm font-bold text-white rounded-md btn btn-neutral"
          >
            log out
          </button>
        </div>

        {editAccount ? (
          <>
            <EditProfile />
          </>
        ) : (
          <>
            <InfoCard
              user={user}
              handleDeleteUserAccount={handleDeleteUserAccount}
              isDeletingAccount={isDeletingAccount}
            />
          </>
        )}
      </div>
      <DialogPopUP
        user={user}
        isDeletingAccount={isDeletingAccount}
        FinalDeleteUserHandler={FinalDeleteUserHandler}
      />
    </div>
  );
};
