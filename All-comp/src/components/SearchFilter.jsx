import React from 'react'

const SearchFilter = () => {
    

  return (
   <div style={styles.container}>
      <h2>🔍 Search Filter</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => <li key={index}>{user}</li>)
        ) : (
          <li style={{ color: "gray" }}>No results found</li>
        )}
      </ul>
    </div>
  );
};

// Simple inline styling
const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "8px",
    width: "90%",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },
};

export default SearchFilter
