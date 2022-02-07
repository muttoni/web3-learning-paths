/*   
{
  name: "",
  description: "", // short description of what it covers
  author: "",
  goal: ""         // what the user will learn
  learningType: "" // guide, tutorial, reference, foundational, resource
  contentType: [""], // article, code, video, docs
  tags: [],        // tags (e.g. fcl, flow-cli, cadence)
  duration: 1,     // time in minutes
  importance: 0 // essential = 1 hour, recommended = 1 day, optional = 1 week
  src: // link to the content
  
} 
*/

export default [
  
  // Blockchain Basics
  {
    name: "Learn about Blockchain",
    description: "Get a foundational understanding of Blockchain, Smart contracts and transactions.",
    author: "Jacob Tucker",
    goal: "Understand Blockchain",
    learningType: "foundational",
    contentType: ["article"],
    tags: ["foundational", "basics"],
    duration: 15,
    importance: 0,
    src: "https://github.com/jacob-tucker/Flow-Zero-to-Jacob/tree/main/chapter1/day1"
  },

  // Flow Technical Primer
  {
    name: "Understand the anatomy of a Flow Web3 App",
    description: "Get a foundational understanding of how building a Web3 App on Flow works.",
    author: "Flow Core Contributors",
    goal: "Understand Flow",
    learningType: "foundational",
    contentType: ["article"],
    tags: ["foundational", "why flow"],
    duration: 15,
    importance: 0,
    src: "https://docs.onflow.org/dapp-development/flow-dapp-anatomy/"
  },
  
  // Intro to Flow on YouTube
  {
    name: "Intro to Flow by its creators",
    description: "A video explaining Flow and why it's the fast, scalable, reliable blockchain for next billion users. This video covers how it works at a high level, directly the original creators.",
    author: "Flow Core Contributors",
    goal: "Understand Flow",
    learningType: "foundational",
    contentType: ["video"],
    tags: ["foundational", "why flow"],
    duration: 45,
    importance: 1,
    src: "https://www.youtube.com/watch?v=q0hmnhtt8fQ"
  },
  
  
  // Kims Intro to Flow and Cadence
  {
    name: "Introduction to Cadence Playlist",
    description: "A YouTube playlist containing two introductory videos on how to get started with Cadence",
    author: "Flow Core Contributors",
    goal: "Understand how Cadence work",
    learningType: "tutorial",
    contentType: ["video"],
    tags: ["cadence"],
    duration: 60,
    importance: 1,
    src: "https://www.youtube.com/playlist?list=PL0qVMKzYEBRPjxkssDa0-aG2cFlrv0sZV",
  },
  
  
  // Cadence Playground Tutorials
  {
    name: "Experiment on the Flow Playground",
    description: "Give Cadence a try yourself by going to the Flow Playground and going through the tutorials. Recommended first ones are 'Hello World' and minting Fungible and Non-Fungible Tokens",
    author: "Flow Core Contributors",
    goal: "Learn how to write Cadence",
    learningType: "tutorial",
    contentType: ["code"],
    tags: ["cadence"],
    duration: 30,
    importance: 0,
    src: "https://play.onflow.org/"
  },
  
  // Flow CLI
  {
    name: "Install the CLI",
    description: "Setup the Flow CLI, an essential tool for local development and application deployment.",
    author: "Flow Core Contributors",
    goal: "Learn the Tooling",
    learningType: "guide",
    contentType: ["code", "reference"],
    tags: ["fcl", "flow cli", "web3", "dapp", "frontend", "local development"],
    duration: 15,
    src: "https://docs.onflow.org/flow-cli/install/",
    importance: 1
  },
  
  // FCL Quickstart
  {
    name: "Flow Client Library (FCL) Quickstart",
    description: "Learn how to build a very bare-bones Web3 dapp that interacts with the Flow testnet blockchain.",
    author: "Flow Core Contributors",
    goal: "Learn how to interact with Flow from a Web3 app",
    learningType: "tutorial",
    contentType: ["code"],
    tags: ["fcl", "web3", "dapp", "frontend"],
    duration: 20,
    importance: 1
  },

  // NFT Pet Store
  {
    name: "Build an NFT Pet Store",
    description: "This tutorial focuses on building up a basic understanding of smart contract and NFTs. You are expected to bring a working JavaScript and basic React.js (opens new window)skills to the table, but a passing familiarity with blockchains, web3, and NFTs will be just fine if you are happy to catch up.",
    tips: "Try to modify the core contracts to introduce the concept of Royalties (or any other custom feature you want). Stick with it! Reach out if you get stuck.",
    author: "NFT School",
    authorUrl: "https://nftschool.dev/",
    goal: "Learn the basics of an NFT dapp",
    learningType: "tutorial",
    contentType: ["code", "article"],
    tags: ["fcl", "cadence", "nft", "web3", "dapp", "frontend"],
    duration: 60,
    src: "https://nftschool.dev/tutorial/flow-nft-marketplace/#prerequisites",
    importance: 0
  },
  
  // Flow Video Course
  {
    name: "Flow Video Course",
    description: "A multi-part video playlist covering Flow and Cadence from the ground up.",
    author: "Jacob Tucker",
    authorUrl: "#",
    goal: "Learn the basics of Flow, Cadence and Web3 dApp development",
    learningType: "tutorial",
    contentType: ["video"],
    tags: ["foundational", "fcl", "cadence", "web3", "dapp", "frontend"],
    duration: 350,
    importance: 1,
    src: "https://www.youtube.com/watch?v=iVevnipJbHo&list=PLvcQxi9WyGdF32YuZABVTx-t3-FsBNCN2"
  },
  

  // Flow Zero to Jacob Course
  {
    name: "Flow Zero-to-Jacob Github Course",
    description: "A complete course on how to go from little programming experience to deploying complete Decentralized Applications and Smart Contracts on the Flow Blockchain. In this course, you will master Flow & Cadence development.",
    author: "Jacob Tucker",
    authorUrl: "#",
    goal: "Learn the basics of Flow, Cadence and Web3 dApp development",
    learningType: "tutorial",
    contentType: ["video"],
    tags: ["foundational", "fcl", "cadence", "web3", "dapp", "frontend"],
    duration: 600,
    importance: 2
  },
  
  // CryptoDappy
  {
    name: "CryptoDappy",
    description: "A step-by-step video guided mission on how to build a simple NFT Marketplace dapp that interacts with the Flow testnet blockchain.",
    author: "Ben Ebner & Community Contributors",
    authorUrl: "https://github.com/bebner/crypto-dappy",
    goal: "Learn the basics of an NFT dapp",
    learningType: "tutorial",
    contentType: ["code", "video"],
    tags: ["fcl", "cadence", "web3", "nft", "dapp", "frontend", "react"],
    duration: 240,
    src: "https://www.cryptodappy.com",
    importance: 1
  },
  
  
  
  // Kitty Items
  {
    name: "Kitty Items",
    description: "Based on CryptoKitties, Kitty Items is an example of a full-stack dapp built on Flow.",
    tips: "Try to modify the core contracts to introduce the concept of Royalties (or any other custom feature you want). Stick with it! Reach out if you get stuck.",
    author: "Flow Core Contributors",
    goal: "Learn how a fully-featured NFT Marketplace is implemented",
    learningType: "reference",
    contentType: ["code"],
    tags: ["fcl", "nft marketplace", "nft", "cadence", "web3", "dapp", "frontend", "backend"],
    duration: 240,
    src: "https://github.com/onflow/kitty-items",
    importance: 2
  },  
  
  
  // Gold Star Contracts
  {
    name: "Gold Star Contracts",
    description: "A non-exhaustive list of Cadence contracts, scripts, transactions that exemplify best practices.",
    author: "Various",
    goal: "Understand how the pros write smart contracts, what patterns they use, so that you can build off of idiomatic best practices!",
    learningType: "reference",
    contentType: ["code"],
    tags: ["fcl", "contracts", "cadence", "web3", "dapp"],
    duration: 120,
    src: "https://github.com/muttoni/gold-star-contracts",
    importance: 2
  }, 
]