import { Outlet } from "react-router-dom";
import AvaliacaoProvider from "../providers/AvaliacaoProvider";

export default function LayoutAvaliacao() {
    return(
        <AvaliacaoProvider>
            <main className="h-dvh flex items-center justify-center overflow-auto">
                <Outlet />
            </main>
        </AvaliacaoProvider>
    )
};
