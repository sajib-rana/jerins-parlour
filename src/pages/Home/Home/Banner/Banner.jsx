import beautiful from '../../../../assets/images/beautiful.png'

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={beautiful}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl uppercase font-bold">Beauty Salon </h1>
            <h1 className="text-5xl uppercase font-bold mt-2">
              for every women
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-rose-600">Get an Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;