# 📋 Página Pessoal - Currículo Digital

Uma página pessoal no estilo currículo, desenvolvida com HTML5, CSS3 e TypeScript.

Este projeto foi desenvolvido para a tarefa de desenvolvimento de uma página pessoal do curso Dev. Full Stack Jr. (+praTi & Codifica).

---

## 📁 Estrutura de Pastas

```
.
├── dist/                # Arquivos gerados após build (prontos para deploy)
├── node_modules/        # Dependências do projeto
├── resources/           # Imagens e outros recursos estáticos
├── src/                 # Código-fonte principal
│   ├── index.html       # Página principal
│   ├── style.css        # Estilos principais
│   └── scripts/         # Scripts TypeScript do projeto
│       ├── main.ts
│       ├── emailContextMenu.ts
│       ├── cellphoneContextMenu.ts
│       ├── experienceCarousel.ts
│       └── ... outros módulos
├── package.json         # Configurações do projeto e scripts npm
├── tsconfig.json        # Configuração do TypeScript
└── README.md            # Este arquivo
```

---

## 🚀 Como rodar localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/bigparty1/Pagina-Pessoal.git
   cd Pagina-Pessoal
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Execute em modo desenvolvimento (compilação automática + live reload):**
   ```sh
   npm run dev
   ```
   O site estará disponível em [http://127.0.0.1:8080](http://127.0.0.1:8080).

4. **Para gerar o build de produção:**
   ```sh
   npm run build
   ```
   Os arquivos prontos estarão na pasta `dist/`.

5. **Limpar arquivos de build:**
   ```sh
   npm run clean
   ```

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e responsividade)
- TypeScript
- [cpx](https://www.npmjs.com/package/cpx) (cópia de arquivos estáticos)
- [concurrently](https://www.npmjs.com/package/concurrently) (execução paralela de scripts)
- [live-server](https://www.npmjs.com/package/live-server) (servidor local com live reload)

---

## ✨ Funcionalidades

- **Currículo digital** com informações profissionais e de contato
- **Menus de contexto** para copiar e-mail/telefone ou abrir apps padrão
- **Carrossel de experiências profissionais**
- **Responsivo** e com suporte a tema escuro/claro via preferências do sistema

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para