# AI Vibe Code Editor

AI Vibe Code Editor is a browser-based coding environment built with Next.js, Monaco Editor, WebContainers, and AI tooling. It lets developers create projects, edit code in an integrated workspace, sign in with authentication, and run applications directly in the browser.

The project is designed for fast experimentation, project prototyping, and AI-assisted development workflows.

## Features

- Authentication with NextAuth using GitHub and Google providers
- Modern dashboard for project management
- File and project organization inside a browser-based workspace
- Monaco-powered editor experience with code-focused UX
- AI-assisted development patterns and code completion integration
- WebContainer-based runtime for running projects in-browser
- Terminal support for command execution and debugging
- Dark and light theme support
- Multiple starter templates for common app setups

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Editor | Monaco Editor |
| Runtime | WebContainers |
| Auth | NextAuth |
| Database | Prisma + MongoDB |
| AI | Ollama-compatible models |
| Terminal | xterm.js |

## Project Structure

```text
.
├── app/
├── components/
├── hooks/
├── lib/
├── modules/
├── prisma/
├── public/
├── vibecode-starters/
├── .env.example
├── .gitignore
├── auth.config.ts
├── auth.ts
├── components.json
├── eslint.config.mjs
├── middleware.ts
├── next-auth.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── routes.ts
├── tsconfig.json
└── README.md
```

## Prerequisites

Before starting the app, make sure you have the following installed:

- Node.js 20 or newer
- npm
- MongoDB instance or connection string
- Ollama for local model support if you want AI features enabled
- Docker if you want containerized local environment support

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Manish-tx/AI-vibe-code-editor.git
cd AI-vibe-code-editor
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
cp .env.example .env.local
```

4. Configure the required environment variables in `.env.local`:

```env
DATABASE_URL="your_mongodb_connection_string"
AUTH_SECRET="your_auth_secret"
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_client_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Running the App

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Optional AI Setup

If you want to use local AI features through Ollama, install Ollama and run a compatible model such as:

```bash
ollama run codellama
```

The app can then use local LLM support for code assistance and generation workflows.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Contributing

Contributions are welcome. If you want to improve the app, open a pull request with a clear description of the change and the problem it solves.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Next.js
- React
- Prisma
- Monaco Editor
- WebContainers
- Ollama
- xterm.js
- shadcn/ui

```
