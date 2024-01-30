import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import About from "./pages/About";
import Skils from "./features/Skils";
import Services from "./pages/Services";
import Xp from "./pages/Xp";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ul className="flex space-x-8 absolute top-10 text-md text-gray-600 z-[1000]">
        <li style={{ cursor: "pointer" }}>Sobre</li>
        <li>Serviços</li>
        <li>Experiências</li>
        <li>Conhecimentos</li>
        <li>Projetos</li>
      </ul>
      <div className="absolute z-10">
        <TransformWrapper initialScale={1} limitToBounds={false}>
          <TransformComponent>
            <div
              className={`flex flex-row items-center justify-center w-screen h-screen transform transition-transform duration-300`}
            >
              <Projects />
              <div className={`flex flex-col items-center justify-center`}>
                <About />
                <Services />
              </div>
              <Xp />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <Skils />
      <div className="absolute bottom-10 text-gray-600 text-sm">
        Made with 💜 by Dionei Bianchati
      </div>
    </div>
  );
}

export default App;
