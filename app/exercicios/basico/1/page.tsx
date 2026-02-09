"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function Exercicio1() {
  const categoria = getCategoria("basico")!;
  const exercicio = getExercicio("basico", 1)!;

  // useState - Hook do React para gerenciar estado
  // Cada chamada cria uma variável de estado e uma função para atualizá-la
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o reload da página
    if (nome && idade) {
      setMostrarResultado(true);
    }
  };

  // Função para resetar o formulário
  const handleReset = () => {
    setNome("");
    setIdade("");
    setMostrarResultado(false);
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
        {/* Formulário de Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-medium text-slate-300">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          {/* Campo Idade */}
          <div>
            <label htmlFor="idade" className="mb-2 block text-sm font-medium text-slate-300">
              Idade
            </label>
            <input
              type="number"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Digite sua idade"
              min="0"
              max="150"
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={!nome || !idade}
              className="flex-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Mostrar Resultado
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
        {mostrarResultado && (
          <div className="animate-fadeIn rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-emerald-400">
              Resultado
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <span className="text-slate-400">Nome: </span>
                  <span className="text-xl font-semibold text-white">{nome}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎂</span>
                <div>
                  <span className="text-slate-400">Idade: </span>
                  <span className="text-xl font-semibold text-white">{idade} anos</span>
                </div>
              </div>
            </div>

            {/* Mensagem personalizada baseada na idade */}
            <div className="mt-4 rounded-lg bg-slate-800/50 p-4">
              <p className="text-slate-300">
                {parseInt(idade) < 18 && (
                  <>Olá, <span className="text-emerald-400 font-medium">{nome}</span>! Você é menor de idade.</>
                )}
                {parseInt(idade) >= 18 && parseInt(idade) < 60 && (
                  <>Olá, <span className="text-emerald-400 font-medium">{nome}</span>! Você é maior de idade.</>
                )}
                {parseInt(idade) >= 60 && (
                  <>Olá, <span className="text-emerald-400 font-medium">{nome}</span>! Você é da melhor idade! 🌟</>
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
              <h4 className="font-mono text-emerald-400">useState</h4>
              <p className="mt-1 text-sm text-slate-400">
                Hook para criar e gerenciar estado local no componente. Cada input tem seu próprio estado.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const [nome, setNome] = useState("");
const [idade, setIdade] = useState("");`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-emerald-400">Controlled Components</h4>
              <p className="mt-1 text-sm text-slate-400">
                Os inputs são controlados pelo React - o valor vem do estado e mudanças atualizam o estado.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`<input
  value={nome}
  onChange={(e) => setNome(e.target.value)}
/>`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-emerald-400">Conditional Rendering</h4>
              <p className="mt-1 text-sm text-slate-400">
                O resultado só é mostrado quando mostrarResultado é true.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`{mostrarResultado && (
  <div>Resultado aqui...</div>
)}`}
              </pre>
            </div>

            <div className="rounded-lg bg-slate-900/50 p-4">
              <h4 className="font-mono text-emerald-400">Event Handling</h4>
              <p className="mt-1 text-sm text-slate-400">
                Funções que respondem a eventos do usuário, como submit do formulário e clicks.
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-3 text-xs text-slate-300">
{`const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setMostrarResultado(true);
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
