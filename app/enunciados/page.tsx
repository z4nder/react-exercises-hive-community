"use client";

import Link from "next/link";
import { categorias } from "../data/exercicios";

export default function Enunciados() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar
          </Link>
          <h1 className="text-3xl font-bold text-white">
            Lista de Enunciados
          </h1>
          <p className="mt-2 text-slate-400">
            30 exercícios para você criar e resolver
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-12">
          {categorias.map((categoria) => (
            <section key={categoria.id}>
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">{categoria.emoji}</span>
                <h2 className="text-xl font-semibold text-white">
                  {categoria.nome}
                </h2>
                <span className="rounded-full bg-slate-700/50 px-3 py-1 text-sm text-slate-400">
                  {categoria.exercicios.length} exercícios
                </span>
              </div>

              {/* Exercise List */}
              <div className="space-y-4">
                {categoria.exercicios.map((exercicio) => (
                  <div
                    key={exercicio.id}
                    className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5"
                  >
                    <div className="flex items-start gap-4">
                      {/* Exercise number */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${categoria.cor} text-sm font-bold text-white`}
                      >
                        {exercicio.id}
                      </div>

                      <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white">
                          {exercicio.titulo}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 leading-relaxed text-slate-300">
                          {exercicio.descricao}
                        </p>

                        {/* Hint */}
                        {exercicio.dica && (
                          <div className="mt-3 flex items-start gap-2 rounded-lg bg-slate-700/30 p-3">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                            <span className="text-sm text-slate-400">
                              <span className="font-medium text-amber-500">Dica:</span>{" "}
                              {exercicio.dica}
                            </span>
                          </div>
                        )}

                        {/* File path hint */}
                        <div className="mt-3 text-xs text-slate-500">
                          Criar em:{" "}
                          <code className="rounded bg-slate-700/50 px-2 py-1">
                            app/exercicios/{categoria.id}/{exercicio.id}/page.tsx
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-emerald-400">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Como resolver os exercícios
          </h3>
          <ol className="space-y-2 text-slate-300">
            <li>
              <span className="font-medium text-emerald-400">1.</span> Crie o arquivo{" "}
              <code className="rounded bg-slate-700/50 px-1.5 py-0.5 text-sm">page.tsx</code>{" "}
              na pasta indicada
            </li>
            <li>
              <span className="font-medium text-emerald-400">2.</span> Use o{" "}
              <Link href="/exercicios/basico/1" className="text-emerald-400 underline hover:text-emerald-300">
                exercício 1 de cada categoria
              </Link>{" "}
              como referência
            </li>
            <li>
              <span className="font-medium text-emerald-400">3.</span> Consulte o{" "}
              <Link href="/guia" className="text-emerald-400 underline hover:text-emerald-300">
                Guia de Estudos
              </Link>{" "}
              para aprender os conceitos
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
