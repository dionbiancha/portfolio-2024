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
import { usePreview } from "./context/usePreview";

const NAV = [
  {
    title: "Sobre",
    id: "about",
    zoom: 1.5,
    cod: 0,
  },
  {
    title: "Experiências",
    id: "xp",
    zoom: 1.5,
    cod: 1,
  },
  {
    title: "Serviços",
    id: "services",
    zoom: 1.5,
    cod: 2,
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
  const {
    filter,
    setFilter,
    setOnFocus,
    setIsSmallScreen,

    disabledPageScrool,
  } = usePreview();
  const [screenMove, setScreenMove] = useState(0);
  const [podeScroll, setPodeScroll] = useState(true);

  function zoomToImage(value: string, zoom: number) {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;

      zoomToElement(value, window.innerWidth <= 1000 ? 1.3 : zoom);
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
    setIsSmallScreen(window.innerWidth <= 1000);
  }, [screenMove]);

  function handleScroll(event: WheelEvent) {
    if (!disabledPageScrool) {
      if (podeScroll) {
        if (event.deltaY > 0) {
          setScreenMove((prevCount) => prevCount + 1);
        }
        if (event.deltaY < 0) {
          setScreenMove((prevCount) => prevCount - 1);
        }
        setPodeScroll(false);
        setTimeout(() => {
          setPodeScroll(true);
        }, 800);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [podeScroll, disabledPageScrool]);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1000);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen`}>
      <ul className="cursor-pointer flex items-center justify-center space-x-8 absolute top-0 p-8 w-full  text-md text-[#9ca3af] z-[500] bg-[#111111]">
        {NAV.map((value, key) => (
          <li
            key={key}
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
