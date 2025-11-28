import { Award, Eye, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GAME_DETAIL_ROUTE } from "../../constans";
// 2. Dữ liệu mẫu (Mock Data)
const novelData: NovelItem[] = [
  {
    id: 1,
    rank: "01",
    title: "Visual noval 1",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "200.000",
    likes: "200.000",
  },
  {
    id: 2,
    rank: "02",
    title: "Visual noval 2",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "200.000",
    likes: "200.000",
  },
  {
    id: 3,
    rank: "03",
    title: "Visual noval 3",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "200.000",
    likes: "200.000",
  },
  {
    id: 4,
    rank: "04",
    title: "Visual noval 4",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "200.000",
    likes: "200.000",
  },
  {
    id: 5,
    rank: "05",
    title: "Visual noval 5",
    image:
      "https://cdn.animevietsub.show/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg",
    views: "200.000",
    likes: "200.000",
  },
];

export default function RankingList() {
    const navigate = useNavigate();
  const gotoGameDetail = () => {
    navigate(GAME_DETAIL_ROUTE);
  };
  return (
    // Container chính: Nền tối màu, căn giữa
    <div className="flex flex-col gap-4 w-fit h-full">
      <div className="flex gap-2 items-center">
        <Award className="w-10 h-10 text-white" /> <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">Trending</span>
      </div>
      <div className="bg-[#181818] p-6 max-w-md rounded-lg h-full">
        <div className="flex flex-col gap-4 min-h-0">
          {novelData.map((item) => (
            // Mỗi dòng là một item
            <div
              key={item.id}
              className="flex items-center group cursor-pointer basis-[20%]"
            >
              {/* Phần 1: Số thứ tự (Rank) */}
              {/* w-12 để cố định chiều rộng, tránh bị lệch khi số thay đổi */}
              <span className="text-xl font-bold text-white/90 w-12 mr-2">
                {item.rank}
              </span>

              {/* Phần 2: Ảnh Thumbnail */}
              <div className="relative w-[13%] h-auto shrink-0 mr-4 overflow-hidden rounded-sm shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Phần 3: Thông tin (Title & Stats) */}
              <div className="flex flex-col justify-center gap-1 min-w-0">
                {/* Tiêu đề */}
                <h3 onClick={gotoGameDetail} className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate ">
                  {item.title}
                </h3>

                {/* Stats Row */}
                <div className="flex items-center gap-6 text-gray-400 text-xs mt-1">
                  {/* Views */}
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>

                  {/* Likes */}
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
