function SearchBar({ location, onInputChange, onFormSubmit }) {
    return (
      <div>
        <div>
          <label>
            Enter Location:
          </label>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              id="location-name"
              className="form-control"
              onChange={onInputChange}
              value={location}
            />
            <button type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SearchBar;