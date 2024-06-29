import ChapterAside from "./components/ChapterAside";
import ListGroup from "./components/ListGroup";
import MangaPages from "./components/MangaPages";
import NavBar from "./components/NavBar";
import "./components/styles/App.css";

function App() {
  return (
    <div className="Wrapper">
      <NavBar />
      <div>
        <aside>
          <ChapterAside />
        </aside>
        <main>
          <MangaPages />
        </main>
      </div>
    </div>
  );
}

export default App;
