// import { UniScrollbar } from "react-uni-scrollbar";
// import 'react-uni-scrollbar/dist/main.css'
import { UniScrollbar } from "./components/ReactUniScrollbar";

function App() {
  return (
    <UniScrollbar
      height={400}
      wraperStyle={{
        width: 300,
      }}
    >
      <ul>
        {Array.from({ length: 100 }).map((_, index) => (
          <li key={index}>
            UniScrollbar{index}UniScrollbar{index}UniScrollbar{index}
            UniScrollbar{index}UniScrollbar{index}UniScrollbar{index}
          </li>
        ))}
      </ul>
    </UniScrollbar>
  );
}

export default App;
