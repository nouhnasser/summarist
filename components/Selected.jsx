import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectedSkeleton from "./Skeleton/SelectedSkeleton";

export default function Selected() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const users = useSelector((state) => state.user.currentUser);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  async function fetchSelectedBooks() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    setLoading(false);
    setSelectedBooks(data || []);
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    fetchSelectedBooks();
  }, []);

  return (
    <>
      <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
        Selected just for you
      </div>
      {loading ? (
        <SelectedSkeleton />
      ) : (
        selectedBooks.length > 0 &&
        selectedBooks.map((selectedBook, index) => (
          <Link
            key={index}
            className="flex justify-between selected__width bg-[#fbefd6] rounded-[4px] p-[24px] mb-[24px] gap-[24px] selected__book"
            href={`/book/${selectedBook.id}`}
          >
            <div className="text-[#032b41] w-2/5 selected__book--subtitle">
              {selectedBook.subTitle}
            </div>
            <div className="hidden md:flex w-[1px] bg-[#bac8ce]"></div>
            <div className="flex gap-[16px] w-3/5 selected__book--content">
              <figure className="h-[140px] w-[140px] min-w-[140px]">
                <img
                  className={`w-full h-full ${
                    imageLoaded ? "" : "selected__book--img-skeleton"
                  }`}
                  src={selectedBook.imageLink}
                  alt=""
                  onLoad={handleImageLoad}
                />
              </figure>
              <div className="w-full">
                <div className="font-[600] text-[#032b41] mb-[8px]">
                  {selectedBook.title}
                </div>
                <div className="text-[14px] text-[#394547] mb-[16px]">
                  {selectedBook.author}
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="flex items-center w-[40px] min-w-[40px] h-[40px]">
                    <FontAwesomeIcon
                      className="w-full h-full flex justify-center rounded-full items-center py-[4px] pr-[4px] pl-6px]"
                      icon={faCirclePlay}
                    />
                  </div>
                  <div className="text-[14px] font-normal text-[#032b41]">
                    3 mins 23 secs
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
