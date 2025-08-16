# 🎁 Challenge Amigo Secreto 

Este projeto foi desenvolvido como parte do programa da **Oracle Next Education** em parceria com a **Alura**.  
O desafio consistia em implementar a **lógica em JavaScript** para um site de **Amigo Secreto**, utilizando conhecimentos que adquiri nos cursos:
- Lógica de programação: mergulhe em programação com JavaScript
- Lógica de programação: explore funções e listas
- Git e GitHub: compartilhando e colaborando em projetos

---

## ⚙️ Como funciona

O site de **Amigo Secreto** permite que os usuários adicionem participantes e realizem o sorteio de forma dinâmica e interativa.

### ➕ Adicionar Participantes
- O usuário digita o nome no campo de texto.  
- Ao clicar em **Adicionar**, a função `adicionarAmigo()` é executada:  
  - Verifica se o campo não está vazio.  
  - Adiciona o nome à lista de participantes (`participantes[]`).  
  - Atualiza a lista visual exibida na tela.  
  - Limpa o campo e retorna o foco para o input, agilizando a digitação de novos nomes.

### 🎲 Sortear Amigo
- Ao clicar no botão **Sortear**, a função `sortearAmigo()` é executada:  
  - Confere se a lista de participantes não está vazia.  
  - Sorteia aleatoriamente um participante usando `Math.floor(Math.random() * tamanhoLista)`.  
  - Exibe o resultado do sorteio na tela.  
  - Altera o botão para **Sortear de novo**, permitindo realizar outro sorteio sem precisar reiniciar a lista.  
  - Exibe o botão **Nova Lista** para permitir criar uma nova lista.

### 🗑️ Nova Lista
- Ao clicar no botão **Nova Lista**, a função `novaLista()` é executada:  
  - Limpa o array `participantes` e a lista visual.  
  - Reseta o botão de sortear para o estado inicial (**Sortear amigo**).  
  - Limpa o resultado do último sorteio.  
  - Mantém o foco no input para facilitar adicionar novos nomes.


### ✨ Comportamento extra
- Alerts aparecem caso o usuário tente adicionar um nome vazio ou sortear sem participantes.  
- O input é constantemente focado para tornar a experiência rápida e fluida.  

---

## 📸 Demonstração
Veja o site funcionando

![Amigo Secreto Demo](assets/challenge.gif)

---

## 🌐 Teste você mesmo
🎁 Clique aqui para testar o site: [site-amigo-secreto](https://mands-mands.github.io/challenge-amigo-secreto/)

--- 

## 🛠️ Tecnologias Utilizadas
- **HTML5** → Estrutura do site (fornecido no desafio).  
- **CSS3** → Estilização do site (fornecido no desafio).  
- **JavaScript (ES6+)** → Implementação da lógica de funcionamento.  

---

## 📱 Responsividade
O layout do site foi ajustado para ser **responsivo**, garantindo que o Amigo Secreto funcione bem em desktops, tablets e smartphones.

---

## 🤝 Créditos
- [Oracle Next Education](https://www.oracle.com/br/education/oracle-next-education/) 
- [Alura](https://www.alura.com.br/) 
- Desenvolvido por [mands-mands](https://github.com/mands-mands)



