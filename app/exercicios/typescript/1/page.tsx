"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

// Tipagem de variáveis com TypeScript
const nome: string = "Maria Silva";
const idade: number = 28;
const ativo: boolean = true;
const hobbies: string[] = ["Programação", "Leitura", "Música", "Viagens"];

export default function Exercicio1() {
  const categoria = getCategoria("typescript")!;
  const exercicio = getExercicio("typescript", 1)!;

  // Estado para mostrar/esconder os tipos
  const [mostrarTipos, setMostrarTipos] = useState(true);

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
        {/* Toggle para mostrar tipos */}
        <div className="flex justify-end">
          <button
            onClick={() => setMostrarTipos(!mostrarTipos)}
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700"
          >
            {mostrarTipos ? "Esconder tipos" : "Mostrar tipos"}
          </button>
        </div>

        {/* Cards com as variáveis */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Nome */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">nome</span>
              {mostrarTipos && (
                <span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-mono text-blue-400">
                  string
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span className="text-xl font-semibold text-white">{nome}</span>
            </div>
          </div>

          {/* Idade */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">idade</span>
              {mostrarTipos && (
                <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs font-mono text-green-400">
                  number
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎂</span>
              <span className="text-xl font-semibold text-white">{idade} anos</span>
            </div>
          </div>

          {/* Ativo */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">ativo</span>
              {mostrarTipos && (
                <span className="rounded bg-purple-500/20 px-2 py-0.5 text-xs font-mono text-purple-400">
                  boolean
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{ativo ? "✅" : "❌"}</span>
              <span className={`text-xl font-semibold ${ativo ? "text-green-400" : "text-red-400"}`}>
                {ativo ? "Ativo" : "Inativo"}
              </span>
            </div>
          </div>

          {/* Hobbies */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">hobbies</span>
              {mostrarTipos && (
                <span className="rounded bg-orange-500/20 px-2 py-0.5 text-xs font-mono text-orange-400">
                  string[]
                </span>
              )}
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-700/50 px-3 py-1 text-sm text-slate-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conceitos de TypeScript */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-2xl">🔷</span>
            Conceitos de TypeScript utilizados
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-blue-400">Tipagem de String</h4>
              <p className="mt-1 text-sm text-slate-400">
                String é usada para textos. TypeScript infere o tipo, mas é boa prática declarar.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const nome: string = "Maria Silva";`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-green-400">Tipagem de Number</h4>
              <p className="mt-1 text-sm text-slate-400">
                Number representa números inteiros e decimais (não existe int/float separado).
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const idade: number = 28;
const altura: number = 1.75; // também é number`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-purple-400">Tipagem de Boolean</h4>
              <p className="mt-1 text-sm text-slate-400">
                Boolean representa valores verdadeiro (true) ou falso (false).
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const ativo: boolean = true;
const premium: boolean = false;`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-orange-400">Tipagem de Array</h4>
              <p className="mt-1 text-sm text-slate-400">
                Arrays são tipados com o tipo dos elementos seguido de []. Existem duas sintaxes:
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`// Sintaxe 1: tipo[]
const hobbies: string[] = ["Programação", "Leitura"];

// Sintaxe 2: Array<tipo>
const numeros: Array<number> = [1, 2, 3, 4, 5];`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-cyan-400">Inferência de Tipos</h4>
              <p className="mt-1 text-sm text-slate-400">
                TypeScript consegue inferir o tipo automaticamente na maioria dos casos.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`// Inferência automática
const nome = "Maria";     // TypeScript sabe que é string
const idade = 28;         // TypeScript sabe que é number

// Declaração explícita (recomendado)
const nome: string = "Maria";
const idade: number = 28;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
