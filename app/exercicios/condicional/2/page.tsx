"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function ExercicioCondicional2() {
  const categoria = getCategoria("condicional")!;
  const exercicio = getExercicio("condicional", 2)!;

  // ============================================
  // 1. CRIE SEUS ESTADOS AQUI
  // Você vai precisar de:
  // - nome (string)
  // - sexo (string) - "M" ou "F"
  // - estadoCivil (string)
  // - tempoCasada (string) - só aparece se sexo="F" e estadoCivil="CASADA"
  // ============================================



  // ============================================
  // 2. CRIE A FUNÇÃO PARA PROCESSAR O FORMULÁRIO
  // Dica: Verifique se sexo === "F" && estadoCivil === "CASADA"
  // para decidir se mostra o campo de tempo de casada
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

          Este exercício é sobre condicionais!

          Você vai precisar de:
          - Input de texto para o nome
          - Select para sexo (M/F)
          - Select para estado civil
          - Input condicional para tempo de casada
            (só aparece se sexo="F" e estadoCivil="CASADA")

          Dica: Use o operador && para mostrar campos condicionalmente:
          {sexo === "F" && estadoCivil === "CASADA" && (
            <input para tempo de casada />
          )}

          Consulte o Guia de Estudos em /guia
          ou veja o exercício 1 como exemplo.
          ============================================ */}

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center">
        <div className="mb-4 text-6xl">🚀</div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          Comece aqui!
        </h3>
        <p className="mb-6 max-w-md text-slate-400">
          Este exercício usa condicionais para mostrar/esconder campos.
          O campo "tempo de casada" só deve aparecer se o sexo for "F" e estado civil for "CASADA".
        </p>
        <div className="flex gap-3">
          <a
            href="/guia#exemplo"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors"
          >
            Ver Guia
          </a>
          <a
            href="/exercicios/condicional/1"
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Ver Exemplo
          </a>
        </div>
      </div>
    </ExerciseLayout>
  );
}
