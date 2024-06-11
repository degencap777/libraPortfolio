import { FC } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionTitle } from "./StyledComponent";

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center py-20 lg:py-[20px] flex-col">
      <SectionTitle>
        GH <span className="highlight">WORK</span>
      </SectionTitle>
      <a
        href="https://github.com/libraiger"
        target="_blank"
        rel="noreferrer"
        className="text-purple-800 dark:text-purple-500 font-bold"
        style={{ textAlign: "center", padding: "10px 0" }}
      >
        BTC Ordinal & Rune, Rust & Solidity SC, NFT, Dex, Defi, SocialFi, GameFi, Langchain, LSTM, ML
      </a>
      <GitHubCalendar
        username="libraiger"
        blockSize={15}
        blockMargin={5}
        fontSize={12}
      />
    </div>
  );
};

export default Footer;
