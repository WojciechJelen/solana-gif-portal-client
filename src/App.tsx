import { useEffect, useState } from "react";
import twitterLogo from "./assets/twitter-logo.svg";
import "./App.css";
import { useWallet } from "./hooks/useWallet";
import { ConnectWalletButton } from "./components/ConnectWalletButton";
import { GifsGrid } from "./components/GifsGrid";
import SubmitGifForm from "./components/SubmitGifForm";

const TEST_GIFS = [
  "https://media.giphy.com/media/xUNd9JdmvY6vhoN4OY/giphy.gif",
  "https://media.giphy.com/media/3owvKlBvKezRyIyyyc/giphy.gif",
  "https://media.giphy.com/media/U9iBdl5uQSEV2/giphy.gif",
  "https://media.giphy.com/media/koPZEcZ0inEIg/giphy.gif",
];

const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { connectWallet, walletAddress } = useWallet();
  const [gifList, setGifList] = useState<Array<string>>([]);

  const onGifSubmit = (gifUrl: string) => {
    if (gifUrl.length > 0) {
      console.log("Gif link:", gifUrl);
    } else {
      console.log("Empty input. Try again.");
    }
  };

  useEffect(() => {
    if (walletAddress) {
      setGifList(TEST_GIFS);
    }
  }, [walletAddress]);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
          {!walletAddress ? (
            <div className="unconnected-container">
              <ConnectWalletButton connectWallet={connectWallet} />
            </div>
          ) : (
            <div className="connected-container">
              <SubmitGifForm onSubmit={onGifSubmit} />
              <GifsGrid gifs={gifList} />
            </div>
          )}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
