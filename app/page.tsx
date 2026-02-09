"use client";

import Link from "next/link";
import { categorias } from "./data/exercicios";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Exercícios de Algoritmos
              </h1>
              <p className="mt-2 text-lg text-slate-400">
                Aprenda React resolvendo exercícios práticos com feedback visual
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/enunciados"
                className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Enunciados
              </Link>
              <Link
                href="/guia"
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Guia de Estudos
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-12">
          {categorias.map((categoria) => (
            <section key={categoria.id}>
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">{categoria.emoji}</span>
                <h2 className="text-2xl font-semibold text-white">
                  {categoria.nome}
                </h2>
                <div
                  className={`ml-2 h-1 flex-1 rounded-full bg-gradient-to-r ${categoria.cor} opacity-50`}
                />
              </div>

              {/* Exercise Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoria.exercicios.map((exercicio) => (
                  <Link
                    key={exercicio.id}
                    href={`/exercicios/${categoria.id}/${exercicio.id}`}
                    className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-5 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/50"
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${categoria.cor} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                    />

                    {/* Exercise number badge */}
                    <div
                      className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${categoria.cor} text-sm font-bold text-white`}
                    >
                      {exercicio.id}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-semibold text-white transition-colors group-hover:text-slate-100">
                      {exercicio.titulo}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
                      {exercicio.descricao}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-400">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Como usar
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              Clique em um exercício para abrir a página de resolução
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500">•</span>
              Use os inputs para testar diferentes valores
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              Veja o resultado em tempo real com feedback visual
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
