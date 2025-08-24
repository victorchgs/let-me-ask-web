# Let me Ask - Web App

Aplicação web do projeto **Let me Ask**, desenvolvida durante o evento **NLW Agents** da Rocketseat.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones SVG para React

## 🛠️ Ferramentas de Desenvolvimento

- **Biome** - Linter e formatador de código (configurado com Ultracite)
- **TypeScript** - Compilador e verificador de tipos
- **Vite** - Dev server e build tool

## 📁 Estrutura do Projeto

```
src/
├── components/    # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── types/         # Definições de tipos TypeScript
├── lib/           # Utilitários e configurações
├── app.tsx        # Componente principal
└── main.tsx       # Ponto de entrada
```

## ⚡ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Setup e Instalação

1. **Clone o repositório**
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```

## 🔧 Configurações

- **TypeScript**: Configurado com strict mode e path mapping (`@/*` → `./src/*`)
- **Vite**: Plugin React e Tailwind CSS integrados
- **Biome**: Linter configurado com regras do Ultracite
- **Tailwind**: Configuração via plugin Vite

## 📝 Padrões do Projeto

- Estrutura baseada em componentes funcionais React
- TypeScript para tipagem estática
- Tailwind CSS para estilização
- Roteamento com React Router
- Gerenciamento de estado com TanStack Query
- Componentes acessíveis com Radix UI
