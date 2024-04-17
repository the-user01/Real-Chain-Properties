import { useLoaderData, useParams } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {

    const properties = useLoaderData()

    const { id } = useParams()

    const foundProperty = properties.find(property => property.id === parseInt(id))

    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = foundProperty;

    return (

        <>
            <Helmet>
                <title>{estate_title}</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={image} className=" rounded-lg shadow-2xl" />

                    <div className="bg-white w-full p-4 rounded-lg space-y-4">
                        <p className="p-1 w-16 text-center rounded-lg bg-red-200 text-red-700 font-bold">{status}</p>
                        <h1 className="text-2xl font-bold">{estate_title}</h1>
                        <p className='flex items-center gap-2'><ImLocation2 />{location}</p>
                        <div>
                            <p className="font-bold">Facilities:</p>
                            <ul className="list-disc ml-6">
                                {
                                    facilities.map((facility, index) => <li className=' p-1 text-sm w-32' key={index}>{facility}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white w-full p-4 rounded-lg space-y-4">
                        <h3 className="text-lg font-bold">Details & Features</h3>
                        <div className="text-sm space-y-2">
                            <p><span className="font-bold">Segment Type: </span>{segment_name}</p>
                            <p><span className="font-bold">Area Size (sft): </span>{area}</p>
                            <p><span className="font-bold"></span></p>
                            <p><span className="font-bold"></span></p>
                        </div>
                        <h3 className="text-xl font-bold text-primary"><span>Price: </span>${price}</h3>
                    </div>

                    <div className="bg-white w-full p-4 rounded-lg space-y-4">
                        <h3 className="font-bold text-xl">Description</h3>
                        <p>{description}</p>

                        <div className="flex justify-end">
                            <button className="btn btn-outline btn-success w-40 cursor-pointer">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PropertyDetails;