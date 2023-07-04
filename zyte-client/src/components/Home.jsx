import React from 'react'
import Masonry from 'react-masonry-css'
import Topnavigation from './topnav/Topnavigation'
import test from '../assets/image/test.jpg'
import '../assets/css/home.css'
const breakpoint = {
  default: 4,
  3000: 5,
  2000: 4,
  1700: 3,
  1000: 3,
  1200: 3,
  500:1
}
function Home() {
  return (
    <div>
        <div> <Topnavigation/> </div>
        <Masonry
  className="flex my-masonry-grid gap-5"
  breakpointCols= {breakpoint}>
            <div>
              <div className='cover'><img className='super-img' src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg" /></div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut est placeat voluptas laborum debitis harum cumque nostrum, earum ratione. Itaque reprehenderit nobis libero ex, aliquam aspernatur sint maxime eveniet!</div>
            </div>
            <div className='pull-up'>
              <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur, omnis, sed aspernatur numquam possimus nemo adipisci repudiandae rerum odit, nulla saepe reprehenderit optio rem magni consectetur ipsum maxime ipsam!
              </div>
              <div className='cover'>
                  <img src={test}  className='super-img'/>
              </div>
            </div>
            <div>
              <img className='super-img' src="https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg" alt="" />
            </div>
            <div>
              <div className='cover'><img src={test} className='super-img' /></div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam consequuntur distinctio eos quas cum, architecto quidem, quisquam, deserunt facilis culpa pariatur quod error et libero quaerat aperiam corporis dicta maxime.</div>
            </div> 
            <div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum voluptas odit, provident ex saepe distinctio tempore repellendus voluptatum repudiandae non natus reprehenderit! Itaque, dolore doloribus. Dolores perferendis doloremque inventore?
              </div>
              <img className='super-img' src="https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg?resize=400x0" alt="" />
              </div> 
              <div>
                <div>;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis praesentium facere consectetur corporis accusantium quisquam sunt eum, fuga at, possimus dignissimos accusamus saepe officiis cumque doloremque. Facere, eveniet officia.</div>
                <img className='super-img' src="data:image/jpeg;base64,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" alt="" />
              </div>

</Masonry>
<footer> Footer content here</footer>
   
    </div>
  )
}

export default Home