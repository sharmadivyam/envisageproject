import React, { useState } from 'react';
import './itemcard.css';

const ItemCard = ({
  id,
  name,
  location,
  description,
  date,
  initialStatus = 'active',
  imageUrl,
  onSave
}) => {
  const [status, setStatus] = useState(initialStatus);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    location,
    description,
    date,
    imageUrl
  });

  const toggleStatus = () => {
    const newStatus = status === 'active' ? 'inactive' : 'active';
    setStatus(newStatus);
    onSave({ ...formData, id, status: newStatus });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id, status });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ name, location, description, date, imageUrl });
    setIsEditing(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setFormData(prev => ({
      ...prev,
      imageUrl: URL.createObjectURL(file)
    }));
  };

  return (
    <div className="item-card">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageupload">Upload Image</label>
            <input 
              type="file"
              id="imageupload"
              name="imageupload"
              onChange={handleImageChange} 
            />
            {selectedImage && (
              <div>
                <p>You selected:</p>
                <img src={URL.createObjectURL(selectedImage) || "/placeholder.svg"} alt="Selected Image" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <div className="status-container">
            <span className="status-label">status</span>
            <button 
              className={`status-toggle ${status}`}
              onClick={toggleStatus}
              aria-label={`Toggle status: currently ${status}`}
            >
              <div className="status-indicator"></div>
            </button>
          </div>

          <div className="card-content">
            <div className="image-container">
              <img 
                src={imageUrl || "/placeholder.svg"} 
                alt={name} 
                className="item-image" 
                onError={(e) => {
                  e.target.src = "/api/placeholder/150/150";
                }}
              />
            </div>

            <div className="item-details">
              <div className="detail-row">Item:   {formData.name}</div>
              <div className="detail-row">Name:   {formData.name}</div>
              <div className="detail-row">Location:   {formData.location}</div>
              <div className="detail-row">Description:   {formData.description}</div>
              <div className="detail-row">Date:   {formData.date}</div>
            </div>
          </div>

          <div className="card-footer">
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              EDIT
            </button>
            <div className="item-id">ITEM ID: {id}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;

