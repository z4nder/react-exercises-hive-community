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
