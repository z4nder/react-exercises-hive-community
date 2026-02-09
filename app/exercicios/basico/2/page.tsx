"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function Exercicio2() {
  const categoria = getCategoria("basico")!;
  const exercicio = getExercicio("basico", 2)!;

  // ============================================
  // 1. CRIE SEUS ESTADOS AQUI
  // Exemplo: const [numero1, setNumero1] = useState("");
  // ============================================



  // ============================================
  // 2. CRIE A FUNÇÃO PARA PROCESSAR O FORMULÁRIO
  // Exemplo:
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // seus cálculos aqui
  // };
  // ============================================



  // ============================================
  // 3. CRIE A FUNÇÃO PARA LIMPAR (OPCIONAL)
  // Exemplo:
  // const handleReset = () => {
  //   setNumero1("");
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

          Substitua este bloco pelo seu formulário.

          Você vai precisar de:
          - 2 inputs do tipo "number" para os números
          - 1 botão para calcular
          - 1 área para mostrar o resultado

          Consulte o Guia de Estudos em /guia
          ou veja o exercício 1 como exemplo.
          ============================================ */}

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center">
        <div className="mb-4 text-6xl">🚀</div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          Comece aqui!
        </h3>
        <p className="mb-6 max-w-md text-slate-400">
          Substitua este bloco pelo seu código.
          Crie os inputs, processe os dados e mostre o resultado.
        </p>
        <div className="flex gap-3">
          <a
            href="/guia#exemplo"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Ver Guia
          </a>
          <a
            href="/exercicios/basico/1"
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Ver Exemplo
          </a>
        </div>
      </div>
    </ExerciseLayout>
  );
}
