"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function Exercicio1() {
  const categoria = getCategoria("react")!;
  const exercicio = getExercicio("react", 1)!;

  // useState para armazenar o valor do contador
  const [contador, setContador] = useState(0);

  // Função para incrementar
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para decrementar (não pode ser menor que zero)
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  // Função para resetar
  const resetar = () => {
    setContador(0);
  };

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
      <div className="space-y-6">
        {/* Contador Visual */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-slate-900/50 p-8">
          {/* Valor do contador */}
          <div className="mb-8">
            <span className={`text-8xl font-bold transition-colors ${
              contador === 0 ? "text-slate-500" : "text-cyan-400"
            }`}>
              {contador}
            </span>
          </div>

          {/* Botões de controle */}
          <div className="flex items-center gap-4">
            <button
              onClick={decrementar}
              disabled={contador === 0}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-600 text-2xl font-bold text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              −
            </button>

            <button
              onClick={resetar}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-700/50 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
              title="Resetar"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <button
              onClick={incrementar}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              +
            </button>
          </div>

          {/* Mensagem de estado */}
          <p className="mt-6 text-sm text-slate-400">
            {contador === 0 && "O contador está zerado"}
            {contador > 0 && contador < 10 && "Continue incrementando!"}
            {contador >= 10 && contador < 50 && "Você está indo bem! 🎯"}
            {contador >= 50 && "Uau, você é persistente! 🚀"}
          </p>
        </div>

        {/* Conceitos de React */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-2xl">⚛️</span>
            Conceitos de React utilizados
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-cyan-400">useState</h4>
              <p className="mt-1 text-sm text-slate-400">
                Hook para criar estado local. O contador é armazenado no estado e re-renderiza quando muda.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const [contador, setContador] = useState(0);`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-cyan-400">Atualizando Estado</h4>
              <p className="mt-1 text-sm text-slate-400">
                Chamamos setContador com o novo valor para atualizar o estado.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const incrementar = () => {
  setContador(contador + 1);
};

const decrementar = () => {
  if (contador > 0) {
    setContador(contador - 1);
  }
};`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-cyan-400">Botão Desabilitado</h4>
              <p className="mt-1 text-sm text-slate-400">
                O botão de decrementar é desabilitado quando o contador é zero.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`<button
  onClick={decrementar}
  disabled={contador === 0}
>
  −
</button>`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-cyan-400">Classes Condicionais</h4>
              <p className="mt-1 text-sm text-slate-400">
                A cor do número muda baseada no valor do contador.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`<span className={\`text-8xl \${
  contador === 0 ? "text-slate-500" : "text-cyan-400"
}\`}>
  {contador}
</span>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
