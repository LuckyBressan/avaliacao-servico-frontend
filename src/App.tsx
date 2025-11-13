import { Outlet } from "react-router-dom";
import AvaliacaoProvider from "./providers/AvaliacaoProvider";

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <AvaliacaoProvider>
          <Outlet />
        </AvaliacaoProvider>
      </main>
    </>
  );
}

export default App;
