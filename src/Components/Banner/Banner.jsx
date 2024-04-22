// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Banner = () => {

  return (
  
  <div className='mb-6 w-[95vw] mx-auto'>
     <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide><img src='https://imageio.forbes.com/specials-images/dam/imageserve/37722820/960x0.jpg?height=474&width=711&fit=bounds'/></SwiperSlide>
      <SwiperSlide>
      <img src='https://c0.wallpaperflare.com/preview/416/179/610/kings-college-cambridge-uk-university.jpg '/>
      </SwiperSlide>
      <SwiperSlide><img src='https://i.insider.com/57ab3062dd08955a1e8b4613?width=800&format=jpeg&auto=webp'/></SwiperSlide>
      <SwiperSlide><img src='https://content.jdmagicbox.com/comp/mysore/w5/0821px821.x821.190323090604.b9w5/catalogue/christ-college-mysuru-mysore-0zzj4dgz5f.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/132/wide_fullhd_ucl-university-college-london.jpg'/></SwiperSlide>
      </Swiper>
    </>
  </div>
  );
};

export default Banner;