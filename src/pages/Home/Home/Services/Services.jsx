import img1 from '../../../../assets/icons/Group 1372.png'
import img2 from '../../../../assets/icons/Group 1373.png'
import img3 from '../../../../assets/icons/Group 1374.png'
import "animate.css";

const Services = () => {
    return (
      
        <div className="mt-12">
          <h1 className="text-center text-2xl font-bold">
            Our Awesome <span className="text-rose-600">Services</span>
          </h1>
          <div className="lg:flex justify-center gap-10 mt-5 mb-10  ">
            <div className="card m-3 bg-base-100 shadow-xl animate__animated animate__zoomIn ">
              <figure className="px-10 pt-10">
                <img src={img1} alt="Shoes" className="rounded-xl w-12" />
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="text-xl font-bold">Hair color & Styleing</h1>
                <h2 className="card-title">$99</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="card m-3 bg-base-100 shadow-xl animate__animated animate__zoomIn">
              <figure className="px-10 pt-10">
                <img src={img2} alt="Shoes" className="rounded-xl w-12" />
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="text-xl font-bold">Skin care & Treatment</h1>
                <h2 className="card-title">$299</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="card m-3 bg-base-100 shadow-xl animate__animated animate__zoomIn">
              <figure className="px-10 pt-10">
                <img src={img3} alt="Shoes" className="rounded-xl w-12" />
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="text-xl font-bold">Anti age face Treatment</h1>
                <h2 className="card-title">$199</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-12">
            <button className="btn bg-rose-600">Explore More</button>
          </div>
        </div>
     
    );
};

export default Services;