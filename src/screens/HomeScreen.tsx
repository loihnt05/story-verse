import { useNavigate } from "react-router-dom";
import { startGame } from "../GameStarter";
import { MAIN_MENU_ROUTE } from "../constans";
import Navbar from "../components/HomeScreen/NavBar";
import HeroSlider from "../components/HomeScreen/HeroSlider";
import RankingList from "../components/HomeScreen/RankingList";
import PremiumGameList from "../components/HomeScreen/GameList";

export default function HomeScreen() {
  const navigate = useNavigate();
  async function handleStartGame() {
    await startGame();
    navigate(MAIN_MENU_ROUTE);
  }

  return (
    <div className=" flex flex-col items-center justify-between w-screen">
      <Navbar />
      <div className="w-full px-20">
        <div className="flex w-full h-[57vh] justify-between gap-4 mt-3 mb-5">
          <HeroSlider />
          <RankingList />
        </div>
        <PremiumGameList />
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}
