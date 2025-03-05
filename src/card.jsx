export const Card = ({ product }) => {
  //console.log({ product });
  const { imageURL, id, price, name, color, gender, type } = product;

  return (
    <>
      <li>
        <div
          className="h-57 w-104 p-2 ml-1 mt-2 bg-gray-200 rounded-2xl  "
          id="container"
        >
          {/* Name of Product */}
          <div>
            <h3>{name}</h3>
            {/* Image of Product */}
            <img
              className="h-35 w-90 justify-self-center rounded-4xl"
              src={imageURL}
              alt={id}
            />
          </div>
          <div className="flex justify-between items-center">
            {/* Price of Product */}
            <div className="h-5 w-5 p-4">Rs.{price}</div>
            {/* Gender & Colour of Product */}
            <span className="text-gray-500 text-sm mt-5">
              {gender} | {color}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};
