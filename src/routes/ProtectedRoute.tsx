import { Navigate } from "react-router-dom";
import LayoutInterno from "../layouts/LayoutInterno";

export default function ProtectedRoute() {
    const token = null;

    if(!token){
        return <Navigate to="/login" replace />;
    }

    return <LayoutInterno />;
};
