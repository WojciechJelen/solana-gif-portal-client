import React from "react";

type PropsType = {
  connectWallet: () => void;
};

export const ConnectWalletButton: React.FC<PropsType> = ({ connectWallet }) => {
  return (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
};
