import PropTypes from "prop-types";

export const InfoCard = (props) => {
  const { user, handleDeleteUserAccount, isDeletingAccount } = props;

  return (
    <div className="w-full p-4 bg-white shadow-md md:w-3/5 lg:ml-4">
      <span className="block pt-4 mb-4 font-medium text-center text-black capitalize opacity-70 ">
        Personal login information of your account
      </span>
      <div className="p-6 rounded shadow">
        <div className="pb-6">
          <h1 className="block pb-1 font-semibold text-gray-700">Name</h1>
          <div className="flex">
            <h2 className="w-full px-4 py-2 text-sm rounded-r border-1">
              {user && user.displayName
                ? user.displayName
                : "guest_" + user.uid.substring(0, 4)}
            </h2>
          </div>
        </div>
        <div className="pb-6">
          <h1 className="block pb-1 font-semibold text-gray-700 capitalize">
            email
          </h1>
          <div className="flex">
            <h2 className="w-full px-4 py-2 text-sm rounded-r border-1">
              {user && user.email}
            </h2>
          </div>
        </div>
        <div className="pb-4"></div>
        <button
          onClick={handleDeleteUserAccount}
          className={`w-full py-1 text-sm font-bold text-center text-white capitalize rounded-md btn ${
            isDeletingAccount ? "btn-disabled cursor-not-allowed" : "btn-error"
          }`}
          disabled={isDeletingAccount} // Menggunakan atribut disabled agar tombol tidak dapat diklik selama proses berlangsung
        >
          {isDeletingAccount ? "please wait..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  user: PropTypes.object,
  handleDeleteUserAccount: PropTypes.func,
  isDeletingAccount: PropTypes.bool,
  isEmailProvider: PropTypes.func,
  password: PropTypes.string,
};
