"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function ExercicioRepeticao1() {
  const categoria = getCategoria("repeticao")!;
  const exercicio = getExercicio("repeticao", 1)!;

  // Estado para os números digitados (array)
  const [numeros, setNumeros] = useState<number[]>([]);
  const [inputAtual, setInputAtual] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  // Quantidade de números (reduzido para 10 para ser mais prático)
  const QUANTIDADE_TOTAL = 10;

  // Adicionar número à lista
  const handleAdicionarNumero = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputAtual === "") return;

    const numero = parseInt(inputAtual);
    const novosNumeros = [...numeros, numero];
    setNumeros(novosNumeros);
    setInputAtual("");

    // Verifica se chegou ao total
    if (novosNumeros.length >= QUANTIDADE_TOTAL) {
      setFinalizado(true);
    }
  };

  // Calcular soma
  const soma = numeros.reduce((acc, num) => acc + num, 0);

  // Resetar
  const handleReset = () => {
    setNumeros([]);
    setInputAtual("");
    setFinalizado(false);
  };

  return (
    <ExerciseLayout
      categoria={categoria.nome}
      categoriaId={categoria.id}
      exercicioId={exercicio.id}
      titulo={exercicio.titulo}
      descricao={`Digite ${QUANTIDADE_TOTAL} números inteiros e veja a soma total. (Adaptado de 100 para ${QUANTIDADE_TOTAL} para facilitar o teste)`}
      dica={exercicio.dica}
      corGradient={categoria.cor}
    >
      <div className="space-y-6">
        {/* Progresso */}
        <div className="rounded-lg bg-slate-800/50 p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-400">Progresso</span>
            <span className="font-medium text-white">
              {numeros.length} / {QUANTIDADE_TOTAL}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300"
              style={{ width: `${(numeros.length / QUANTIDADE_TOTAL) * 100}%` }}
            />
          </div>
        </div>

        {/* Formulário de Input */}
        {!finalizado && (
          <form onSubmit={handleAdicionarNumero} className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="numero" className="mb-2 block text-sm font-medium text-slate-300">
                Número {numeros.length + 1} de {QUANTIDADE_TOTAL}
              </label>
              <input
                type="number"
                id="numero"
                value={inputAtual}
                onChange={(e) => setInputAtual(e.target.value)}
                placeholder={`Digite o ${numeros.length + 1}º número`}
                autoFocus
                className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={inputAtual === ""}
              className="self-end rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 font-medium text-white transition-all hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Adicionar
            </button>
          </form>
        )}

        {/* Lista de números adicionados */}
        {numeros.length > 0 && (
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
            <h3 className="mb-3 text-sm font-medium text-slate-400">
              Números digitados:
            </h3>
            <div className="flex flex-wrap gap-2">
              {numeros.map((num, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-700 px-3 py-1 text-sm"
                >
                  <span className="text-slate-400">{index + 1}.</span>
                  <span className="font-medium text-white">{num}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Soma parcial (enquanto digita) */}
        {numeros.length > 0 && !finalizado && (
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
            <p className="text-sm text-orange-300">
              Soma parcial: <span className="text-xl font-bold text-white">{soma}</span>
            </p>
          </div>
        )}

        {/* Resultado Final */}
        {finalizado && (
          <div className="animate-fadeIn rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-emerald-400">
              Resultado Final
            </h3>

            {/* Visualização da soma */}
            <div className="mb-4 rounded-lg bg-slate-800/50 p-4">
              <p className="mb-2 text-sm text-slate-400">Operação:</p>
              <p className="text-lg text-slate-300">
                {numeros.join(" + ")} =
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-400">Soma total dos {QUANTIDADE_TOTAL} números:</p>
              <p className="text-5xl font-bold text-emerald-400">{soma}</p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full rounded-lg border border-slate-600 bg-slate-700/50 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
            >
              Recomeçar
            </button>
          </div>
        )}

        {/* Botão limpar (enquanto não finalizou) */}
        {numeros.length > 0 && !finalizado && (
          <button
            onClick={handleReset}
            className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
          >
            Limpar e Recomeçar
          </button>
        )}

        {/* Conceitos do React */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-2xl">⚛️</span>
            Conceitos de React utilizados
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-orange-400">Estado com Array</h4>
              <p className="mt-1 text-sm text-slate-400">
                Usamos um array para armazenar múltiplos valores.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const [numeros, setNumeros] = useState<number[]>([]);

// Adicionar item ao array (sem mutar o original)
const novosNumeros = [...numeros, novoNumero];
setNumeros(novosNumeros);`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-orange-400">Array.map() para renderizar lista</h4>
              <p className="mt-1 text-sm text-slate-400">
                Transformamos cada item do array em um elemento React.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`{numeros.map((num, index) => (
  <span key={index}>{num}</span>
))}`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-orange-400">Array.reduce() para somar</h4>
              <p className="mt-1 text-sm text-slate-400">
                Calculamos a soma de todos os números do array.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const soma = numeros.reduce((acc, num) => acc + num, 0);`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-orange-400">Spread Operator (...)</h4>
              <p className="mt-1 text-sm text-slate-400">
                Usado para copiar o array e adicionar novos itens sem mutar o original.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`// Cria novo array com todos os números + o novo
const novosNumeros = [...numeros, novoNumero];`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
