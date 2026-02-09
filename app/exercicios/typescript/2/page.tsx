"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

// ============================================
// 1. CRIE SUA INTERFACE AQUI
// A interface deve ter:
// - nome: string (obrigatório)
// - email: string (obrigatório)
// - idade?: number (opcional - note o ?)
//
// Exemplo:
// interface Usuario {
//   nome: string;
//   email: string;
//   idade?: number;
// }
// ============================================



export default function Exercicio2() {
  const categoria = getCategoria("typescript")!;
  const exercicio = getExercicio("typescript", 2)!;

  // ============================================
  // 2. CRIE SEUS ESTADOS COM TIPAGEM
  // Use a interface criada para tipar o estado
  //
  // Exemplo:
  // const [usuario, setUsuario] = useState<Usuario | null>(null);
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");
  // const [idade, setIdade] = useState("");
  // ============================================



  // ============================================
  // 3. CRIE A FUNÇÃO PARA PROCESSAR O FORMULÁRIO
  // A função deve criar um objeto do tipo Usuario
  // e salvar no estado
  //
  // Exemplo:
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const novoUsuario: Usuario = {
  //     nome,
  //     email,
  //     idade: idade ? parseInt(idade) : undefined,
  //   };
  //   setUsuario(novoUsuario);
  // };
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

          Substitua este bloco pelo seu código.

          Você vai precisar de:
          - 1 interface Usuario com nome, email e idade opcional
          - 3 inputs (nome, email, idade)
          - 1 botão para criar o card
          - 1 card que exibe as informações do usuário

          O card só deve aparecer depois de preencher o formulário.
          A idade é opcional - se não preenchida, não mostrar.

          Consulte o Guia de Estudos em /guia
          ou veja o exercício 1 como exemplo.
          ============================================ */}

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center">
        <div className="mb-4 text-6xl">📝</div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          Comece aqui!
        </h3>
        <p className="mb-6 max-w-md text-slate-400">
          Crie uma interface Usuario e um formulário que gera um card
          com as informações preenchidas. Lembre-se: idade é opcional!
        </p>
        <div className="flex gap-3">
          <a
            href="/guia#exemplo"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Ver Guia
          </a>
          <a
            href="/exercicios/typescript/1"
            className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Ver Exemplo
          </a>
        </div>
      </div>
    </ExerciseLayout>
  );
}
