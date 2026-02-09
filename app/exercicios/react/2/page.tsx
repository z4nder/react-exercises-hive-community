"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function Exercicio2() {
  const categoria = getCategoria("react")!;
  const exercicio = getExercicio("react", 2)!;

  // ============================================
  // 1. CRIE SEU ESTADO AQUI
  // Você precisa de um estado booleano para controlar
  // se o parágrafo está visível ou não
  // Exemplo: const [visivel, setVisivel] = useState(true);
  // ============================================



  // ============================================
  // 2. CRIE A FUNÇÃO PARA ALTERNAR VISIBILIDADE
  // A função deve inverter o valor do estado
  // Exemplo:
  // const alternar = () => {
  //   setVisivel(!visivel);
  // };
  // ============================================



  return (
    <ExerciseLayout
      categoria={categoria.nome}
      categoriaId={categoria.id}
      exercicioId={exercicio.id}
      titulo={exercicio.titulo}
      descricao={exercicio.descricao}
      dica={exercicio.dica}
      corGradient={categoria.cor}
    >
      {/* ============================================
          COMECE AQUI!

          Substitua este bloco pelo seu código.

          Você vai precisar de:
          - 1 botão que alterna entre "Mostrar" e "Esconder"
          - 1 parágrafo que aparece/desaparece
          - Renderização condicional com &&

          Dica: O texto do botão deve mudar baseado no estado!
          {visivel ? "Esconder" : "Mostrar"}

          Consulte o Guia de Estudos em /guia
          ou veja o exercício 1 como exemplo.
          ============================================ */}

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center">
        <div className="mb-4 text-6xl">👁️</div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          Comece aqui!
        </h3>
        <p className="mb-6 max-w-md text-slate-400">
          Crie um botão que alterna a visibilidade de um parágrafo.
          O texto do botão deve mudar entre &quot;Mostrar&quot; e &quot;Esconder&quot;.
        </p>
        <div className="flex gap-3">
          <a
            href="/guia#exemplo"
            className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 transition-colors"
          >
            Ver Guia
          </a>
          <a
            href="/exercicios/react/1"
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Ver Exemplo
          </a>
        </div>
      </div>
    </ExerciseLayout>
  );
}
