"use client";

import Link from "next/link";

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
      {title && (
        <div className="border-b border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-400">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm text-slate-300">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-lg font-semibold text-emerald-400">{title}</h3>
      {children}
    </div>
  );
}

export default function GuiaPage() {
  const menuItems = [
    { id: "comecar", label: "Como Começar" },
    { id: "estrutura", label: "Estrutura do Projeto" },
    { id: "exemplo", label: "Exercício de Exemplo" },
    { id: "criar", label: "Criar Novo Exercício" },
    { id: "dicas", label: "Dicas Úteis" },
    { id: "problemas", label: "Problemas Comuns" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-white">Guia de Estudos</h1>
          </div>
          <Link
            href="/"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Ver Exercícios
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <nav className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Navegação
              </p>
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-4 py-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="min-w-0 flex-1 space-y-12">
            {/* Como Começar */}
            <Section id="comecar" title="Como Começar">
              <div className="space-y-6 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                <SubSection title="1. Faça um Fork do Repositório">
                  <ol className="list-inside list-decimal space-y-2 text-slate-300">
                    <li>Acesse o repositório original no GitHub</li>
                    <li>Clique no botão <span className="rounded bg-slate-700 px-2 py-0.5 font-medium">Fork</span> no canto superior direito</li>
                    <li>Selecione sua conta para criar a cópia</li>
                  </ol>
                </SubSection>

                <SubSection title="2. Clone o seu Fork">
                  <CodeBlock>{`git clone https://github.com/SEU_USUARIO/react-exercises.git
cd react-exercises`}</CodeBlock>
                </SubSection>

                <SubSection title="3. Instale as Dependências">
                  <CodeBlock>{`npm install`}</CodeBlock>
                </SubSection>

                <SubSection title="4. Rode o Projeto">
                  <CodeBlock>{`npm run dev`}</CodeBlock>
                  <p className="mt-3 text-slate-400">
                    Acesse <code className="rounded bg-slate-700 px-2 py-0.5 text-emerald-400">http://localhost:3000</code> no navegador.
                  </p>
                </SubSection>
              </div>
            </Section>

            {/* Estrutura do Projeto */}
            <Section id="estrutura" title="Estrutura do Projeto">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                <CodeBlock>{`app/
├── data/
│   └── exercicios.ts         # Lista de todos os exercícios
├── components/
│   └── ExerciseLayout.tsx    # Layout reutilizável
├── exercicios/
│   └── basico/
│       └── 1/
│           └── page.tsx      # Exercício 1 (exemplo)
├── guia/
│   └── page.tsx              # Esta página
├── page.tsx                  # Página inicial
└── globals.css`}</CodeBlock>
              </div>
            </Section>

            {/* Exercício de Exemplo */}
            <Section id="exemplo" title="Entendendo o Exercício de Exemplo">
              <p className="mb-6 text-slate-400">
                Veja o arquivo <code className="rounded bg-slate-700 px-2 py-0.5 text-emerald-400">app/exercicios/basico/1/page.tsx</code> - ele é o modelo para todos os outros exercícios.
              </p>

              <div className="space-y-8">
                {/* Conceito 1 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">1</span>
                    <h3 className="text-lg font-semibold text-white">Criando Estados com useState</h3>
                  </div>
                  <p className="mb-4 text-slate-400">
                    O <code className="text-emerald-400">useState</code> é um Hook do React que permite criar variáveis que, quando mudam, atualizam a tela automaticamente.
                  </p>
                  <CodeBlock title="Exemplo">{`import { useState } from "react";

// Criando estados para guardar os dados do usuário
const [nome, setNome] = useState("");      // "" é o valor inicial (vazio)
const [idade, setIdade] = useState("");
const [mostrarResultado, setMostrarResultado] = useState(false);`}</CodeBlock>
                  <div className="mt-4 rounded-lg bg-slate-900/50 p-4">
                    <p className="text-sm text-slate-400">
                      <strong className="text-white">Como funciona:</strong>
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-400">
                      <li><code className="text-emerald-400">nome</code> → variável que guarda o valor atual</li>
                      <li><code className="text-emerald-400">setNome</code> → função para atualizar o valor</li>
                      <li><code className="text-emerald-400">useState("")</code> → valor inicial (string vazia)</li>
                    </ul>
                  </div>
                </div>

                {/* Conceito 2 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">2</span>
                    <h3 className="text-lg font-semibold text-white">Recebendo Input do Usuário</h3>
                  </div>
                  <p className="mb-4 text-slate-400">
                    Para receber dados do usuário, usamos o elemento <code className="text-emerald-400">&lt;input&gt;</code> conectado ao estado:
                  </p>
                  <CodeBlock title="Input de texto">{`<input
  type="text"
  value={nome}                              // Valor vem do estado
  onChange={(e) => setNome(e.target.value)} // Atualiza o estado quando digita
  placeholder="Digite seu nome"
  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white"
/>`}</CodeBlock>
                  <div className="mt-4">
                    <CodeBlock title="Input de número">{`<input
  type="number"
  value={idade}
  onChange={(e) => setIdade(e.target.value)}
  placeholder="Digite sua idade"
/>`}</CodeBlock>
                  </div>
                </div>

                {/* Conceito 3 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">3</span>
                    <h3 className="text-lg font-semibold text-white">Processando os Dados</h3>
                  </div>
                  <p className="mb-4 text-slate-400">
                    Quando o usuário clica no botão, processamos os dados:
                  </p>
                  <CodeBlock>{`const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();  // Evita recarregar a página

  // Aqui você faz os cálculos necessários
  // Por exemplo, converter para número:
  const idadeNumero = parseInt(idade);

  // Mostrar o resultado
  setMostrarResultado(true);
};`}</CodeBlock>
                </div>

                {/* Conceito 4 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">4</span>
                    <h3 className="text-lg font-semibold text-white">Mostrando o Resultado (Output)</h3>
                  </div>
                  <p className="mb-4 text-slate-400">
                    Use renderização condicional para mostrar o resultado apenas quando necessário:
                  </p>
                  <CodeBlock>{`{mostrarResultado && (
  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
    <h3 className="text-lg font-semibold text-emerald-400">Resultado</h3>

    <p className="text-white">
      Nome: {nome}
    </p>
    <p className="text-white">
      Idade: {idade} anos
    </p>
  </div>
)}`}</CodeBlock>
                  <div className="mt-4 flex items-start gap-3 rounded-lg bg-amber-500/10 p-4">
                    <span className="text-xl">💡</span>
                    <p className="text-sm text-amber-200">
                      O <code className="text-amber-400">&&</code> funciona assim: se <code className="text-amber-400">mostrarResultado</code> for <code className="text-amber-400">true</code>, mostra o que vem depois.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Como Criar um Novo Exercício */}
            <Section id="criar" title="Como Criar um Novo Exercício">
              <div className="space-y-6">
                {/* Passo 1 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Passo 1: Crie a Pasta</h3>
                  <p className="mb-4 text-slate-400">Para o exercício 2 da categoria básico:</p>
                  <CodeBlock>{`mkdir -p app/exercicios/basico/2`}</CodeBlock>
                </div>

                {/* Passo 2 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Passo 2: Crie o Arquivo page.tsx</h3>
                  <p className="mb-4 text-slate-400">
                    Crie o arquivo <code className="rounded bg-slate-700 px-2 py-0.5 text-emerald-400">app/exercicios/basico/2/page.tsx</code>:
                  </p>
                  <CodeBlock title="app/exercicios/basico/2/page.tsx">{`"use client";

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
}`}</CodeBlock>
                </div>

                {/* Passo 3 */}
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Passo 3: Teste</h3>
                  <p className="text-slate-400">
                    Acesse <code className="rounded bg-slate-700 px-2 py-0.5 text-emerald-400">http://localhost:3000/exercicios/basico/2</code> para ver seu exercício.
                  </p>
                </div>

                {/* Checklist */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-emerald-400">Checklist para Cada Exercício</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Criar pasta <code className="text-emerald-400">app/exercicios/[categoria]/[numero]/</code></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Criar arquivo <code className="text-emerald-400">page.tsx</code></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Importar <code className="text-emerald-400">useState</code> do React</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Criar estados para cada input</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Criar função <code className="text-emerald-400">handleSubmit</code> para processar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Criar função <code className="text-emerald-400">handleReset</code> para limpar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Mostrar resultado com renderização condicional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-700" />
                      <span>Testar no navegador</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Dicas Úteis */}
            <Section id="dicas" title="Dicas Úteis">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Converter Texto para Número</h3>
                  <CodeBlock>{`// Para números inteiros
const numero = parseInt(valor);

// Para números decimais
const decimal = parseFloat(valor);`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Formatar Números Decimais</h3>
                  <CodeBlock>{`// Mostrar apenas 2 casas decimais
const formatado = numero.toFixed(2);
// Resultado: "3.14"`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Condições (if/else) na Tela</h3>
                  <CodeBlock>{`{idade >= 18 ? (
  <p>Maior de idade</p>
) : (
  <p>Menor de idade</p>
)}`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Múltiplas Condições</h3>
                  <CodeBlock>{`{imc < 18.5 && <p>Abaixo do peso</p>}
{imc >= 18.5 && imc < 25 && <p>Peso normal</p>}
{imc >= 25 && imc < 30 && <p>Acima do peso</p>}
{imc >= 30 && <p>Obeso</p>}`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Input para Números Decimais</h3>
                  <CodeBlock>{`<input type="number" step="0.01" ... />`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <h3 className="mb-3 font-semibold text-white">Select (Dropdown)</h3>
                  <CodeBlock>{`const [opcao, setOpcao] = useState("");

<select
  value={opcao}
  onChange={(e) => setOpcao(e.target.value)}
>
  <option value="">Selecione...</option>
  <option value="M">Masculino</option>
  <option value="F">Feminino</option>
</select>`}</CodeBlock>
                </div>
              </div>

              {/* Tabela de Categorias */}
              <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                <h3 className="mb-4 font-semibold text-white">Categorias de Exercícios</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="pb-3 text-slate-400">Categoria</th>
                        <th className="pb-3 text-slate-400">Rota</th>
                        <th className="pb-3 text-slate-400">Cor</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3">Básico</td>
                        <td className="py-3"><code className="text-emerald-400">/exercicios/basico/[numero]</code></td>
                        <td className="py-3"><span className="inline-block h-4 w-4 rounded bg-gradient-to-r from-emerald-500 to-teal-600"></span> Verde</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3">Condicional</td>
                        <td className="py-3"><code className="text-violet-400">/exercicios/condicional/[numero]</code></td>
                        <td className="py-3"><span className="inline-block h-4 w-4 rounded bg-gradient-to-r from-violet-500 to-purple-600"></span> Roxo</td>
                      </tr>
                      <tr>
                        <td className="py-3">Repetição</td>
                        <td className="py-3"><code className="text-orange-400">/exercicios/repeticao/[numero]</code></td>
                        <td className="py-3"><span className="inline-block h-4 w-4 rounded bg-gradient-to-r from-orange-500 to-red-600"></span> Laranja</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>

            {/* Problemas Comuns */}
            <Section id="problemas" title="Problemas Comuns">
              <div className="space-y-4">
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6">
                  <h3 className="mb-3 font-semibold text-red-400">O número está sendo tratado como texto</h3>
                  <CodeBlock>{`// Errado
const soma = numero1 + numero2;  // "12" + "3" = "123"

// Correto
const soma = parseInt(numero1) + parseInt(numero2);  // 12 + 3 = 15`}</CodeBlock>
                </div>

                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6">
                  <h3 className="mb-3 font-semibold text-red-400">O resultado não aparece</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Verifique se criou o estado para controlar a exibição</li>
                    <li>• Verifique se está chamando a função que atualiza o estado</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6">
                  <h3 className="mb-3 font-semibold text-red-400">Erro "Cannot read properties of undefined"</h3>
                  <p className="text-slate-300">
                    Verifique se o ID do exercício existe em <code className="text-emerald-400">app/data/exercicios.ts</code>
                  </p>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center">
              <p className="text-lg font-semibold text-white">Bons estudos! 🚀</p>
              <p className="mt-2 text-slate-400">
                Qualquer dúvida, consulte este guia ou veja o exercício de exemplo.
              </p>
              <Link
                href="/exercicios/basico/1"
                className="mt-4 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 transition-colors"
              >
                Ver Exercício de Exemplo
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
