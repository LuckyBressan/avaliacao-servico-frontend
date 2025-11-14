import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import api from "../services/api";
import type { AxiosResponse } from "axios";
import type { Pergunta } from "../@types/Pergunta";

interface AvaliacaoContextType {
  perguntas: Pergunta[];
  loading: boolean;
  avaliar: (dispositivoId: string | number) => Promise<Pergunta[] | void>;
  concluirAvaliacao: (payload: any, dispositivoId: string|number) => Promise<AxiosResponse<{ code: number, message?: string }>>;
}

const AvaliacaoContext = createContext<AvaliacaoContextType | undefined>(
  undefined
);

export function useAvaliacaoContext() {
  const context = useContext(AvaliacaoContext);
  if (!context)
    throw new Error(
      "useAvaliacaoContext must be used within AvaliacaoProvider"
    );
  return context;
}

export default function AvaliacaoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [loading, setLoading] = useState(false);

  const avaliar = async (dispositivoId: string | number) => {
    try {
      setLoading(true);
      const res = await api.get(`/`, {
        params: { operacao: "AVALIAR", dispositivo: dispositivoId },
      });

      const data = res.data;
      const found = Array.isArray(data) ? data : (data.perguntas ?? data);
      if (Array.isArray(found)) setPerguntas(found as Pergunta[]);
      return found as Pergunta[];
    } catch (err) {
      console.error("Erro ao buscar perguntas de avaliação:", err);
    } finally {
      setLoading(false);
    }
  };

  const concluirAvaliacao = async (payload: any, dispositivoId: string|number) => {
    try {
      const res = await api.post(`/?operacao=CONCLUIR&dispositivo=${dispositivoId}`, {
        avaliacao: payload
      });
      return res;
    } catch (err) {
      console.error("Erro ao concluir avaliação:", err);
      return err as any;
    }
  };

  useEffect(() => {
    setPerguntas([]);
  }, []);

  return (
    <AvaliacaoContext.Provider
      value={{ perguntas, loading, avaliar, concluirAvaliacao }}>
      {children}
    </AvaliacaoContext.Provider>
  );
}
