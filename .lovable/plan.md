# Atualização dos Depoimentos na Página Inicial

## Objetivo
Substituir os 4 depoimentos fictícios atuais na seção "Quem já tem o clima perfeito em casa" pelos 4 depoimentos reais do Google fornecidos, mantendo a estrutura de cards, ícones e layout responsivo existentes.

## O que será alterado
- **Arquivo:** `src/routes/index.tsx`
- **Escopo:** apenas o array `depoimentos` (linhas 140-165).

## Novos depoimentos
1. **romeu moraes** — Avaliação do Google  
   "Minha experiência foi incrível, o Bruno e excelente no trabalho dele, estamos muito felizes com o resultado."

2. **Juliano Baptista** — Avaliação do Google  
   "Excelentes profissionais, valeu o investimento, serviço de primeira, muito obrigado !!"

3. **Guilherme Oliveira** — Avaliação do Google  
   "Trabalho impecável, instalação do ar Condicionado DAIKIN seguindo todas as normas do Fabricante e seguindo a risca o manual! Preço justo e trabalho de confiança."

4. **Suellen Mariano** — Avaliação do Google  
   "Bom atendimento, educados e prestativos. Realizaram a instalação com cuidado, profissionalismo e organização. Prestaram todas as informações necessárias. 🙏"

## Invariantes
- Nenhuma alteração no JSX de renderização da seção de depoimentos.
- Nenhuma alteração nos estilos, ícones ou grid responsivo.
- Apenas os valores dos campos `nome`, `local` e `texto` do array serão atualizados.

## Validação
- Execução do typecheck (`bunx tsc --noEmit` ou equivalente).
- Verificação visual no preview para confirmar que os 4 novos cards aparecem corretamente na seção "Quem já tem o clima perfeito em casa".