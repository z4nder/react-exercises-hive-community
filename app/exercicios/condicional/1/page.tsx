"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function ExercicioCondicional1() {
  const categoria = getCategoria("condicional")!;
  const exercicio = getExercicio("condicional", 1)!;

  // Estados para os três valores
  const [valorA, setValorA] = useState("");
  const [valorB, setValorB] = useState("");
  const [valorC, setValorC] = useState("");
  const [resultado, setResultado] = useState<{
    soma: number;
    c: number;
    isMenor: boolean;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const a = parseFloat(valorA);
    const b = parseFloat(valorB);
    const c = parseFloat(valorC);
    const soma = a + b;

    setResultado({
      soma,
      c,
      isMenor: soma < c,
    });
  };

  const handleReset = () => {
    setValorA("");
    setValorB("");
    setValorC("");
    setResultado(null);
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
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Valor A */}
            <div>
              <label htmlFor="valorA" className="mb-2 block text-sm font-medium text-slate-300">
                Valor A
              </label>
              <input
                type="number"
                id="valorA"
                value={valorA}
                onChange={(e) => setValorA(e.target.value)}
                placeholder="Digite A"
                step="any"
                className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Valor B */}
            <div>
              <label htmlFor="valorB" className="mb-2 block text-sm font-medium text-slate-300">
                Valor B
              </label>
              <input
                type="number"
                id="valorB"
                value={valorB}
                onChange={(e) => setValorB(e.target.value)}
                placeholder="Digite B"
                step="any"
                className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Valor C */}
            <div>
              <label htmlFor="valorC" className="mb-2 block text-sm font-medium text-slate-300">
                Valor C
              </label>
              <input
                type="number"
                id="valorC"
                value={valorC}
                onChange={(e) => setValorC(e.target.value)}
                placeholder="Digite C"
                step="any"
                className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={!valorA || !valorB || !valorC}
              className="flex-1 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:from-violet-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verificar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-slate-600 bg-slate-700/50 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
            >
              Limpar
            </button>
          </div>
        </form>

        {/* Resultado */}
        {resultado && (
          <div className={`animate-fadeIn rounded-xl border p-6 ${
            resultado.isMenor
              ? "border-emerald-500/30 bg-emerald-500/10"
              : "border-red-500/30 bg-red-500/10"
          }`}>
            <h3 className={`mb-4 text-lg font-semibold ${
              resultado.isMenor ? "text-emerald-400" : "text-red-400"
            }`}>
              Resultado
            </h3>

            {/* Visualização da operação */}
            <div className="mb-4 flex items-center justify-center gap-3 rounded-lg bg-slate-800/50 p-4">
              <span className="text-2xl font-bold text-white">{valorA}</span>
              <span className="text-xl text-slate-400">+</span>
              <span className="text-2xl font-bold text-white">{valorB}</span>
              <span className="text-xl text-slate-400">=</span>
              <span className="text-2xl font-bold text-violet-400">{resultado.soma}</span>
            </div>

            {/* Comparação visual */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-sm text-slate-400">A + B</p>
                <p className="text-3xl font-bold text-violet-400">{resultado.soma}</p>
              </div>

              <div className={`text-4xl ${resultado.isMenor ? "text-emerald-400" : "text-red-400"}`}>
                {resultado.isMenor ? "<" : "≥"}
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-400">C</p>
                <p className="text-3xl font-bold text-violet-400">{resultado.c}</p>
              </div>
            </div>

            {/* Mensagem */}
            <div className={`mt-4 rounded-lg p-4 text-center ${
              resultado.isMenor ? "bg-emerald-500/20" : "bg-red-500/20"
            }`}>
              <p className="text-lg font-medium text-white">
                {resultado.isMenor ? (
                  <>A soma de A + B <span className="text-emerald-400">É MENOR</span> que C</>
                ) : (
                  <>A soma de A + B <span className="text-red-400">NÃO É MENOR</span> que C</>
                )}
              </p>
            </div>
          </div>
        )}

        {/* Conceitos do React */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-2xl">⚛️</span>
            Conceitos de React utilizados
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-violet-400">Operador Ternário</h4>
              <p className="mt-1 text-sm text-slate-400">
                Usado para renderizar conteúdo diferente baseado em uma condição.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`{resultado.isMenor ? (
  <p>É MENOR</p>
) : (
  <p>NÃO É MENOR</p>
)}`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-violet-400">Estado com Objeto</h4>
              <p className="mt-1 text-sm text-slate-400">
                O resultado armazena múltiplos valores em um único estado.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const [resultado, setResultado] = useState<{
  soma: number;
  c: number;
  isMenor: boolean;
} | null>(null);`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-violet-400">Classes Condicionais</h4>
              <p className="mt-1 text-sm text-slate-400">
                Mudamos as cores (verde/vermelho) baseado no resultado.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`className={resultado.isMenor
  ? "border-emerald-500/30"
  : "border-red-500/30"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
