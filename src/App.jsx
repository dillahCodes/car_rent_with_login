// App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/Auth/UserAuthContext";
import { PrivateRoute } from "./Private/PrivateRoute";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { ForgotPassword } from "./Pages/Auth/ForgotPassword";
import { VerificationEmail } from "./Pages/Auth/VerificationEmail";
import { Settings } from "./Pages/Settings/Settings";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Dashboard } from "./Components/Dashboard_Section";
import { AsseetsSection } from "./Components/Assets_Section";
import { BookingSection } from "./Components/Booking_Section";
import { ComingSoonPage } from "./Pages/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetPassword",
    element: <ForgotPassword />,
  },

  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: (
          <MainLayout>
            <Dashboard />
          </MainLayout>
        ),
      },
      {
        path: "/assets",
        element: (
          <MainLayout>
            <AsseetsSection />
          </MainLayout>
        ),
      },
      {
        path: "/booking",
        element: (
          <MainLayout>
            <BookingSection />
          </MainLayout>
        ),
      },
      {
        path: "/sellcars",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/buycars",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/sellcars",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/services",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/services",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/calender",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/message",
        element: (
          <MainLayout>
            <ComingSoonPage />
          </MainLayout>
        ),
      },
      {
        path: "/settings",
        element: (
          <MainLayout>
            <Settings />
          </MainLayout>
        ),
      },
      {
        path: "verificationEmail",
        element: <VerificationEmail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
};

export default App;
