import "./styles/MangaPages.css";
import RightImg from "./001.jpg";
import LeftImg from "./002.jpg";

function MangaPages() {
  return (
    <div className="MangaContainer">
      <div className="PageContainer">
        <img className="PageLeft" src={LeftImg} alt="Manga" />
        <img className="PageRight" src={RightImg} alt="Manga" />
      </div>
      <div className="ButtonContainer">
        <button>Next</button>
        <button>Previous</button>
      </div>
    </div>
  );
}

export default MangaPages;
