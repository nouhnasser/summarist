import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import RecommendedSkeleton from "./Skeleton/RecommendedSkeleton";

export default function Suggested() {
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  async function fetchSuggestedBooks() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    setLoading(false);
    setSuggestedBooks(data || []);
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    fetchSuggestedBooks();
  }, []);

  return (
    <>
      <div>
        <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
          Suggested Books
        </div>
        <div className="font-light text-[#394547] mb-[16px]">
          Browse these books
        </div>
        <div className="scrollbar flex overflow-x-auto gap-[16px] snap-x snap-mandatory mb-[32px]">
          {loading
            ? new Array(6)
                .fill(0)
                .map((_, index) => <RecommendedSkeleton key={index} />)
            : suggestedBooks.length > 0 &&
              suggestedBooks.map((suggestedBook, index) => (
                <Link
                  key={index}
                  href={`/book/${suggestedBook.id}`}
                  className="relative snap-start pt-[32px] px-[12px] pb-[12px] no-underline rounded-[4px] max-w-[200px] w-full"
                >
                  {suggestedBook.subscriptionRequired === true && (
                    <div className="bg-[#032b41] w-fit h-[18px] px-[8px] absolute top-0 right-0 text-white text-[10px] flex items-center rounded-[20px]">
                      Premium
                    </div>
                  )}
                  <figure className="mb-[8px] w-[172px] h-[172px]">
                    <img
                      className={`w-full h-full ${
                        imageLoaded ? "" : "recommended__book--img-skeleton"
                      }`}
                      src={suggestedBook.imageLink}
                      alt=""
                      onLoad={handleImageLoad}
                    />
                  </figure>
                  <div className="text-[16px] font-bold text-[032b41] mb-[8px]">
                    {suggestedBook.title}
                  </div>
                  <div className="text-[14px] text-[#6b757b] font-light mb-[8px]">
                    {suggestedBook.author}
                  </div>
                  <div className="text-[14px] text-[#394547] mb-[8px]">
                    {suggestedBook.subTitle}
                  </div>

                  <div className="flex gap-[8px]">
                    <div className="flex items-center gap-[4px] text-14px] font-light text-[#6b757b]">
                      <div className="flex w-[16px] h-[16px]">
                        <FontAwesomeIcon
                          className="w-full h-full"
                          icon={faClock}
                        />
                      </div>
                      <div className="text-[14px] font-light text-[#6b757b]">
                        03:24
                      </div>
                    </div>

                    <div className="flex items-center gap-[4px] text-14px] font-light text-[#6b757b]">
                      <div className="flex w-[16px] h-[16px]">
                        <FontAwesomeIcon
                          className="w-full h-full"
                          icon={faStar}
                        />
                      </div>
                      <div className="text-[14px] font-light text-[#6b757b]">
                        {suggestedBook.totalRating}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
}
