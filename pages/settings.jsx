import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { auth } from "@/firebase";
import { setCurrentUser } from "@/redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Settings() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isPremium = useSelector((state) => state.user.premium);

  console.log(isPremium);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        const { uid, email } = currentUser;
        const user = {
          uid,
          email,
        };
        dispatch(setCurrentUser(user));
      }
    });
    return unsubscribe;
  }, [auth]);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <SearchBar />
        <div className="container">
          <div className="row">
            <div className="settings__title">Settings</div>
            <div className="settings__content">
              <div className="settings__subtitle">Your Subscription Plan</div>
              {isPremium ? (
                <div className="text-[#032b41]">Premium</div>
              ) : (
                <>
                  <div className="text-[#032b41]">Basic</div>
                  <Link
                    className="w-fit settings__button cursor-pointer"
                    href="choose-plan"
                  >
                    Upgrade to Premium
                  </Link>
                </>
              )}
            </div>
            <div className="settings__account">
              <div className="settings__account-title">Email</div>
              <div className="settings__account-email">
                {currentUser?.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
