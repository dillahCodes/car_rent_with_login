import { Outlet, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/Auth/UserAuthContext";
import { useEffect, useState } from "react";

// Komponen Loader Sederhana
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <span className="loading loading-dots loading-lg scale-[3]"></span>
    </div>
  );
};

export const PrivateRoute = () => {
  const [loader, setLoader] = useState(true); // Awalnya set loader menjadi true
  const { user } = useUserAuth();
  const navigate = useNavigate();

  // ketika komponen di render lihat apakah user ada
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (user) {
        // Setelah jeda 1 detik, jalankan navigasi ke "/dashboard/home"
        navigate("/dashboard");
        user && user.emailVerified
          ? navigate("/dashboard")
          : navigate("/verificationEmail");
      } else {
        navigate("/"); // jika setelah timeout selesai dan user tidak ada  maka navigasikan ke login login
      }
      setLoader(false); // Setelah timeout selesai, set loader menjadi false
    }, 1200);

    // Membersihkan timeout jika komponen di-unmount atau user berubah sebelum timeout berakhir
    return () => clearTimeout(timeoutId);
  }, [user, navigate]);

  // jika todak ada user maka tampilkan loader atau
  // jika user ada namun loader masih true maka tampilkan loader dan
  // jika user ada tampilan children komponen
  if ((!user && loader) || (user && loader)) {
    return <Loader />;
  } else {
    return user && <Outlet />;
  }
};
