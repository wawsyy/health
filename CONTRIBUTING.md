# Contributing to Encrypted Mental Health Survey

Thank you for your interest in contributing to the Encrypted Mental Health Survey project!

## Development Setup

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/health.git
   cd health
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install && cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Copy and configure environment files
   cp frontend/.env.example frontend/.env.local
   # Edit .env.local with your WalletConnect project ID
   ```

4. **Start development**
   ```bash
   # Terminal 1: Start local Hardhat node
   npm run deploy:local

   # Terminal 2: Start frontend
   cd frontend && npm run dev
   ```

## Project Structure

```
pro19/
├── contracts/          # Smart contracts
├── frontend/           # Next.js application
├── test/              # Contract tests
├── tasks/             # Hardhat tasks
├── deploy/            # Deployment scripts
└── types/             # TypeScript types
```

## Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow conventional commits
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**
   ```bash
   # Run contract tests
   npm run test

   # Run frontend linting
   cd frontend && npm run lint

   # Build frontend
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Code Quality

- **Linting**: `npm run lint` for contracts, `cd frontend && npm run lint` for frontend
- **Testing**: `npm run test` for comprehensive test coverage
- **TypeScript**: `cd frontend && npm run type-check` for type checking

### Commit Conventions

We follow [Conventional Commits](https://conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Testing

### Contract Tests

```bash
# Run all tests
npm run test

# Run tests on Sepolia
npm run test:sepolia
```

### Frontend Testing

```bash
cd frontend
npm run type-check
npm run lint
npm run build
```

## Deployment

### Local Deployment

```bash
npm run deploy:local
```

### Testnet Deployment

```bash
npm run deploy:sepolia
npm run verify:sepolia
```

### Production Deployment

```bash
npm run deploy:mainnet
# or
npm run deploy:polygon
```

## Security Considerations

- **Private Keys**: Never commit private keys or mnemonics
- **Environment Variables**: Use `.env.local` for local development
- **FHEVM**: Ensure proper encryption handling in production

## Support

If you need help, please:

1. Check the [README.md](README.md) for setup instructions
2. Review existing issues and pull requests
3. Create a new issue for bugs or feature requests

Thank you for contributing! 🎉
