# Projeto Java – Fundamentos de POO e Padrões de Projeto

Este projeto reúne implementações práticas dos conceitos fundamentais de **Programação Orientada a Objetos (POO)** e padrões de projeto em Java. Cada exercício simula cenários do mundo real, como gerenciamento de produtos, funcionários, meios de transporte, pagamentos e carrinhos de compras, abordando temas como encapsulamento, herança, polimorfismo, abstração, imutabilidade, generics e padrão Strategy.

---

## 🔹 Objetivos do Projeto

- Praticar encapsulamento e validação de dados com getters e setters.
- Aplicar regras de negócio, como limites de desconto e validações de pagamento.
- Implementar hierarquias de classes usando herança e sobrescrita de métodos.
- Demonstrar polimorfismo com interfaces e estratégias de execução dinâmica.
- Criar objetos imutáveis e objetos de valor consistentes.
- Utilizar generics e repositórios genéricos em memória.
- Aplicar o padrão Strategy para cálculo de frete flexível.

---

## 🔹 Tecnologias

- **Java 17 (ou superior)**
- **Maven/Gradle** (opcional para gerenciamento de dependências)
- **IDE Recomendada:** IntelliJ IDEA ou Eclipse

---

## 🔹 Estrutura de Pastas e Classes

Abaixo está a lista de pacotes e principais classes/interfaces/exceções presentes no projeto:

```
java/
├─ exercicio1/
│  ├─ Main
│  └─ Produto
├─ exercicio2/
│  ├─ Main
│  └─ ProdutoComDesconto
├─ exercicio3/
│  ├─ Desenvolvedor
│  ├─ Funcionario
│  └─ Main
├─ exercicio4/
│  ├─ Bicicleta
│  ├─ Carro
│  ├─ IMeioTransporte            # Interface
│  ├─ Main
│  └─ Trem
├─ exercicio5/
│  ├─ Boleto
│  ├─ CartaoCredito
│  ├─ FormaPagamento             # Classe abstrata
│  ├─ Main
│  ├─ PagamentoInvalidoException # Exceção (destaque)
│  └─ Pix
├─ exercicio6/
│  ├─ Carrinho
│  ├─ Dinheiro
│  ├─ ItemCarrinho
│  └─ Main
├─ exercicio7/
│  ├─ EntidadeNaoEncontradaException # Exceção (destaque)
│  ├─ Identificavel                  # Interface
│  ├─ InMemoryRepository
│  ├─ IRepository                    # Interface
│  ├─ Main
│  └─ Produto
├─ exercicio8/
│  ├─ CalculadoraFrete          # Interface
│  ├─ CepInvalidoException      # Exceção (destaque)
│  ├─ Main
│  ├─ Pac
│  ├─ Pedido
│  ├─ RetiradaNaLoja
│  └─ Sedex
```
**Legenda:**
- _# Interface_: Indica uma interface.
- _# Classe abstrata_: Indica uma classe abstrata.
- _# Exceção (destaque)_: Indica uma exceção personalizada presente no projeto.

---

## 🔹 Exercícios e Funcionalidades

### 1. Encapsulamento

- Classe `Produto` com atributos privados: nome, preço e quantidadeEmEstoque.
- Validações: nome não nulo, preco e quantidadeEmEstoque ≥ 0.

### 2. Encapsulamento com Regras

- Classe `ProdutoComDesconto` com método `aplicarDesconto(double porcentagem)`.
- Permite apenas descontos entre 0% e 50%.

### 3. Herança

- Classe base `Funcionario` com subclasses (exemplo: `Desenvolvedor`).
- Método `calcularBonus()` sobrescrito para cada função.

### 4. Polimorfismo

- Interface `IMeioTransporte` implementada por `Carro`, `Bicicleta` e `Trem`.
- Métodos `acelerar()` e `frear()` com lógica própria.

### 5. Abstração

- Classe abstrata `FormaPagamento` com métodos `validarPagamento()` e `processarPagamento()`.
- Implementações: `CartaoCredito`, `Boleto` e `Pix` com validações específicas.

### 6. Imutabilidade

- Objeto de valor `Dinheiro` imutável.
- `Carrinho` retorna novas instâncias ao adicionar/remover itens ou aplicar cupons.
- Limite de cupons: 30%, arredondamento bancário.

### 7. Generics

- Interface `Identificavel` com `getId()`.
- Repositório genérico `IRepository<T, ID>` e implementação `InMemoryRepository`.
- Garantia de imutabilidade ao listar entidades e tratamento de exceções.

### 8. Padrão Strategy

- Estratégia de frete via interface funcional `CalculadoraFrete`.
- Implementações: `Sedex`, `Pac`, `RetiradaNaLoja`.
- Suporte a estratégias promocionais via lambda, validação de CEP/região.

---

## 🔹 Como Executar

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   ```
2. **Compile o projeto:**
   ```sh
   javac -d bin src/**/*.java
   ```
3. **Execute as classes Main de cada exercício ou teste unitário:**
   ```sh
   java -cp bin exercicio1.Main
   ```

---

## 🔹 Demonstrações

- Criação de produtos e aplicação de descontos.
- Cálculo de bônus de diferentes funcionários em uma lista.
- Uso de meios de transporte com aceleração e frenagem polimórficas.
- Processamento de pagamentos com validações.
- Manipulação de carrinhos imutáveis com cupons.
- Armazenamento de entidades genéricas em memória e busca por ID.
- Troca dinâmica de estratégia de frete com validação de CEP.

---

## 🔹 Observações

- Todas as exceções lançadas (`IllegalArgumentException`, `PagamentoInvalidoException`, `EntidadeNaoEncontradaException`, etc.) são tratadas para demonstrar regras de negócio.
- Projeto desenvolvido para estudo de POO, clean code e boas práticas de design em Java.

---
