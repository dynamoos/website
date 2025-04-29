# Dynamoos Web

A modern React web application built with TypeScript, Tailwind CSS, and Vite.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-Public-red)

## 🚀 Features

- **Modern React Setup** - Built with React 19 and TypeScript for type safety
- **High Performance** - Optimized with Vite for lightning-fast builds and hot module replacement
- **Responsive Design** - Mobile-first approach using Tailwind CSS v4
- **Component Library** - Utilizing Headless UI and Radix UI for accessible, customizable components
- **Animations** - Smooth transitions with Motion library and TW Animate CSS
- **Type Safety** - Full TypeScript support throughout the codebase
- **Routing** - Modern routing with React Router v7
- **Code Quality** - Enforced with ESLint (Airbnb config) and Biome
- **Dynamic Content** - Interactive elements with React Simple Typewriter

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Docker (for containerization)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dynamoosweb.git
cd dynamoosweb

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 CI/CD Pipeline

Our project implements a robust CI/CD pipeline that automates building, and deployment:

### Workflow

1. **Code Validation**:
   - Static code analysis with ESLint
   - Type checking with TypeScript
   - Formatting verification with Prettier and Biome


2**Build Process**:
   - TypeScript compilation
   - Vite optimization and bundling
   - Asset optimization

3**Deployment**:
   - Automatic staging deployment on PR approval
   - Production deployment on main branch merges
   - Rollback capabilities for failed deployments

### Integration Points

- **GitHub Actions** for PR validation and automated testing
- **Docker** images built and pushed to container registry
- **Infrastructure as Code** for deployment environment consistency

## 🐳 Docker Implementation

The project is fully containerized for consistent development and deployment environments.


### Usage

```bash
# Development with hot-reload
docker-compose up

# Production build
docker build -t dynamoosweb .
docker run -p 80:80 dynamoosweb
