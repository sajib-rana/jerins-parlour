import { Link } from 'react-router-dom';
import beautiful from '../../../../assets/images/beautiful.png'

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={beautiful} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl uppercase font-bold">Beauty Salon </h1>
            <h1 className="text-5xl uppercase font-bold mt-2">
              for every women
            </h1>
            <p className="py-6">
              Parlours are commonly used for businesses that offer services. For
              example, a beauty parlour is where customers go to get haircuts,
              facials, manicures, and other beauty treatments. In marketing,
              this physical space serves as the primary point of interaction
              between the business and its customers.
            </p>
            <Link to="/appointment" className="btn bg-rose-600">Get an Appointment</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;