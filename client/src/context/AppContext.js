import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setIsLoading(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        setIsLoading(false);
      }
    } else {
      alert("Please install MetaMask to connect your wallet!");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setIsWalletConnected(false);
  };

  return (
    <AppContext.Provider
      value={{
        isWalletConnected,
        walletAddress,
        isLoading,
        connectWallet,
        disconnectWallet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    return useContext(AppContext);
};