import { HiOutlineArrowUp } from "react-icons/hi2";

function ButtonScrollToTop() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button className="btn-scroll-top" onClick={handleClick}>
      <HiOutlineArrowUp />
    </button>
  );
}

export default ButtonScrollToTop;
