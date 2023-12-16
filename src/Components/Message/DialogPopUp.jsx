import PropTypes from "prop-types";

export const DialogPopUP = (props) => {
  const { user, isDeletingAccount, FinalDeleteUserHandler } = props;
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="flex flex-col modal-box gap-y-4">
        <h3 className="text-lg font-bold">Hello {user.displayName}</h3>
        <div className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Are you sure you want to delete your account?</span>
        </div>
        <div className="flex items-center justify-around w-full modal-action gap-x-4">
          <form method="dialog" className="flex-1 capitalize">
            {/* if there is a button in form, it will close the modal */}
            <button className="w-full btn">cencel</button>
          </form>
          <button
            className={`w-full flex-1 py-1 text-sm font-bold text-center text-white capitalize rounded-md btn ${
              isDeletingAccount
                ? "btn-disabled cursor-not-allowed"
                : "btn-error"
            }`}
            onClick={FinalDeleteUserHandler}
          >
            {isDeletingAccount ? "please wait..." : "Delete my Account"}
          </button>
        </div>
      </div>
    </dialog>
  );
};

DialogPopUP.propTypes = {
  user: PropTypes.object,
  isDeletingAccount: PropTypes.bool,
  FinalDeleteUserHandler: PropTypes.func,
};
