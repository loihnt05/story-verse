import { Eye, Heart, Play, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GAME_DETAIL_ROUTE } from "../../constans";

const games: GameItem[] = [
  {
    id: 1,
    title: "Crimson Night: The Awakening",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "245K",
    price: 100,
    isOwned: false,
    isFavorite: true,
    tags: ["Horror", "Mystery"],
    rating: 4.8,
  },
  {
    id: 2,
    title: "Cyber Soul: Rebith",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "1.2M",
    price: 0,
    isOwned: true,
    tags: ["Sci-fi", "Action"],
    rating: 4.5,
  },
  {
    id: 3,
    title: "Shadows of the Past",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "89K",
    price: 59,
    isOwned: false,
    tags: ["Thriller", "Story"],
    rating: 4.2,
  },
  {
    id: 4,
    title: "Eternal Dreamers",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "450K",
    price: 100,
    isOwned: true,
    isFavorite: true,
    tags: ["Fantasy", "Romance"],
    rating: 4.9,
  },
  {
    id: 5,
    title: "Eternal Dreamers",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "450K",
    price: 100,
    isOwned: true,
    isFavorite: true,
    tags: ["Fantasy", "Romance"],
    rating: 4.9,
  },
];

export default function PremiumGameList() {
  const navigate = useNavigate();
  const gotoGameDetail = () => {
    navigate(GAME_DETAIL_ROUTE);
  };
  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between mx-auto ">
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
            Featured Novels
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Khám phá những câu chuyện huyền bí đang thịnh hành
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div
        className="grid gap-6 w-full mx-auto "
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative bg-[#121212] rounded-xl overflow-hidden border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.15)] transition-all duration-300 flex flex-col"
          >
            {/* --- 1. Image Area --- */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient (giúp chữ/icon nổi hơn) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

              {/* Top Tags Badge */}
              <div className="absolute top-3 left-3 flex gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Favorite Button */}
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/btn">
                <Heart
                  size={16}
                  className={`transition-colors ${
                    game.isFavorite
                      ? "fill-red-500 text-red-500 group-hover/btn:text-red-500"
                      : "text-white group-hover/btn:text-black"
                  }`}
                />
              </button>
            </div>

            {/* --- 2. Content Area --- */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-4 -mt-12 relative z-10">
              {/* Title & Rating */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                    <Star size={12} fill="currentColor" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Eye size={12} />
                    <span>{game.views}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-yellow-400 transition-colors">
                  {game.title}
                </h3>
              </div>

              {/* Action Button */}
              {game.isOwned ? (
                // --- Nút Play (Đã sở hữu) ---
                <button
                  onClick={gotoGameDetail}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-sm uppercase tracking-wide shadow-lg shadow-yellow-900/20 hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group/play"
                >
                  <Play
                    size={18}
                    fill="currentColor"
                    className="group-hover/play:translate-x-0.5 transition-transform"
                  />
                  Play Now
                </button>
              ) : (
                // --- Nút Buy (Chưa sở hữu) ---
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 block">Price</span>
                    <span className="text-xl font-bold text-yellow-500">
                      ${game.price}
                    </span>
                  </div>
                  <button className="h-10 px-5 rounded-lg border border-white/20 hover:bg-white hover:text-black text-white font-medium text-sm transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                    <ShoppingCart size={16} />
                    Buy
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
