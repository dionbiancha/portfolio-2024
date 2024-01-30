import "../../App.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiStorybook } from "react-icons/si";

function Skils() {
  return (
    <div
      style={{ marginTop: "30px", marginBottom: "30px", opacity: 0.2 }}
      x-data="{}"
      x-init="$nextTick(() => {
    let ul = $refs.logos;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
})"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <FaHtml5 width="30px" style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <IoLogoJavascript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTypescript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <FaReact style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiNextdotjs style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTailwindcss style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiCss3 style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiStorybook style={{ width: "50px", height: "50px" }} />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <FaHtml5 width="30px" style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <IoLogoJavascript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTypescript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <FaReact style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiNextdotjs style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTailwindcss style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiCss3 style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiStorybook style={{ width: "50px", height: "50px" }} />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <FaHtml5 width="30px" style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <IoLogoJavascript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTypescript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <FaReact style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiNextdotjs style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTailwindcss style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiCss3 style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiStorybook style={{ width: "50px", height: "50px" }} />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <FaHtml5 width="30px" style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <IoLogoJavascript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTypescript style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <FaReact style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiNextdotjs style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiTailwindcss style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiCss3 style={{ width: "50px", height: "50px" }} />
        </li>
        <li>
          <SiStorybook style={{ width: "50px", height: "50px" }} />
        </li>
      </ul>
    </div>
  );
}

export default Skils;
