import PropTypes from "prop-types";

const RestaurantListItem = ({ name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-2 border border-purple-200 text-lg font-semibold">
      {name}
    </div>
  );
};

RestaurantListItem.propTypes = {
  name: PropTypes.string.isRequired, // Define name as a required string prop
};

export default RestaurantListItem;
