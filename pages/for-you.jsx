import Recommended from "@/components/Recommended";
import SearchBar from "@/components/SearchBar";
import Selected from "@/components/Selected";
import Sidebar from "@/components/Sidebar";
import Suggested from "@/components/Suggested";

export default function forYou() {
  return (
    <>
      <div className="relative flex flex-col ml-[200px] foryou__height wrapper">
        <SearchBar />
        <Sidebar />
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <Selected />
              <Recommended />
              <Suggested />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
