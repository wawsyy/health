# Encrypted Mental Health Survey

A privacy-preserving mental health questionnaire system built with FHEVM (Fully Homomorphic Encryption Virtual Machine) by Zama. This application allows users to submit mental health surveys with encrypted data that only they can decrypt.

## Features

- **Encrypted Data Storage**: All survey responses are encrypted using FHEVM before being stored on-chain
- **Privacy-Preserving**: Platform cannot see plaintext survey responses
- **User-Controlled Decryption**: Only the user who submitted the survey can decrypt their own data
- **Multiple Surveys**: Users can submit multiple surveys over time
- **Interactive Sliders**: Intuitive range sliders for precise input with real-time feedback
- **Latest Survey Access**: Convenient function to retrieve the most recent survey data
- **Enhanced Loading States**: Animated loading indicators and clear status messages
- **Beautiful UI**: Modern, user-friendly interface built with Next.js and Tailwind CSS
- **Rainbow Wallet Integration**: Easy wallet connection using RainbowKit

## Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm or yarn/pnpm**: Package manager

### Installation

1. **Install root dependencies**

   ```bash
   npm install
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Set up environment variables**

   ```bash
   npx hardhat vars set MNEMONIC

   # Set your Infura API key for network access
   npx hardhat vars set INFURA_API_KEY

   # Optional: Set Etherscan API key for contract verification
   npx hardhat vars set ETHERSCAN_API_KEY
   ```

4. **Compile contracts**

   ```bash
   npm run compile
   ```

5. **Run tests**

   ```bash
   npm run test
   ```

6. **Deploy to local network**

   ```bash
   # Start a local FHEVM-ready node
   npx hardhat node
   
   # In another terminal, deploy to local network
   npx hardhat deploy --network localhost
   ```

7. **Generate ABI files for frontend**

   ```bash
   cd frontend
   npm run genabi
   cd ..
   ```

8. **Start frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

9. **Deploy to Sepolia Testnet**

   ```bash
   # Deploy to Sepolia
   npx hardhat deploy --network sepolia
   
   # Verify contract on Etherscan
   npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
   ```

10. **Test on Sepolia Testnet**

    ```bash
    # Once deployed, you can run a simple test on Sepolia.
    npx hardhat test --network sepolia
    ```

## Project Structure

```
pro20/
├── contracts/                    # Smart contract source files
│   └── MentalHealthSurvey.sol    # Main FHE survey contract
├── deploy/                       # Deployment scripts
├── tasks/                        # Hardhat custom tasks
├── test/                         # Test files
│   ├── MentalHealthSurvey.ts    # Local tests
│   └── MentalHealthSurveySepolia.ts  # Sepolia tests
├── frontend/                     # Next.js frontend application
│   ├── app/                     # Next.js app directory
│   ├── components/              # React components
│   ├── hooks/                   # Custom React hooks
│   ├── fhevm/                   # FHEVM utilities
│   └── abi/                     # Auto-generated contract ABIs
├── hardhat.config.ts            # Hardhat configuration
└── package.json                 # Dependencies and scripts
```

## Available Scripts

| Script             | Description              |
| ------------------ | ------------------------ |
| `npm run compile`  | Compile all contracts    |
| `npm run test`     | Run all tests            |
| `npm run coverage` | Generate coverage report |
| `npm run lint`     | Run linting checks       |
| `npm run clean`    | Clean build artifacts    |

## Survey Fields

Each mental health survey includes the following encrypted fields (0-100 scale):

- **Stress Level**: Current stress level
- **Anxiety Level**: Current anxiety level
- **Mood Score**: Overall mood assessment
- **Sleep Quality**: Quality of sleep
- **Energy Level**: Current energy level

## Security & Privacy

- All survey responses are encrypted using FHEVM before submission
- Only the user who submitted the survey can decrypt their data
- The platform cannot access plaintext survey responses
- Data is stored on-chain in encrypted form

## Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)
- [FHEVM Hardhat Plugin](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat)

## Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   ```bash
   # Vercel will automatically detect the configuration
   # Root Directory: frontend/
   # Framework: Next.js
   ```

2. **Set Environment Variables**
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Your WalletConnect project ID

3. **Deploy**
   - Vercel automatically builds and deploys on git push

### Manual Deployment

```bash
# Install dependencies
npm install
cd frontend && npm install && cd ..

# Build contracts
npm run compile

# Deploy contracts (choose network)
npm run deploy:sepolia
npm run deploy:mainnet
npm run deploy:polygon

# Generate ABI for frontend
cd frontend && npm run genabi && cd ..

# Build frontend
cd frontend && npm run build
```

## License

This project is licensed under the MIT License.

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/zama-ai/fhevm/issues)
- **Documentation**: [FHEVM Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)

---

**Built with ❤️ using Zama FHEVM**

