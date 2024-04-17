import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImLocation2 } from "react-icons/im";

const PropertiesCard = ({ property }) => {

    const {id, image, estate_title, status, price, facilities, location } = property;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={estate_title} className='h-52 w-full'/></figure>
                <div className="card-body">
                    <div className='flex justify-between mb-4'>
                        <div>
                            <p>{status}</p>
                            <h2 className="card-title">{estate_title}</h2>
                        </div>
                        <div className='flex items-center'>
                            <h3 className="text-xl text-blue-800 font-bold">${price}</h3>
                        </div>
                    </div>

                    <ul className='flex gap-4 justify-center mb-4'>
                        {
                            facilities.map((facility, index) => <li className='hover:outline outline-blue-500 cursor-pointer rounded-md p-1 text-center text-sm hover:bg-blue-200' key={index}>{facility}</li>)
                        }
                    </ul>

                    <hr />

                    <div className='flex justify-between'>
                        <div>
                            <p className='flex items-center gap-2'><ImLocation2 />{location}</p>
                        </div>
                        <div>
                            <Link to={`/properties/${id}`}><button className="btn btn-outline btn-primary">View</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

PropertiesCard.propTypes = {
    property: PropTypes.object,
}

export default PropertiesCard;