import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import About from "./pages/About";
import Services from "./pages/Services";
import Xp from "./pages/Xp";
import Projects from "./pages/Projects";
import { useEffect, useRef, useState } from "react";

const NAV = [
  {
    title: "Sobre",
    id: "about",
    zoom: 1.5,
  },
  {
    title: "Serviços",
    id: "services",
    zoom: 1.5,
  },
  {
    title: "Experiências",
    id: "xp",
    zoom: 1.5,
  },
  {
    title: "Projetos",
    id: "projects",
    zoom: 1.3,
  },
];

function App() {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [onFocus, setOnFocus] = useState("");

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  function zoomToImage(value: string, zoom: number) {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      setOnFocus(value);
      zoomToElement(value, zoom);
    }
  }
  useEffect(() => {
    zoomToImage("about", 1.5);
    setOnFocus("about");
  }, []);
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      } flex items-center justify-center min-h-screen`}
    >
      <ul className="cursor-pointer flex items-center justify-center space-x-8 absolute top-0 p-8 w-full  text-md text-gray-600 z-[500] bg-[#111111]">
        {NAV.map((value) => (
          <li onClick={() => zoomToImage(value.id, value.zoom)}>
            {value.title}
          </li>
        ))}
      </ul>
      <div className="absolute z-10">
        <TransformWrapper
          disabled
          initialScale={1}
          limitToBounds={false}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <div
              className={`flex flex-row items-center justify-center w-screen h-screen transform transition-transform duration-300`}
            >
              <Projects onFocus={onFocus} />
              <div className={`flex flex-col items-center justify-center`}>
                <About onFocus={onFocus} />
                <Services onFocus={onFocus} />
              </div>
              <Xp onFocus={onFocus} />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      {/* <Skils /> */}
      <div className="absolute bottom-10 text-gray-600 text-sm">
        Made with 💜 by Dionei Bianchati
      </div>
    </div>
  );
}

export default App;
