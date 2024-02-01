import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import BookSkeleton from "@/components/Skeleton/BookSkeleton";
import {
  faBookOpen,
  faBookmark,
  faClock,
  faLightbulb,
  faMicrophone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BookInfo() {
  const router = useRouter();
  const { id } = router.query;
  const [bookData, setBookData] = useState({});
  const [loading, setLoading] = useState(false);
  const isPremium = useSelector((state) => state.user.premium);

  async function fetchBookData() {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    if (data) {
      setLoading(false);
      setBookData(data);
    }
  }

  useEffect(() => {
    fetchBookData();
  }, [id]);

  return (
    <>
      <div className="relative flex flex-col ml-[200px] foryou__height wrapper">
        <SearchBar />
        <Sidebar />
        <div className="row">
          <div className="container">
            {loading ? (
              <BookSkeleton />
            ) : (
              <div className="flex gap-[16px] bookInfo__wrapper">
                <div className="w-full bookInfo__innerbook">
                  <div className="text-[#032b41] mb-[16px] font-[600] text-[32px] bookInfo__title">
                    {bookData.title}{" "}
                    {bookData.subscriptionRequired === true && (
                      <span>(Premium)</span>
                    )}
                  </div>
                  <div className="text-[#032b41] mb-[16px] font-[600] bookInfo__author">
                    {bookData.author}
                  </div>
                  <div className="text-[20px] text-[#032b41] mb-[16px] font-[300] bookInfo__subtitle">
                    {bookData.subTitle}
                  </div>
                  <div className="border-y-[1px] border-solid border-[#e1e7ea] py-[16px] mb-[24px]">
                    <div className="flex flex-wrap max-w-[400px] gap-y-[12px]">
                      <div className="flex items-center w-2/4 text-[#032b41] font-bold text-[14px]">
                        <div className="flex h-[24px] w-[24px] mr-[4px]">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="text-[#032b41] text-[14px] mr-[4px]">
                          {bookData.averageRating}
                        </div>
                        <div>({bookData.totalRating} ratings)</div>
                      </div>
                      <div className="flex items-center w-2/4 text-[#032b41] font-bold text-[14px]">
                        <div className="flex h-[24px] w-[24px] mr-[4px]">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="w-full h-full"
                          />
                        </div>
                        <div>03:23</div>
                      </div>
                      <div className="flex items-center w-2/4 text-[#032b41] font-bold text-[14px]">
                        <div className="flex h-[24px] w-[24px] mr-[4px]">
                          <FontAwesomeIcon
                            icon={faMicrophone}
                            className="w-full h-full"
                          />
                        </div>
                        <div>Audio & Text</div>
                      </div>
                      <div className="flex items-center w-2/4 text-[#032b41] font-bold text-[14px]">
                        <div className="flex h-[24px] w-[24px] mr-[4px]">
                          <FontAwesomeIcon
                            icon={faLightbulb}
                            className="w-full h-full"
                          />
                        </div>
                        <div>{bookData.keyIdeas} Key ideas</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[16px] mb-[24px]">
                    {bookData.subscriptionRequired ? (
                      isPremium ? (
                        <Link href={`/player/${bookData.id}`}>
                          <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                            <div className="flex">
                              <FontAwesomeIcon
                                icon={faBookOpen}
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                            <div className="pl-[8px]">Read</div>
                          </button>
                        </Link>
                      ) : (
                        <Link href={`/choose-plan`}>
                          <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                            <div className="flex">
                              <FontAwesomeIcon
                                icon={faBookOpen}
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                            <div className="pl-[8px]">Read</div>
                          </button>
                        </Link>
                      )
                    ) : (
                      <Link href={`/player/${bookData.id}`}>
                        <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                          <div className="flex">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="h-[24px] w-[24px]"
                            />
                          </div>
                          <div className="pl-[8px]">Read</div>
                        </button>
                      </Link>
                    )}
                    {bookData.subscriptionRequired ? (
                      isPremium ? (
                        <Link href={`/player/${bookData.id}`}>
                          <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                            <div className="flex">
                              <FontAwesomeIcon
                                icon={faBookOpen}
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                            <div className="pl-[8px]">Listen</div>
                          </button>
                        </Link>
                      ) : (
                        <Link href={`/choose-plan`}>
                          <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                            <div className="flex">
                              <FontAwesomeIcon
                                icon={faBookOpen}
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                            <div className="pl-[8px]">Listen</div>
                          </button>
                        </Link>
                      )
                    ) : (
                      <Link href={`/player/${bookData.id}`}>
                        <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-[4px] cursor-pointer gap-8px]">
                          <div className="flex">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="h-[24px] w-[24px]"
                            />
                          </div>
                          <div className="pl-[8px]">Listen</div>
                        </button>
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center gap-[8px] text-[#0365f2] font-medium cursor-pointer mb-[40px] text-[18px] bookInfo__bookmark">
                    <div className="flex w-[20px] h-[20px]">
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className="w-full h-full"
                      />
                    </div>
                    <div>Add title to My Library</div>
                  </div>
                  <div className="text-[18px] text-[#032b41] mb-[16px] font-semibold">
                    What's it about?
                  </div>
                  <div className="flex flex-wrap gap-[16px] mb-[16px]">
                    {bookData.tags && bookData.tags[0] && (
                      <div className="bg-[#f1f6f4] px-[16px] h-[48px] flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-[4px] bookInfo__booktag">
                        {bookData.tags[0]}
                      </div>
                    )}
                    {bookData.tags && bookData.tags[1] && (
                      <div className="bg-[#f1f6f4] px-[16px] h-[48px] flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-[4px] bookInfo__booktag">
                        {bookData.tags[1]}
                      </div>
                    )}
                  </div>

                  <div className="text-[#032b41] mb-[16px] leading-6 bookInfo__description">
                    {bookData.bookDescription}
                  </div>

                  <div className="text-[18px] text-[#032b41] mb-[16px] font-semibold">
                    About the author
                  </div>
                  <div className="text-[#032b41] leading-6 bookInfo__description">
                    {bookData.authorDescription}
                  </div>
                </div>

                <div className="bookInfo__pic">
                  <figure className="h-[300px] w-[300px] min-w-[300px]">
                    <img
                      src={bookData.imageLink}
                      alt=""
                      className="block w-full h-full"
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
