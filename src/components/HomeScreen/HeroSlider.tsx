
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const slides: SlideData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop", 
    title: "Visual noval 1",
    description:
      "Cơn mưa rào mùa hạ vừa dứt. Không khí trở nên trong lành và mát rượi. Mùi đất ẩm nồng nàn xộc thẳng lên, quyện với hương lá thông còn đọng nước. Những giọt mưa cuối cùng vẫn lười biếng rơi từ tán cây...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    title: "Chapter 2: The Silent City",
    description:
      "Ánh đèn neon nhấp nháy phản chiếu xuống mặt đường ướt sũng. Thành phố về đêm mang một vẻ đẹp ma mị và đầy bí ẩn, nơi những câu chuyện chưa kể bắt đầu...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop",
    title: "Chapter 3: Deep Blue",
    description:
      "Giữa đại dương bao la, sự tĩnh lặng là thứ âm thanh duy nhất tồn tại. Một màu xanh thẫm bao trùm lấy mọi thứ, che giấu những bí mật ngàn năm.",
  },
];

export default function HeroSlider() {
  return (
    <div className="flex flex-col gap-4 w-[70%]">
      <div className="flex gap-2 items-center">
        <Bookmark className="w-10 h-10 text-white" /> <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">New</span>
      </div>
      <div className=" h-[500px] md:h-full relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next-button", 
            prevEl: ".custom-prev-button",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full rounded-2xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10 flex flex-col justify-end h-full pointer-events-none">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-next-button absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white rounded-full p-3 transition-all duration-300 cursor-pointer group-hover:opacity-100 opacity-0 md:opacity-100">
          <ChevronRight size={32} />
        </button>

        <button className="custom-prev-button absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white rounded-full p-3 transition-all duration-300 cursor-pointer group-hover:opacity-100 opacity-0 md:opacity-100">
          <ChevronLeft size={32} />
        </button>
      </div>
    </div>
  );
}
