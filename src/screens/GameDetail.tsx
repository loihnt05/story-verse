import { useNavigate } from "react-router-dom";
import { startGame } from "../GameStarter";
import { MAIN_MENU_ROUTE } from "../constans";
import Navbar from "../components/HomeScreen/NavBar";
import PremiumGameList from "../components/HomeScreen/GameList";
import FeaturedNovelCard from "../components/HomeScreen/FeaturedNovelCard";

export default function GameDetail() {
  const navigate = useNavigate();
  async function handleStartGame() {
    await startGame();
    navigate(MAIN_MENU_ROUTE);
  }

  const demoData: FeaturedNovelProps = {
  title: "Visual Noval 1",
  rating: 8.2,
  description: "Cơn mưa rào mùa hạ vừa dứt. Không khí trở nên trong lành và mát rượi. Mùi đất ẩm nồng nàn xộc thẳng lên, quyện với hương lá thông còn đọng nước. Những giọt mưa cuối cùng vẫn lười biếng rơi từ tán cây, vỡ tan trên vũng nước nhỏ. Đâu đó, một vài tia nắng yếu ớt bắt đầu len lỏi qua kẽ lá...",
  image: "https://cdn.animevietsub.show/data/big_banner/2025/06/03/animevsub-TAFaVOWQ6s.jpg", // Ảnh ví dụ không gian tối xanh
  genres: ["Kinh dị", "Bí ẩn", "Tâm lý"],
  author: "Nameless Writer",
  status: "Đang tiến hành"
};

  return (
    <div className=" flex flex-col items-center justify-between w-screen">
      <Navbar />
      <div className="w-full px-20">
        <div className="w-full h-[57vh] mt-3 mb-5">
            <FeaturedNovelCard {...demoData} />
        </div>
        <PremiumGameList />
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}
