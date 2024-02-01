import {
  faBars,
  faClock,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchBarSkeleton from "./Skeleton/SearchBarSkeleton";
import { useDispatch } from "react-redux";
import { openSidebarModal } from "@/redux/modalSlice";

export default function SearchBar() {
  const [showBooksWrapper, setShowBooksWrapper] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchIcon, setSearchIcon] = useState(faMagnifyingGlass);
  const [searching, setSearching] = useState(false);
  const searchBackgroundRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      setSearchIcon(faXmark);
      setSearching(true);
      setShowBooksWrapper(true);
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${inputValue}`
        );
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowBooksWrapper(false);
      setSearchResults([]);
    }
  };

  const closeSearchResults = () => {
    setShowBooksWrapper(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBackgroundRef.current &&
        !searchBackgroundRef.current.contains(event.target)
      ) {
        setShowBooksWrapper(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="search__background">
        <div className="search__wrapper">
          <figure>
            <img src="logo" alt="" />
          </figure>
          <div className="search__content">
            <div className="search">
              <div className="search__input--wrapper">
                <input
                  className="search__input"
                  placeholder="Search for books"
                  type="text"
                  onChange={handleInputChange}
                  ref={inputRef}
                />
                <div className="search__icon">
                  <FontAwesomeIcon
                    className={`w-[24px] h-[24px] text-[#03314b] ${
                      searching ? "iconXMark" : ""
                    }`}
                    icon={searching ? faXmark : searchIcon}
                    onClick={searching ? closeSearchResults : null}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => dispatch(openSidebarModal())}
              className="hidden burger__menu items-center justify-center cursor-pointer"
            >
              <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faBars} />
            </div>
          </div>

          {showBooksWrapper && (
            <div className="search__books--wrapper">
              {isLoading ? (
                new Array(5).fill(0).map((_, index) => <SearchBarSkeleton />)
              ) : searchResults.length === 0 ? (
                <div>No books found</div>
              ) : (
                searchResults.map((book) => (
                  <Link
                    href={`/book/${book.id}`}
                    key={book.id}
                    className="search__book--link"
                  >
                    <audio src="audio-source"></audio>
                    <figure className="book__image--wrapper">
                      <img
                        src={book.imageLink}
                        alt=""
                        className="w-full h-full"
                      />
                    </figure>
                    <div>
                      <div className="search__book--title">{book.title}</div>
                      <div className="search__book--author">{book.author}</div>
                      <div className="search__book--duration">
                        <div className="recommended__book--details">
                          <div className="recommended__book--details-icon">
                            <FontAwesomeIcon
                              icon={faClock}
                              className="w-full h-full"
                            />
                          </div>
                          <div class="recommended__book--details-text">
                            03:24
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
