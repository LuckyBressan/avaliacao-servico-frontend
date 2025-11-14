import { Outlet } from "react-router-dom";
import AvaliacaoProvider from "./providers/AvaliacaoProvider";

function App() {
  return (
    <>
      <main className="h-dvh flex items-center justify-center overflow-auto">
        <AvaliacaoProvider>
          <Outlet />
        </AvaliacaoProvider>
      </main>
    </>
  );
}

export default App;
