# Página de vendas: 250 Recetas para Diabéticos + bônus

Landing page única em espanhol (LATAM), mobile-first, focada em conversão, seguindo exatamente o briefing enviado.

## Estrutura da página (uma só página, rolagem contínua)

1. Barra fixa de urgência no topo (78% de desconto, acesso vitalício)
2. Herói: selo, título, subtítulo, mockup 3D dos dois e-books, 3 bullets e botão de compra laranja com micro-texto de segurança
3. Seção de dor e empatia com 3 cartões e frase-ponte
4. Grade de 7 categorias de receitas (desayunos, platos principales, ensaladas, sopas, snacks, postres, bebidas) com contagem de receitas
5. Bônus "Superando la Diabetes" com etiqueta de valor $19 grátis e 4 destaques
6. Prova social: 3 depoimentos em estilo cartão com 5 estrelas
7. Caixa de preço (#comprar): pilha de valor, preço riscado $56, preço $7.90, botão gigante e selos de confiança
8. Garantia de 7 dias com selo
9. Perguntas frequentes em acordeão (4 perguntas)
10. Barra flutuante inferior no celular com botão de compra

## Identidade visual

- Fundo branco e cinza claro (#FFFFFF, #F8FAFC)
- Verde saúde (#166534 / #15803D), verde menta para selos (#DCFCE7)
- Botões laranja (#EA580C, hover #C2410C) com leve pulsação
- Textos em slate 900 / slate 600, tipografia Inter/Poppins
- Sem menu, sem links externos que tirem o visitante da página

## Imagens

Vou gerar as capas dos dois e-books e um mockup 3D do combo (tablet + livros) com selos de comida, além de imagens de apoio das categorias. As capas seguem os títulos reais dos PDFs enviados.

## Detalhes técnicos

- Rota única em `src/routes/index.tsx` substituindo o placeholder, com componentes por seção em `src/components/`
- Tailwind v4: novas cores/tokens (verde, menta, laranja CTA) definidos em `src/styles.css`; fontes carregadas via `<link>` no `__root.tsx`
- Acordeão e barra fixa com estado React; rolagem suave até `#comprar`
- Todos os botões de compra apontam para `https://pay.hotmart.com/[HOTMART_CODE]?checkoutMode=10`, com o código isolado numa constante para troca fácil
- Ícones Lucide; head() da rota com título, descrição e tags sociais próprios
- Layout testado de 360px até 1440px

## Ponto em aberto

O link da Hotmart fica com o placeholder `[HOTMART_CODE]` até você me passar o código real do produto.
