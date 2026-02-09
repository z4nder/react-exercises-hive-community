export interface Exercicio {
  id: number;
  titulo: string;
  descricao: string;
  dica?: string;
}

export interface Categoria {
  id: string;
  nome: string;
  emoji: string;
  cor: string;
  exercicios: Exercicio[];
}

export const categorias: Categoria[] = [
  {
    id: "basico",
    nome: "Básico",
    emoji: "1️⃣",
    cor: "from-emerald-500 to-teal-600",
    exercicios: [
      {
        id: 1,
        titulo: "Nome e Idade",
        descricao: "Receba o nome e a idade do usuário e mostre-os na tela.",
      },
      {
        id: 2,
        titulo: "Soma de Dois Números",
        descricao: "Receba dois números e mostre a soma deles na tela.",
        dica: "Use parseInt() para converter o dado recebido para inteiro.",
      },
      {
        id: 3,
        titulo: "Área do Quadrado",
        descricao: "Receba o tamanho do lado de um quadrado e mostre sua área.",
        dica: "Fórmula: A = L²",
      },
      {
        id: 4,
        titulo: "Ouro no LOL",
        descricao: "Em uma partida de LOL, um jogador ganha 2 de ouro por segundo. Pergunte quantos minutos de partida tem e informe quanto de ouro foi acumulado.",
      },
      {
        id: 5,
        titulo: "Ferraduras para Cavalos",
        descricao: "Receba a quantidade de cavalos e calcule quantas ferraduras são necessárias para equipar todos os cavalos de um haras.",
      },
      {
        id: 6,
        titulo: "Litros de Gasolina",
        descricao: "Um motorista deseja abastecer. Leia o preço do litro e o valor pago, depois exiba quantos litros foram abastecidos.",
        dica: "Use parseFloat() para trabalhar com valores decimais.",
      },
      {
        id: 7,
        titulo: "Salário com Comissão",
        descricao: "Um funcionário recebe salário fixo + 4% de comissão sobre vendas. Receba o salário fixo e o valor das vendas, calcule e mostre o valor da comissão e o salário final.",
      },
      {
        id: 8,
        titulo: "Calculadora de Idade",
        descricao: "Receba o ano de nascimento e o ano atual, e calcule a idade em anos, meses, semanas e dias.",
        dica: "Considere 52 semanas e 365 dias por ano.",
      },
      {
        id: 9,
        titulo: "Conversor de Temperatura",
        descricao: "Receba uma temperatura em Celsius e converta para Fahrenheit.",
        dica: "Fórmula: F = (C × 9/5) + 32",
      },
      {
        id: 10,
        titulo: "Média de Três Notas",
        descricao: "Receba três notas de um aluno, calcule a média aritmética e mostre o resultado.",
        dica: "Média = (N1 + N2 + N3) / 3",
      },
    ],
  },
  {
    id: "condicional",
    nome: "Condicional",
    emoji: "2️⃣",
    cor: "from-violet-500 to-purple-600",
    exercicios: [
      {
        id: 1,
        titulo: "Soma Menor que C",
        descricao: "Leia os valores A, B e C e informe se a soma de A + B é menor que C.",
      },
      {
        id: 2,
        titulo: "Dados Pessoais",
        descricao: "Leia nome, sexo e estado civil. Caso o sexo seja 'F' e o estado civil seja 'CASADA', solicite o tempo de casada (anos).",
      },
      {
        id: 3,
        titulo: "Par ou Ímpar",
        descricao: "Receba um número qualquer e informe se ele é par ou ímpar.",
      },
      {
        id: 4,
        titulo: "Soma ou Multiplica",
        descricao: "Leia dois valores inteiros A e B: se forem iguais, somar; se forem diferentes, multiplicar. O resultado deve ser armazenado em C e exibido.",
      },
      {
        id: 5,
        titulo: "Soma Condicional",
        descricao: "Leia um número: se for par, some 5; se for ímpar, some 8. Mostre o resultado.",
      },
      {
        id: 6,
        titulo: "Calculadora de IMC",
        descricao: "Calcule o IMC (peso / altura²) e classifique: Abaixo de 18,5 = Abaixo do peso; Entre 18,5 e 25 = Peso normal; Entre 25 e 30 = Acima do peso; Acima de 30 = Obeso.",
      },
      {
        id: 7,
        titulo: "Maior de Três",
        descricao: "Leia três números e informe qual é o maior deles.",
      },
      {
        id: 8,
        titulo: "Aprovado ou Reprovado",
        descricao: "Leia a nota de um aluno (0 a 10). Se a nota for maior ou igual a 7, mostre 'Aprovado'. Caso contrário, mostre 'Reprovado'.",
      },
      {
        id: 9,
        titulo: "Classificação por Idade",
        descricao: "Leia a idade de uma pessoa e classifique: 0-12 = Criança; 13-17 = Adolescente; 18-59 = Adulto; 60+ = Idoso.",
      },
      {
        id: 10,
        titulo: "Calculadora Simples",
        descricao: "Leia dois números e uma operação (+, -, *, /). Execute a operação escolhida e mostre o resultado.",
        dica: "Use switch ou múltiplos if/else para cada operação.",
      },
    ],
  },
  {
    id: "repeticao",
    nome: "Repetição",
    emoji: "3️⃣",
    cor: "from-orange-500 to-red-600",
    exercicios: [
      {
        id: 1,
        titulo: "Soma de 100 Números",
        descricao: "Solicite que o usuário digite 100 números inteiros e imprima a soma total.",
      },
      {
        id: 2,
        titulo: "20 Números Subsequentes",
        descricao: "Solicite um número inteiro qualquer e imprima os 20 números subsequentes a ele.",
      },
      {
        id: 3,
        titulo: "Soma do Intervalo",
        descricao: "Solicite dois números (inicial e final) e mostre a soma de todos os números do intervalo.",
      },
      {
        id: 4,
        titulo: "Fatorial",
        descricao: "Leia um número digitado pelo usuário e calcule seu fatorial.",
        dica: "Exemplo: 5! = 5 × 4 × 3 × 2 × 1",
      },
      {
        id: 5,
        titulo: "Tabuada",
        descricao: "Leia um número e mostre a tabuada completa dele (de 1 a 10).",
      },
      {
        id: 6,
        titulo: "Contagem Regressiva",
        descricao: "Leia um número e mostre uma contagem regressiva até zero.",
      },
      {
        id: 7,
        titulo: "Números Pares",
        descricao: "Leia dois números (início e fim) e mostre apenas os números pares do intervalo.",
        dica: "Um número é par quando o resto da divisão por 2 é zero (n % 2 === 0).",
      },
      {
        id: 8,
        titulo: "Potência",
        descricao: "Leia a base e o expoente, e calcule a potência usando repetição (sem usar Math.pow).",
        dica: "Exemplo: 2³ = 2 × 2 × 2 = 8",
      },
      {
        id: 9,
        titulo: "Fibonacci",
        descricao: "Leia um número N e mostre os N primeiros termos da sequência de Fibonacci.",
        dica: "Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13... (cada número é a soma dos dois anteriores)",
      },
      {
        id: 10,
        titulo: "Média da Turma",
        descricao: "Leia as notas de 5 alunos e calcule a média da turma. Mostre também quantos ficaram acima da média.",
      },
    ],
  },
];

export function getCategoria(id: string): Categoria | undefined {
  return categorias.find((c) => c.id === id);
}

export function getExercicio(categoriaId: string, exercicioId: number): Exercicio | undefined {
  const categoria = getCategoria(categoriaId);
  return categoria?.exercicios.find((e) => e.id === exercicioId);
}
