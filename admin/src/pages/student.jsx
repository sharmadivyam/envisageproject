import React, { useState } from "react";
import "./student.css";

// Icons as simple SVG components
const ClockIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const FilterIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </svg>
);

const ImageIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

// Sample data structure
const SAMPLE_ITEMS = [
  {
    id: 1,
    name: "Black Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 2,
    name: "Blue Umbrella",
    type: "Personal Belongings",
    location: "Cafeteria",
    description: "Left on table",
    date: "2025-01-16",
    status: "requested",
    image: null,
  },
  {
    id: 1,
    name: "Black Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 3,
    name: "orange Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 4,
    name: "green Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 4,
    name: "green Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 4,
    name: "green Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
  {
    id: 4,
    name: "green Laptop",
    type: "Electronics",
    location: "Library",
    description: "Found near study area",
    date: "2025-01-15",
    status: "available",
    image: null,
  },
];

// Filter Component
const FilterPanel = ({ onFilterChange, isSheet = false }) => {
  const ITEM_TYPES = [
    "Electronics",
    "Stationery",
    "Clothing and Accessories",
    "Personal Belongings",
    "Miscellaneous",
  ];

  return (
    <div className={`filter-panel ${isSheet ? "sheet" : ""}`}>
      <h3 className="filter-title">Filter Items</h3>

      <div className="filter-content">
        <div className="filter-section">
          <p className="filter-label">Type</p>
          <div className="checkbox-group">
            {ITEM_TYPES.map((type) => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    onFilterChange("type", type, e.target.checked)
                  }
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <p className="filter-label">Search</p>
          <input
            className="search-input"
            placeholder="Search keywords..."
            onChange={(e) => onFilterChange("search", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

// Item Card Component
const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="item-grid">
        <div className="item-image-container">
          {item.image ? (
            <img src={item.image} alt={item.name} className="item-image" />
          ) : (
            <div className="item-image-placeholder">
              <ImageIcon />
            </div>
          )}
        </div>

        <div className="item-content">
          <div className="item-header">
            <div>
              <h3 className="item-title">{item.name}</h3>
              <p className="item-type">{item.type}</p>
            </div>
            <span className={`status-badge status-${item.status}`}>
              {item.status}
            </span>
          </div>

          <div className="item-details">
            <p>
              <strong>Location:</strong> {item.location}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Date:</strong> {item.date}
            </p>
          </div>

          <div className="item-footer">
            {item.status === "available" ? (
              <button className="button button-primary">
                Create Request
                <ClockIcon />
              </button>
            ) : item.status === "requested" ? (
              <button className="button button-outline">
                Mark as Collected
                <CheckIcon />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

// Bottom Bar Component
const BottomBar = ({ onOpenFilter, onSortChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="bottom-bar">
        <button
          className="button button-outline"
          onClick={() => setIsFilterOpen(true)}
        >
          <FilterIcon />
          Filter
        </button>

        <select
          className="sort-select"
          onChange={(e) => onSortChange(e.target.value)}
          defaultValue="latest"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {isFilterOpen && (
        <div className="modal-overlay" onClick={() => setIsFilterOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsFilterOpen(false)}
            >
              ×
            </button>
            <FilterPanel onFilterChange={onOpenFilter} isSheet={true} />
          </div>
        </div>
      )}
    </>
  );
};

// Main Dashboard Component
const StudentDashboard = () => {
  const [items, setItems] = useState(SAMPLE_ITEMS);
  const [filters, setFilters] = useState({
    types: [],
    search: "",
  });
  const [sortOrder, setSortOrder] = useState("latest");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleFilterChange = (type, value, checked = null) => {
    if (type === "type") {
      setFilters((prev) => ({
        ...prev,
        types: checked
          ? [...prev.types, value]
          : prev.types.filter((t) => t !== value),
      }));
    } else if (type === "search") {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const filteredItems = items
    .filter((item) => {
      const matchesType =
        filters.types.length === 0 || filters.types.includes(item.type);
      const matchesSearch =
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.search.toLowerCase());
      return matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(a.date) - new Date(b.date);
    });

  return (
    
    <div className="dashboard">
       <>
      
      <div className="dashboard-container">
        <h1 className="dashboard-title">Lost & Found Items</h1>

        <div className="items-container">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <BottomBar
        onOpenFilter={handleFilterChange}
        onSortChange={handleSortChange}
      />
      </>
     
    </div>
    
  );
};

export default StudentDashboard;
