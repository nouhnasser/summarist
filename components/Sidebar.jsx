import { app } from "@/firebase";
import {
  closeLoginModal,
  closePasswordModal,
  closeSidebarModal,
  closeSignupModal,
} from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  faBookmark,
  faCircleQuestion,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar({ className }) {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const isOpen = useSelector((state) => state.modal.openSidebar);

  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    dispatch(closeLoginModal());
    dispatch(closeSignupModal());
    dispatch(closePasswordModal());
    dispatch(signOutUser());
    router.push("/");
    console.log("logged out");
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(closeSidebarModal());
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className="sidebar__overlay"></div>
          <div
            className={`sidebar ${
              isOpen ? `sidebar--open` : `sidebar--closed`
            }`}
            ref={sidebarRef}
          >
            <div className="sidebar__logo">
              <img src="/assets/logo.png" className="w-full h-[40px]" alt="" />
            </div>
            <div className="sidebar__wrapper">
              <div className="sidebar__top">
                <Link
                  onClick={() => dispatch(closeSidebarModal())}
                  className="sidebar__link--wrapper"
                  href="/for-you"
                >
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faHouse}
                    />
                  </div>
                  <div className="sidebar__link--text">For you</div>
                </Link>
                <div className="sidebar__link--wrapper cursor-not-allowed">
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faBookmark}
                    />
                  </div>
                  <div className="sidebar__link--text">My Library</div>
                </div>
                <div className="sidebar__link--wrapper cursor-not-allowed">
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faPen}
                    />
                  </div>
                  <div className="sidebar__link--text">Highlights</div>
                </div>
                <div className="sidebar__link--wrapper cursor-not-allowed">
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faMagnifyingGlass}
                    />
                  </div>
                  <div className="sidebar__link--text">Search</div>
                </div>
              </div>
              <div className="sidebar__bottom">
                <Link
                  onClick={() => dispatch(closeSidebarModal())}
                  className="sidebar__link--wrapper"
                  href="/settings"
                >
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faGear}
                    />
                  </div>
                  <div className="sidebar__link--text">Settings</div>
                </Link>
                <div className="sidebar__link--wrapper cursor-not-allowed">
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faCircleQuestion}
                    />
                  </div>
                  <div className="sidebar__link--text">Help & Support</div>
                </div>
                <div
                  onClick={handleSignOut}
                  className="sidebar__link--wrapper cursor-not-allowed"
                >
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faRightFromBracket}
                    />
                  </div>
                  <div className="sidebar__link--text">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="hidden md:block bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-screen z-50">
        <div className="flex items-center justify-center h-[60px] pt-[16px] max-w-[160px] mx-auto">
          <img
            className="w-full h-[40px] bg-transparent"
            src="/assets/logo.png"
          />
        </div>
        <div
          className={`flex flex-col justify-between sidebar__height ${className} pb-[20px] overflow-y-auto`}
        >
          <div className="flex-1 mt-[40px]">
            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="bg-lime-500 w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faHouse} />
              </div>
              <div>For You</div>
            </Link>

            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="bg-lime-500 w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faBookmark}
                />
              </div>
              <div>My Library</div>
            </Link>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faPen} />
              </div>
              <div>Highlights</div>
            </div>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faMagnifyingGlass}
                />
              </div>
              <div>Search</div>
            </div>
          </div>

          <div>
            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faGear} />
              </div>
              <div>Settings</div>
            </Link>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faCircleQuestion}
                />
              </div>
              <div>Help & Support</div>
            </div>

            <div
              onClick={handleSignOut}
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faRightFromBracket}
                />
              </div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
