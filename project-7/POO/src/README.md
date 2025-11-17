Projeto Java – Fundamentos de POO e Padrões de Projeto

Este projeto reúne implementações práticas de conceitos fundamentais de Programação Orientada a Objetos (POO), encapsulamento, herança, polimorfismo, abstração, imutabilidade, generics e padrões de projeto, desenvolvidos em Java. Cada exercício simula cenários do mundo real, como gerenciamento de produtos, funcionários, transporte, pagamentos e carrinhos de compras.

🔹 Objetivos do Projeto

Praticar encapsulamento e validação de dados com getters e setters.

Aplicar regras de negócio, como limites de desconto e validações de pagamento.

Implementar hierarquias de classes usando herança e sobrescrita de métodos.

Demonstrar polimorfismo com interfaces e estratégias de execução dinâmica.

Criar objetos imutáveis e objetos de valor consistentes.

Utilizar generics e repositórios genéricos em memória.

Aplicar o padrão Strategy para cálculo de frete flexível.

🔹 Tecnologias

Java 17 (ou superior)

Maven/Gradle (opcional para gerenciamento de dependências)

IDE recomendada: IntelliJ IDEA ou Eclipse

🔹 Estrutura do Projeto
src/
├─ exercicio1/
│  └─ Produto.java
├─ exercicio2/
│  └─ ProdutoComDesconto.java
├─ exercicio3/
│  ├─ Funcionario.java
│  ├─ Gerente.java
│  └─ Desenvolvedor.java
├─ exercicio4/
│  ├─ IMeioTransporte.java
│  ├─ Carro.java
│  ├─ Bicicleta.java
│  └─ Trem.java
├─ exercicio5/
│  ├─ FormaPagamento.java
│  ├─ CartaoCredito.java
│  ├─ Boleto.java
│  └─ Pix.java
├─ exercicio6/
│  ├─ Dinheiro.java
│  ├─ Produto.java
│  ├─ ItemCarrinho.java
│  └─ Carrinho.java
├─ exercicio7/
│  ├─ Identificavel.java
│  ├─ IRepository.java
│  └─ InMemoryRepository.java
└─ exercicio8/
├─ CalculadoraFrete.java
├─ Sedex.java
├─ PAC.java
└─ RetiradaNaLoja.java

🔹 Exercícios e Funcionalidades
1. Encapsulamento

Classe Produto com atributos privados: nome, preco e quantidadeEmEstoque.

Validações: nome não nulo, preco e quantidadeEmEstoque ≥ 0.

2. Encapsulamento com Regras

Classe ProdutoComDesconto com método aplicarDesconto(double porcentagem).

Permite apenas descontos entre 0% e 50%.

3. Herança

Classe base Funcionario com subclasses Gerente e Desenvolvedor.

Método calcularBonus() sobrescrito para cada função.

4. Polimorfismo

Interface IMeioTransporte implementada por Carro, Bicicleta e Trem.

Métodos acelerar() e frear() com lógica própria.

5. Abstração

Classe abstrata FormaPagamento com métodos validarPagamento() e processarPagamento().

Implementações: CartaoCredito, Boleto e Pix com validações específicas.

6. Imutabilidade

Objeto de valor Dinheiro imutável.

Carrinho retorna novas instâncias ao adicionar/remover itens ou aplicar cupons.

Limite de cupons: 30%, arredondamento bancário.

7. Generics

Interface Identificavel com getId().

Repositório genérico IRepository<T, ID> e implementação InMemoryRepository.

Garantia de imutabilidade ao listar entidades e tratamento de exceções.

8. Padrão Strategy

Estratégia de frete via interface funcional CalculadoraFrete.

Implementações: Sedex, PAC, RetiradaNaLoja.

Suporte a estratégias promocionais via lambda, com validação de CEP/região.

🔹 Como Executar

Clone o repositório:

git clone <url-do-repositorio>


Compile o projeto:

javac -d bin src/**/*.java


Execute as classes Main de cada exercício ou teste unitário correspondente:

java -cp bin exercicio1.Main

🔹 Demonstrações

Criação de produtos e aplicação de descontos.

Cálculo de bônus de diferentes funcionários em uma lista.

Uso de meios de transporte com aceleração e frenagem polimórficas.

Processamento de pagamentos com validações.

Manipulação de carrinhos imutáveis com cupons.

Armazenamento de entidades genéricas em memória e busca por ID.

Troca dinâmica de estratégia de frete com validação de CEP.

🔹 Observações

Todas as exceções lançadas (IllegalArgumentException, PagamentoInvalidoException, EntidadeNaoEncontradaException) são tratadas para demonstrar regras de negócio.

Projeto pensado para estudo de POO, clean code e boas práticas de design em Java.