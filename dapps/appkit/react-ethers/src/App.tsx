import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
import { arbitrum, mainnet, polygon, acala, chiliz, berachainTestnetbArtio, AppKitNetwork, sepolia } from '@reown/appkit/networks'
import { Hooks } from './components/hooks'

import "./App.css"

// 1. Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_PROJECT_ID
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://reown.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [arbitrum, mainnet];


// 4. Create a AppKit instance
const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <appkit-button />
          <Hooks />
          <p>
            <button onClick={() => modal.adapters![0].connectionControllerClient?.disconnect()}>Disconnect JS</button>
          </p>
    </div>
  )
}

export default App
