import React from 'react';
import { Play, Star, Clock, User, Info } from 'lucide-react';

// Dữ liệu mẫu từ hình ảnh của bạn
const demoData: FeaturedNovelProps = {
  title: "Visual Noval 1",
  rating: 8.2,
  description: "Cơn mưa rào mùa hạ vừa dứt. Không khí trở nên trong lành và mát rượi. Mùi đất ẩm nồng nàn xộc thẳng lên, quyện với hương lá thông còn đọng nước. Những giọt mưa cuối cùng vẫn lười biếng rơi từ tán cây, vỡ tan trên vũng nước nhỏ. Đâu đó, một vài tia nắng yếu ớt bắt đầu len lỏi qua kẽ lá...",
  image: "https://cdn.animevietsub.show/data/big_banner/2025/06/03/animevsub-TAFaVOWQ6s.jpg",
  genres: ["Kinh dị", "Bí ẩn", "Tâm lý"],
  author: "Nameless Writer",
  status: "Đang tiến hành"
};

const FeaturedNovelCard: React.FC<FeaturedNovelProps> = ({ 
  title = demoData.title, 
  rating = demoData.rating, 
  description = demoData.description, 
  image = demoData.image, 
  genres = demoData.genres,
  author = demoData.author,
  status = demoData.status
}) => {
  return (
    <div className="w-full mx-auto h-full">
      {/* Main Card Container */}
      <div className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 h-full">
        
        <div className="flex flex-col md:flex-row h-full">
          
          {/* LEFT: Image Section */}
          <div className="w-full md:w-[70%] relative overflow-hidden h-52 md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0f0f0f] opacity-0 md:opacity-100 mix-blend-multiply" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] via-transparent to-transparent md:hidden" />
          </div>

          {/* RIGHT: Content Section */}
          <div className="w-full md:w-[30%] p-6 md:p-10 flex flex-col justify-center relative z-10 h-full overflow-auto">
            
            {/* 1. Header: Title & Rating */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {title}
              </h1>
              
              {/* Rating Badge */}
              <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/20 backdrop-blur-sm shrink-0">
                <Star size={16} fill="currentColor" />
                <span className="font-bold">{rating}</span>
              </div>
            </div>

            {/* 2. Metadata (Author, Status - Nâng cấp thêm) */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-6">
                <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{status}</span>
                </div>
            </div>

            {/* 3. Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
              {description}
            </p>

            {/* 4. Genres (Tags) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-wide">Thể loại:</span>
              {genres.map((genre, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs rounded-md bg-blue-900/30 text-blue-200 border border-blue-500/30 hover:bg-blue-800/50 transition-colors cursor-default"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* 5. Actions (Buttons) */}
            <div className="flex items-center gap-4">
              <button className="flex-1 bg-linear-to-r from-[#Cfb565] to-[#bfa040] hover:brightness-110 text-[#3e3212] font-bold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(207,181,101,0.3)]">
                <Play size={20} fill="currentColor" />
                <span>Play Now</span>
              </button>
              
              <button className="p-3.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="More Info">
                <Info size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNovelCard;