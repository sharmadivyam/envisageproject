import React, { useState } from 'react';
import './additem.css';

const ExpandableCard = ({ onAddItem }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    date: '',
    imageupload: '',
    type: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      ...formData,
      initialStatus: 'active',
      imageUrl: selectedImage ? URL.createObjectURL(selectedImage) : 'placeholder.png'
    });
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
    setFormData({
      name: '',
      location: '',
      description: '',
      date: '',
      imageupload: '',
      type: ''
    });
    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="expandable-card">
      <div className="inital">
        <p>Add Item</p>
        <button onClick={() => setIsFormOpen(!isFormOpen)} className="expand-button">
          {isFormOpen ? 'Close' : 'Add'}
        </button>
      </div>

      {/* Form Window */}
      {isFormOpen && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="item-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter item name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleFormChange}
                placeholder="Enter Location where it was found"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                placeholder="Enter item description"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <div className="radiobuttons">
                <input
                  type="radio"
                  id="type-Stationary"
                  name="type"
                  value="Stationary"
                  onChange={handleFormChange}
                  required
                /> <label htmlFor="type-Stationary">Stationary</label>
                <input
                  type="radio"
                  id="type-Electronics"
                  name="type"
                  value="Electronics"
                  onChange={handleFormChange}
                  required
                /> <label htmlFor="type-Electronics">Electronics</label>
                <input
                  type="radio"
                  id="type-ClothingandAccessories"
                  name="type"
                  value="ClothingandAccessories"
                  onChange={handleFormChange}
                  required
                /> <label htmlFor="type-ClothingandAccessories">Clothing and Accessories</label>
                <input
                  type="radio"
                  id="type-PersonalBelongings"
                  name="type"
                  value="PersonalBelongings"
                  onChange={handleFormChange}
                  required
                /> <label htmlFor="type-PersonalBelongings">Personal Belongings</label>
                <input
                  type="radio"
                  id="type-Miscellaneous"
                  name="type"
                  value="Miscellaneous"
                  onChange={handleFormChange}
                  required
                /> <label htmlFor="Miscellaneous">Miscellaneous</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
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
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;

