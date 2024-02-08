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
import { usePreview } from "./context/DataContext";

const NAV = [
  {
    title: "Sobre",
    id: "about",
    zoom: 1.5,
    cod: 0,
  },
  {
    title: "Serviços",
    id: "services",
    zoom: 1.5,
    cod: 2,
  },
  {
    title: "Experiências",
    id: "xp",
    zoom: 1.5,
    cod: 1,
  },
  {
    title: "Projetos",
    id: "projects",
    zoom: 1.5,
    cod: 3,
  },
];

function App() {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const { filter, setFilter, setOnFocus } = usePreview();
  const [screenMove, setScreenMove] = useState(0);

  function zoomToImage(value: string, zoom: number) {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(value, zoom);
      setOnFocus(value);
    }
  }
  useEffect(() => {
    if (filter.length > 0) {
      zoomToImage("projects", 1.5);
      setOnFocus("projects");
    }
  }, [filter]);

  useEffect(() => {
    if (screenMove > 3) {
      setScreenMove(0);
    }

    if (screenMove < 0) {
      setScreenMove(3);
    }

    if (screenMove === 0) {
      zoomToImage("about", 1.5);
      setOnFocus("about");
    }
    if (screenMove === 1) {
      zoomToImage("xp", 1.5);
      setOnFocus("xp");
    }
    if (screenMove === 2) {
      zoomToImage("services", 1.5);
      setOnFocus("services");
    }
    if (screenMove === 3) {
      zoomToImage("projects", 1.5);
      setOnFocus("projects");
    }
  }, [screenMove]);

  function handleScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      setScreenMove((prevCount) => prevCount + 1);
    }
    if (event.deltaY < 0) {
      setScreenMove((prevCount) => prevCount - 1);
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen`}>
      <ul className="cursor-pointer flex items-center justify-center space-x-8 absolute top-0 p-8 w-full  text-md text-gray-600 z-[500] bg-[#111111]">
        {NAV.map((value) => (
          <li
            className="duration-500 hover:text-[#fff]"
            onClick={() => {
              setScreenMove(value.cod);
              zoomToImage(value.id, value.zoom);
              if (value.id !== "projects") {
                setFilter([]);
              }
            }}
          >
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
      {/* <Skils /> */}
      <div className="absolute bottom-10 text-gray-600 text-sm">
        Made with 💜 by Dionei Bianchati
      </div>
    </div>
  );
}

export default App;
