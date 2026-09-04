# Biosite — Hi-Tech Eletrônicos (Rio das Ostras)

Página única de link-in-bio no estilo "Bancada Y2K" (fundo grafite, tipografia Orbitron + Manrope, cartões de link neon), com galeria de trabalhos, formulário de contato e um painel para editar os links sem mexer no código.

## O que será construído

### 1. Página pública (`/`)
Coluna central mobile-first, fiel à direção escolhida:
- Avatar/logo com anel gradiente, nome "Hi-Tech Eletrônicos", selo "Rio das Ostras, RJ" e bio curta.
- 3 cartões de link (verde/roxo/azul):
  - WhatsApp → `https://wa.me/5522998706841`
  - Instagram → `https://www.instagram.com/hitecheletronicos/`
  - Avalie no Google → link de review do Google Maps informado
- Galeria "Serviços & trabalhos": grade 2x2 de cartões com imagem, título e legenda.
- Formulário "Peça um orçamento": nome, WhatsApp, mensagem, com validação e confirmação na tela.
- Rodapé com horário e endereço.

Os links e os itens da galeria vêm do banco, então o painel altera a página na hora.

### 2. Painel de administração (`/admin`)
- Login por e-mail e senha (só o dono acessa).
- Editar título, subtítulo, ícone/cor, URL e ordem de cada link; ativar/desativar e criar novos.
- Gerenciar itens da galeria (imagem, título, legenda, ordem).
- Ver as mensagens recebidas pelo formulário, com data e status de lida.

### 3. Backend (Lovable Cloud)
Preciso ativar o backend para login, banco e upload de imagens.
- `links`, `gallery_items`, `contact_messages`, `user_roles`
- Leitura pública dos links/galeria ativos; escrita apenas para admin.
- Envio do formulário permitido para visitantes; leitura só para admin.
- Bucket de imagens para a galeria e o logo.

## Detalhes técnicos

- Tokens da direção escolhida vão para `src/styles.css` em oklch (fundo `#0d1117`, texto `#e8eef5`, verde `#38e08a`, roxo `#b98cff`, azul `#4dd6ff`, azul-primário `#5b8def`); nada de cor fixa nos componentes.
- Fontes Orbitron (títulos) e Manrope (corpo) carregadas via `<link>` no `__root.tsx`.
- Rotas: `src/routes/index.tsx` (biosite), `src/routes/admin.tsx` (painel), `src/routes/auth.tsx` (login).
- Dados via server functions + TanStack Query; painel protegido por verificação de papel no servidor.
- Imagens da galeria: geradas para o lançamento (bancada, solda em placa, TV, troca de bateria) e substituíveis pelo painel.
- SEO: título e descrição próprios, JSON-LD de negócio local com endereço e horário.

## Fora do escopo agora
- Loja/checkout online e agendamento.
- Envio automático de e-mail ao receber mensagem (as mensagens ficam no painel).
