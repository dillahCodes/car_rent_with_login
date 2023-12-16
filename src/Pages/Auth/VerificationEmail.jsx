import { useEffect, useState } from "react";
import { useUserAuth } from "../../Context/Auth/UserAuthContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { MdLaunch } from "react-icons/md";

const Alert = ({ message }) => {
  return message ? (
    <div
      className={`alert ${
        message === "Too many attempts. Please wait a moment and try again."
          ? "alert-error"
          : "alert-success"
      }`}
    >
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{message}</span>
    </div>
  ) : (
    <>
      <span className="mx-auto loading loading-dots loading-md"></span>
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
};

export const VerificationEmail = () => {
  const { user, emailVerification } = useUserAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(user ? user.email : "");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState();

  useEffect(() => {
    setUserEmail(user ? user.email : "");
    user && user.emailVerified
      ? navigate("/")
      : navigate("/dashboard/verificationEmail");
  }, [user, navigate]);

  const sendVerificationEmail = async (event) => {
    event.preventDefault();

    try {
      setButtonDisabled(true);
      await emailVerification(user).then(() => {
        setError("verification email has been sent please check your inbox");
      });

      setCountdown(60);
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setButtonDisabled(false);
        clearInterval(countdownInterval);
      }, 60000);
    } catch (error) {
      if (error.code === "auth/too-many-requests") {
        setError("Too many attempts. Please wait a moment and try again.");
        setButtonDisabled(true);
      }

      console.error("Error sending verification email:", error.message);

      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setButtonDisabled(false);
        clearInterval(countdownInterval);
      }, 60000);
    }
  };

  const handleRefreashBrowserToDashboard = () => {
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-5">
      <div className="md:w-[55%] sm:w-[70%]  flex flex-col gap-y-5 border-success border p-3 rounded-md">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-3xl font-bold capitalize">verify your email</h1>
          <p className="text-sm">
            To continue, please verify your email by checking your inbox.
          </p>
        </div>

        {isButtonDisabled ? <Alert message={error} /> : <></>}
        <form
          className="flex flex-col w-full gap-y-3"
          onSubmit={sendVerificationEmail}
        >
          <input
            type="email"
            placeholder={userEmail || "Type your email here"}
            className="w-full input input-bordered"
            defaultValue={userEmail}
            readOnly={true}
          />
          <button
            disabled={isButtonDisabled}
            onClick={sendVerificationEmail}
            className={`w-full text-white capitalize btn ${
              isButtonDisabled ? "btn-disabled" : "btn-success"
            }`}
          >
            {isButtonDisabled
              ? `Resend in ${countdown} seconds`
              : "Send email verification"}
          </button>
        </form>
        <button
          onClick={handleRefreashBrowserToDashboard}
          className="inline-flex items-center mx-auto text-xs font-bold text-center text-success "
        >
          <span className="flex items-center ml-2 gap-x-1">
            Have you verified your account? go to dashboard now
            <MdLaunch />
          </span>
        </button>
      </div>
    </div>
  );
};
