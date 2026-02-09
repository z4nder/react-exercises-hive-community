"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ExerciseLayoutProps {
  categoria: string;
  categoriaId: string;
  exercicioId: number;
  titulo: string;
  descricao: string;
  dica?: string;
  corGradient: string;
  children: ReactNode;
}

export default function ExerciseLayout({
  categoria,
  categoriaId,
  exercicioId,
  titulo,
  descricao,
  dica,
  corGradient,
  children,
}: ExerciseLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-6">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/" className="hover:text-white transition-colors">
              {categoria}
            </Link>
            <span>/</span>
            <span className="text-white">Exercício {exercicioId}</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${corGradient} text-xl font-bold text-white`}
            >
              {exercicioId}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{titulo}</h1>
              <p className="text-slate-400">{categoria}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Exercise Description */}
        <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">Enunciado</h2>
          <p className="text-slate-300">{descricao}</p>
          {dica && (
            <div className="mt-4 flex items-start gap-3 rounded-lg bg-amber-500/10 p-4">
              <span className="text-xl">💡</span>
              <div>
                <span className="font-medium text-amber-400">Dica: </span>
                <span className="text-amber-200">{dica}</span>
              </div>
            </div>
          )}
        </div>

        {/* Exercise Content */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6">
          <h2 className="mb-6 text-lg font-semibold text-white">Resolução</h2>
          {children}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </Link>
        </div>
      </main>
    </div>
  );
}
