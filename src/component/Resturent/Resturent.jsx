import { useState } from "react";
import data from "../../data/data";
import RestaurantListItem from "../ResturentListItem/ResturentListItem";

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderList = () => {
    const filteredList = data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredList.map((restaurant) => (
      <RestaurantListItem key={restaurant._id.$oid} name={restaurant.name} />
    ));
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <input
        className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
        type="text"
        placeholder="Search restaurant"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Restaurant List */}
      <section>
        <ul className="space-y-4">
          {renderList().length > 0 ? (
            renderList()
          ) : (
            <p className="text-gray-500">No restaurants found.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Restaurant;
