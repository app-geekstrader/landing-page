# Geeks Trader - Landing Page

Landing page moderna e responsiva para o Geeks Trader, uma plataforma de ferramentas analíticas para mercados preditivos no Polymarket.

## 📋 Sobre o Projeto

Esta é uma landing page desenvolvida com foco em apresentar o Geeks Trader, um software avançado para operação com precisão na plataforma Polymarket. A página oferece:

- Design moderno com efeitos glassmorphism
- Suporte multilíngue (EN, PT, ES)
- Formulário de solicitação de acesso
- Animações fluidas e responsivas
- Interface totalmente responsiva

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - Glassmorphism effects
  - CSS Grid e Flexbox
  - Animações e transições
  - Design responsivo
  - Custom properties (CSS Variables)
- **JavaScript (Vanilla)** - Funcionalidades:
  - Sistema de internacionalização (i18n)
  - Modal de formulário
  - Detecção automática de idioma
  - Integração com FormSubmit
- **intl-tel-input** - Biblioteca para:
  - Seletor internacional de telefone com bandeiras
  - Validação de números de telefone
  - Máscaras automáticas por país
  - Detecção automática de país via IP

## 📁 Estrutura de Arquivos

```
landing-page/
├── assets/
│   ├── oficial.png             # Logo GT (com fundo)
│   └── oficial_sem_fundo.png   # Logo GT (sem fundo) - usado no header
├── index.html                  # Estrutura HTML principal
├── styles.css                  # Estilos e animações
├── script.js                   # Lógica e interatividade
├── polymarket-exemplo.png      # Imagem de demonstração
└── README.md                   # Documentação
```

## 🎨 Características do Design

### Paleta de Cores
- **Background**: `#0f1419` (Azul escuro profundo)
- **Primary**: `#00c853` (Verde neon)
- **Accent**: `#0a2540` (Azul escuro)
- **Text**: Branco e variações com opacidade

### Efeitos Visuais
- **Glassmorphism**: Efeito de vidro com blur e transparência
- **Blobs animados**: Elementos decorativos com gradientes flutuantes
- **Hover effects**: Transformações suaves em cards e botões
- **Sticky navbar**: Navegação fixa com efeito de vidro

### Tipografia
- **Fonte**: Outfit (Google Fonts)
- **Pesos**: 300, 400, 600, 800

## 🌍 Idiomas Suportados

- **EN** - English (Inglês)
- **PT** - Portuguese (Português)
- **ES** - Spanish (Espanhol)

O idioma é detectado automaticamente com base nas configurações do navegador do usuário e pode ser alterado através dos botões no cabeçalho.

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints em:

- **Desktop**: > 900px (Layout em grid de 2 colunas)
- **Tablet**: 600px - 900px (Layout em coluna única)
- **Mobile**: < 600px (Layout otimizado para dispositivos móveis)

## ✉️ Formulário de Contato

O formulário de solicitação de acesso utiliza o serviço **FormSubmit.co** para envio de emails sem necessidade de backend. Os dados coletados são:

- Nome
- Email
- Telefone (com seletor de país internacional)

O formulário possui:
- Validação de campos
- **Seletor de país com bandeiras** (intl-tel-input)
- **Máscara automática de telefone** baseada no país selecionado
- **Validação de número de telefone** conforme país
- **Detecção automática de país** via geolocalização IP
- Campo de busca de países
- Feedback visual durante envio
- Mensagens de sucesso/erro em múltiplos idiomas
- Animação de modal

## 🛠️ Como Executar

1. **Clone ou baixe o repositório**

2. **Abra o arquivo `index.html` em um navegador**
   - Basta dar duplo clique no arquivo
   - Ou usar um servidor local (recomendado):

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server -p 8000

# Usando PHP
php -S localhost:8000
```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

## 🎯 Funcionalidades

### Seções Principais

1. **Hero Section**
   - Badge "Coming Soon"
   - Título impactante
   - Descrição da plataforma
   - Call-to-action (Request Access)
   - Imagem de demonstração

2. **Features Section**
   - 🔮 Predictive Intelligence
   - ⚡ Real-Time Execution
   - 🔒 Analytical Edge

3. **Footer**
   - Copyright
   - Disclaimer de afiliação

### Interatividade

- **Seletor de idioma**: Troca instantânea entre EN/PT/ES
- **Modal de acesso**: Formulário animado com validação
- **Animações**: Efeitos hover em cards e botões
- **Blobs animados**: Background dinâmico e moderno

## 📝 Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo [styles.css](styles.css):

```css
:root {
    --color-bg: #0f1419;
    --color-primary: #00c853;
    --color-accent: #0a2540;
    /* ... outras variáveis */
}
```

### Adicionar Novos Idiomas

No arquivo [script.js](script.js), adicione um novo objeto no dicionário `translations`:

```javascript
const translations = {
    en: { /* ... */ },
    pt: { /* ... */ },
    es: { /* ... */ },
    fr: { /* novo idioma */ }
};
```

### Configurar Email de Destino

No arquivo [script.js](script.js) linha 161, substitua o hash pelo seu próprio email configurado no FormSubmit:

```javascript
const response = await fetch("https://formsubmit.co/ajax/SEU_HASH_AQUI", {
    // ...
});
```

## 🔒 Segurança

- Uso de HTTPS para recursos externos
- Validação de formulário client-side
- Proteção contra spam via FormSubmit.co
- Nenhum dado sensível armazenado localmente

## 📄 Licença

© 2026 Geeks Trader. Todos os direitos reservados.

**Nota**: Este projeto não é afiliado à Polymarket.

## 🤝 Contribuição

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões sobre a landing page, use o formulário de contato disponível na própria página.

---

**Desenvolvido com ❤️ para o Geeks Trader**
