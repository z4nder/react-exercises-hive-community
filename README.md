# Exercícios de Algoritmos com React

Aprenda React resolvendo exercícios práticos de algoritmos com feedback visual.

## Como Começar

### 1. Faça um Fork do Repositório

1. Acesse o repositório original no GitHub
2. Clique no botão **Fork** no canto superior direito
3. Selecione sua conta para criar a cópia

### 2. Clone o seu Fork

```bash
git clone https://github.com/SEU_USUARIO/react-exercises.git
cd react-exercises
```

### 3. Instale as Dependências

```bash
npm install
```

### 4. Rode o Projeto

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## Estrutura do Projeto

```
app/
├── data/
│   └── exercicios.ts         # Lista de todos os exercícios
├── components/
│   └── ExerciseLayout.tsx    # Layout reutilizável
├── exercicios/
│   └── basico/
│       └── 1/
│           └── page.tsx      # Exercício 1 (exemplo)
├── page.tsx                  # Página inicial
└── globals.css
```

---

## Entendendo o Exercício de Exemplo

Veja o arquivo `app/exercicios/basico/1/page.tsx` - ele é o modelo para todos os outros exercícios.

### Conceito 1: Criando Estados com useState

O `useState` é um Hook do React que permite criar variáveis que, quando mudam, atualizam a tela automaticamente.

```tsx
import { useState } from "react";

// Criando estados para guardar os dados do usuário
const [nome, setNome] = useState("");      // "" é o valor inicial (vazio)
const [idade, setIdade] = useState("");
const [mostrarResultado, setMostrarResultado] = useState(false);
```

**Como funciona:**
- `nome` → variável que guarda o valor atual
- `setNome` → função para atualizar o valor
- `useState("")` → valor inicial (string vazia)

### Conceito 2: Recebendo Input do Usuário

Para receber dados do usuário, usamos o elemento `<input>` conectado ao estado:

```tsx
<input
  type="text"
  value={nome}                              // Valor vem do estado
  onChange={(e) => setNome(e.target.value)} // Atualiza o estado quando digita
  placeholder="Digite seu nome"
  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white"
/>
```

**Para números:**
```tsx
<input
  type="number"
  value={idade}
  onChange={(e) => setIdade(e.target.value)}
  placeholder="Digite sua idade"
/>
```

### Conceito 3: Processando os Dados

Quando o usuário clica no botão, processamos os dados:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();  // Evita recarregar a página

  // Aqui você faz os cálculos necessários
  // Por exemplo, converter para número:
  const idadeNumero = parseInt(idade);

  // Mostrar o resultado
  setMostrarResultado(true);
};
```

### Conceito 4: Mostrando o Resultado (Output)

Use renderização condicional para mostrar o resultado apenas quando necessário:

```tsx
{mostrarResultado && (
  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
    <h3 className="text-lg font-semibold text-emerald-400">Resultado</h3>

    <p className="text-white">
      Nome: {nome}
    </p>
    <p className="text-white">
      Idade: {idade} anos
    </p>
  </div>
)}
```

**O `&&` funciona assim:** se `mostrarResultado` for `true`, mostra o que vem depois.

---

## Como Criar um Novo Exercício

### Passo 1: Crie a Pasta

Para o exercício 2 da categoria básico:

```bash
mkdir -p app/exercicios/basico/2
```

### Passo 2: Crie o Arquivo page.tsx

Crie o arquivo `app/exercicios/basico/2/page.tsx`:

```tsx
"use client";

import { useState } from "react";
import ExerciseLayout from "@/app/components/ExerciseLayout";
import { getExercicio, getCategoria } from "@/app/data/exercicios";

export default function Exercicio2() {
  // 1. Busca os dados do exercício
  const categoria = getCategoria("basico")!;
  const exercicio = getExercicio("basico", 2)!;

  // 2. Crie os estados para os inputs
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  // 3. Função para calcular
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Converte para número e calcula
    const n1 = parseInt(numero1);
    const n2 = parseInt(numero2);
    const soma = n1 + n2;

    setResultado(soma);
  };

  // 4. Função para limpar
  const handleReset = () => {
    setNumero1("");
    setNumero2("");
    setResultado(null);
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
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input 1 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Primeiro número
            </label>
            <input
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
              placeholder="Digite o primeiro número"
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Input 2 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Segundo número
            </label>
            <input
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
              placeholder="Digite o segundo número"
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={!numero1 || !numero2}
              className="flex-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white disabled:opacity-50"
            >
              Calcular
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-slate-600 bg-slate-700/50 px-6 py-3 text-slate-300"
            >
              Limpar
            </button>
          </div>
        </form>

        {/* Resultado */}
        {resultado !== null && (
          <div className="animate-fadeIn rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h3 className="mb-2 text-lg font-semibold text-emerald-400">
              Resultado
            </h3>
            <p className="text-2xl font-bold text-white">
              {numero1} + {numero2} = {resultado}
            </p>
          </div>
        )}
      </div>
    </ExerciseLayout>
  );
}
```

### Passo 3: Teste

Acesse `http://localhost:3000/exercicios/basico/2` para ver seu exercício.

---

## Dicas Úteis

### Converter Texto para Número

```tsx
// Para números inteiros
const numero = parseInt(valor);

// Para números decimais (com vírgula/ponto)
const decimal = parseFloat(valor);
```

### Formatar Números Decimais

```tsx
// Mostrar apenas 2 casas decimais
const formatado = numero.toFixed(2);  // "3.14"
```

### Condições (if/else) na Tela

```tsx
{idade >= 18 ? (
  <p>Maior de idade</p>
) : (
  <p>Menor de idade</p>
)}
```

### Múltiplas Condições

```tsx
{imc < 18.5 && <p>Abaixo do peso</p>}
{imc >= 18.5 && imc < 25 && <p>Peso normal</p>}
{imc >= 25 && imc < 30 && <p>Acima do peso</p>}
{imc >= 30 && <p>Obeso</p>}
```

### Input para Texto

```tsx
<input type="text" ... />
```

### Input para Números

```tsx
<input type="number" ... />
```

### Input para Números Decimais

```tsx
<input type="number" step="0.01" ... />
```

### Select (Dropdown)

```tsx
const [opcao, setOpcao] = useState("");

<select
  value={opcao}
  onChange={(e) => setOpcao(e.target.value)}
  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white"
>
  <option value="">Selecione...</option>
  <option value="M">Masculino</option>
  <option value="F">Feminino</option>
</select>
```

---

## Categorias de Exercícios

| Categoria | Rota | Cor |
|-----------|------|-----|
| Básico | `/exercicios/basico/[numero]` | Verde |
| Condicional | `/exercicios/condicional/[numero]` | Roxo |
| Repetição | `/exercicios/repeticao/[numero]` | Laranja |

---

## Checklist para Cada Exercício

- [ ] Criar pasta `app/exercicios/[categoria]/[numero]/`
- [ ] Criar arquivo `page.tsx`
- [ ] Importar `useState` do React
- [ ] Criar estados para cada input
- [ ] Criar função `handleSubmit` para processar
- [ ] Criar função `handleReset` para limpar
- [ ] Mostrar resultado com renderização condicional
- [ ] Testar no navegador

---

## Problemas Comuns

**O número está sendo tratado como texto:**
```tsx
// Errado
const soma = numero1 + numero2;  // "12" + "3" = "123"

// Correto
const soma = parseInt(numero1) + parseInt(numero2);  // 12 + 3 = 15
```

**O resultado não aparece:**
- Verifique se criou o estado para controlar a exibição
- Verifique se está chamando a função que atualiza o estado

**Erro "Cannot read properties of undefined":**
- Verifique se o ID do exercício existe em `app/data/exercicios.ts`

---

Bons estudos!
