"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function ExercicioRepeticao2() {
  const categoria = getCategoria("repeticao")!;
  const exercicio = getExercicio("repeticao", 2)!;

  // ============================================
  // 1. CRIE SEUS ESTADOS AQUI
  // Você vai precisar de:
  // - numeroInicial (string) - o número que o usuário digita
  // - numerosGerados (number[]) - array com os 20 números subsequentes
  // ============================================



  // ============================================
  // 2. CRIE A FUNÇÃO PARA GERAR OS NÚMEROS
  // Dica: Use um loop for para gerar os 20 números
  //
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const inicio = parseInt(numeroInicial);
  //   const numeros: number[] = [];
  //
  //   for (let i = 1; i <= 20; i++) {
  //     numeros.push(inicio + i);
  //   }
  //
  //   setNumerosGerados(numeros);
  // };
  // ============================================



  // ============================================
  // 3. CRIE A FUNÇÃO PARA LIMPAR (OPCIONAL)
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

          Este exercício usa loops/repetição!

          Você vai precisar de:
          - 1 input para o número inicial
          - 1 botão para gerar
          - Mostrar os 20 números subsequentes

          Dica para gerar os números:
          for (let i = 1; i <= 20; i++) {
            numeros.push(inicio + i);
          }

          Dica para mostrar a lista:
          {numerosGerados.map((num, index) => (
            <span key={index}>{num}</span>
          ))}

          Consulte o Guia de Estudos em /guia
          ou veja o exercício 1 como exemplo.
          ============================================ */}

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center">
        <div className="mb-4 text-6xl">🚀</div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          Comece aqui!
        </h3>
        <p className="mb-6 max-w-md text-slate-400">
          Este exercício usa loops para gerar uma sequência de números.
          Use um <code className="text-orange-400">for</code> para criar os 20 números subsequentes.
        </p>
        <div className="flex gap-3">
          <a
            href="/guia#exemplo"
            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
          >
            Ver Guia
          </a>
          <a
            href="/exercicios/repeticao/1"
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Ver Exemplo
          </a>
        </div>
      </div>
    </ExerciseLayout>
  );
}
