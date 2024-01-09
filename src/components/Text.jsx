import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "React Js Developer",
          "UI Developer",
          "Javascript Developer",
          "Front End Developer",
          "Database Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text