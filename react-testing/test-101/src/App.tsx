// import { Greet } from "./components/greet/Greet";
// import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <>
      {/* <Greet name="Raktim" /> */}
      {/* <Application /> */}
      <Skills skills={["HTML", "CSS", "Javascript"]} />
    </>
  );
}

export default App;
