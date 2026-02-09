# React Exercises - Contexto para IA

## Visão Geral

Plataforma educacional para ensinar React através de exercícios de algoritmos. O aluno deve criar os arquivos dos exercícios por conta própria para aprender na prática.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

## Estrutura do Projeto

```
app/
├── page.tsx                    # Home - grid com todos exercícios
├── guia/page.tsx               # Guia de estudos
├── enunciados/page.tsx         # Lista só os enunciados
├── data/exercicios.ts          # Definições de todos exercícios
├── components/
│   └── ExerciseLayout.tsx      # Layout reutilizável
└── exercicios/
    ├── basico/[1-10]/page.tsx
    ├── condicional/[1-10]/page.tsx
    └── repeticao/[1-10]/page.tsx
```

## Dados dos Exercícios

Arquivo `app/data/exercicios.ts` contém:

```typescript
interface Exercicio {
  id: number;
  titulo: string;
  descricao: string;
  dica?: string;
}

interface Categoria {
  id: string;        // "basico" | "condicional" | "repeticao"
  nome: string;
  emoji: string;
  cor: string;       // Classes Tailwind de gradiente
  exercicios: Exercicio[];
}
```

### Categorias

| ID | Nome | Cor | Qtd |
|----|------|-----|-----|
| basico | Básico | emerald/teal | 10 |
| condicional | Condicional | violet/purple | 10 |
| repeticao | Repetição | orange/red | 10 |

## Helpers Disponíveis

```typescript
import { getCategoria, getExercicio, categorias } from "@/app/data/exercicios";

getCategoria("basico")           // Retorna categoria completa
getExercicio("basico", 1)        // Retorna exercício específico
categorias                       // Array com todas categorias
```

## Template de Exercício

Cada exercício segue este padrão:

```tsx
"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getCategoria, getExercicio } from "@/app/data/exercicios";

export default function Exercicio() {
  const categoria = getCategoria("basico")!;
  const exercicio = getExercicio("basico", 2)!;

  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica do exercício
    setResultado("...");
  };

  return (
    <ExerciseLayout categoria={categoria} exercicio={exercicio}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="w-full rounded-lg bg-slate-700 px-4 py-3 text-white"
        />
        <button
          type="submit"
          className="rounded-lg bg-emerald-600 px-6 py-3 text-white"
        >
          Calcular
        </button>
      </form>

      {resultado && (
        <div className="mt-6 rounded-lg bg-slate-700/50 p-4 text-white">
          {resultado}
        </div>
      )}
    </ExerciseLayout>
  );
}
```

## Rotas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `app/page.tsx` | Home com grid de exercícios |
| `/guia` | `app/guia/page.tsx` | Guia de estudos |
| `/enunciados` | `app/enunciados/page.tsx` | Lista de enunciados |
| `/exercicios/[cat]/[num]` | `app/exercicios/[cat]/[num]/page.tsx` | Exercício individual |

## Exercícios de Exemplo (Completos)

- `app/exercicios/basico/1/page.tsx` - Nome e Idade
- `app/exercicios/condicional/1/page.tsx` - Soma Menor que C
- `app/exercicios/repeticao/1/page.tsx` - Soma de 100 Números

Use estes como referência para criar novos exercícios.

## Convenções de Código

- Componentes de página usam `"use client"` (client components)
- Estados com `useState` para inputs e resultados
- Formulários com `onSubmit` e `e.preventDefault()`
- Classes Tailwind para estilização
- Tema escuro (slate-800, slate-900)
- Cores por categoria nos badges e acentos

## Comandos

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção
npm run lint   # Verificar código
```
