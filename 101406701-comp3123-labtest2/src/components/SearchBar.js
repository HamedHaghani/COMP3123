import React from "react";

const SearchBar = ({ setCity }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value.trim();
        if (city) setCity(city);
    };

    return (
        <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                name="city"
                placeholder="Enter city"
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
