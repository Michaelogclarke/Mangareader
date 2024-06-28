import ChapterAside from "./components/ChapterAside";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <aside>
        <ChapterAside></ChapterAside>
      </aside>
    </div>
  );
}

export default App;
