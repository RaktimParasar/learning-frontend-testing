// import { Greet } from "./components/greet/Greet";
// import { Application } from "./components/application/Application";
// import { Skills } from "./components/skills/Skills";
// import { Counter } from "./components/counter/Counter";
// import { MuiMode } from "./components/mui/mui-mode";
// import { AppProviders } from "./providers/app-providers";

import { CounterTwo } from "./components/counter2/CounterTwo";

function App() {
  return (
    <>
      {/* <Greet name="Raktim" /> */}
      {/* <Application /> */}
      {/* <Skills skills={["HTML", "CSS", "Javascript"]} /> */}
      {/* <Counter /> */}
      {/* <AppProviders>
        <div className="App">
          <MuiMode />
        </div>
      </AppProviders> */}
      <CounterTwo count={0} />
    </>
  );
}

export default App;
