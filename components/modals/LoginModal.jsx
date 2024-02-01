import {
  closeLoginModal,
  closePasswordModal,
  closeSignupModal,
  openLoginModal,
  openPasswordModal,
  openSignupModal,
} from "@/redux/modalSlice";
import {
  faCircleNotch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { setCurrentUser } from "@/redux/userSlice";

export default function LoginModal() {
  const isLoginOpen = useSelector((state) => state.modal.loginModalOpen);
  const isSignupOpen = useSelector((state) => state.modal.signupModalOpen);
  const isPasswordOpen = useSelector((state) => state.modal.passwordModalOpen);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const handleSignup = async (e) => {
    setIsSignupLoading(true);
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
        });
        setIsSignupLoading(false);
        setLoginError("");
        goToForYouPage();
      }
    } catch (error) {
      setLoginError("Wrong email or password. Please try again.");
      alert(error);
    }
  };

  const handleLogin = async (e) => {
    setIsLoginLoading(true);
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
        });
        setIsLoginLoading(false);
        setLoginError("");
        goToForYouPage();
      }
    } catch (error) {
      setLoginError("Wrong email or password. Please try again.");
      alert(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    setIsGoogleLoading(true);
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
        });
        setIsGoogleLoading(false);
        goToForYouPage();
      }
    } catch (error) {
      setLoginError("Error");
      alert(error);
    }
  };

  const handleGuestLogin = async (e) => {
    setIsGuestLoading(true);
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        "guestuser@guest.com",
        "123456"
      );
      const user = userCredentials.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
        });
      }
      setIsGuestLoading(false);
      goToForYouPage();
    } catch (error) {
      setLoginError("Wrong email or password. Please try again");
      alert(error);
    }
  };

  const goToForYouPage = () => {
    router.push("/for-you");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
      <button
        onClick={() => dispatch(openLoginModal())}
        className="btn home__cta--btn"
      >
        Login
      </button>
      {isLoginOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal open={isLoginOpen} onClose={() => dispatch(closeLoginModal())}>
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Log in to Summarist
                  </div>
                  {!isGuestLoading ? (
                    <button
                      onClick={handleGuestLogin}
                      className="relative flex bg-[#3a579d] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]"
                    >
                      <figure className="bg-transparent flex items-center justify-center w-[36px] h-[36px] rounded-[4px] absolute left-[2px]">
                        <FontAwesomeIcon
                          className="w-[24px] h-[24px]"
                          icon={faUser}
                        />
                      </figure>
                      <div>Login as Guest</div>
                    </button>
                  ) : (
                    <button
                      onClick={handleGuestLogin}
                      className="relative flex bg-[#3a579d] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]"
                    >
                      <figure className="bg-transparent flex items-center justify-center w-[36px] h-[36px] rounded-[4px] absolute left-[2px]">
                        <FontAwesomeIcon
                          className="w-[24px] h-[24px]"
                          icon={faUser}
                        />
                      </figure>
                      <FontAwesomeIcon
                        className="animate-spin"
                        icon={faCircleNotch}
                      />
                    </button>
                  )}
                  <div className="flex items-center my-[16px]">
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                    <span className="mx-[24px] text-[14px] text-[#394547] font-medium">
                      or
                    </span>
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                  </div>
                  {!isGoogleLoading ? (
                    <button
                      onClick={handleGoogleLogin}
                      className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]"
                    >
                      <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
                        <img
                          className="w-[24px] h-[24px]"
                          src="/assets/google.png"
                          alt=""
                        />
                      </figure>
                      <div>Login with Google</div>
                    </button>
                  ) : (
                    <button
                      onClick={handleGoogleLogin}
                      className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]"
                    >
                      <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
                        <img
                          className="w-[24px] h-[24px]"
                          src="/assets/google.png"
                          alt=""
                        />
                      </figure>
                      <FontAwesomeIcon
                        className="animate-spin"
                        icon={faCircleNotch}
                      />
                    </button>
                  )}
                  <div className="flex items-center my-[16px]">
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                    <span className="mx-[24px] text-[14px] text-[#394547] font-medium">
                      or
                    </span>
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                  </div>
                  <form className="flex flex-col gap-[16px]">
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="text"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isLoginLoading ? (
                      <button onClick={handleLogin} className="btn">
                        <span>Login</span>
                      </button>
                    ) : (
                      <button onClick={handleLogin} className="btn">
                        <FontAwesomeIcon
                          className="animate-spin text-white"
                          icon={faCircleNotch}
                        />
                      </button>
                    )}
                    {loginError && (
                      <p className="text-red-500 mt-2">{loginError}</p>
                    )}
                  </form>
                </div>
                <div
                  onClick={() => {
                    dispatch(openPasswordModal());
                    dispatch(closeLoginModal());
                  }}
                  className="text-center text-[#116be9] font-light text-[14px] w-fit mt-0 mx-auto mb-[16px] cursor-pointer"
                >
                  Forgot your password
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(closeLoginModal());
                    dispatch(openSignupModal());
                  }}
                >
                  Don't have an account?
                </button>
                <div
                  onClick={() => dispatch(closeLoginModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {isSignupOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal
            open={isSignupOpen}
            onClose={() => dispatch(closeSignupModal())}
          >
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Sign up to Summarist
                  </div>
                  {!isGoogleLoading ? (
                    <button className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                      <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
                        <img
                          className="w-[24px] h-[24px]"
                          src="/assets/google.png"
                          alt=""
                        />
                      </figure>
                      <div onClick={handleGoogleLogin}>Sign up with Google</div>
                    </button>
                  ) : (
                    <button className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                      <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
                        <img
                          className="w-[24px] h-[24px]"
                          src="/assets/google.png"
                          alt=""
                        />
                      </figure>
                      <FontAwesomeIcon
                        className="animate-spin text-white"
                        icon={faCircleNotch}
                      />
                    </button>
                  )}
                  <div className="flex items-center my-[16px]">
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                    <span className="mx-[24px] text-[14px] text-[#394547] font-medium">
                      or
                    </span>
                    <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                  </div>
                  <form className="flex flex-col gap-[16px]">
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="text"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isSignupLoading ? (
                      <button onClick={handleSignup} className="btn">
                        <span>Sign up</span>
                      </button>
                    ) : (
                      <button onClick={handleSignup} className="btn">
                        <FontAwesomeIcon
                          className="animate-spin text-white"
                          icon={faCircleNotch}
                        />
                      </button>
                    )}
                  </form>
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(openLoginModal());
                    dispatch(closeSignupModal());
                  }}
                >
                  Already have an account?
                </button>
                <div
                  onClick={() => dispatch(closeSignupModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {isPasswordOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal
            open={isPasswordOpen}
            onClose={() => dispatch(closePasswordModal())}
          >
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Reset your password
                  </div>
                  <form className="flex flex-col gap-[16px]">
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="text"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      // onClick={handleLogin}
                      className="btn"
                    >
                      <span>Send reset password link</span>
                    </button>
                  </form>
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(openLoginModal());
                    dispatch(closePasswordModal());
                  }}
                >
                  Go to login
                </button>
                <div
                  onClick={() => dispatch(closePasswordModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
