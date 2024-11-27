import React from 'react';

const SkinGlowProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Glow Serum',
      description: 'Brightens and rejuvenates your skin with natural extracts.',
      price: '₹29.99',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Radiance Cream',
      description: 'Moisturizes and provides a natural glow to your skin.',
      price: '₹19.99',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Brightening Mask',
      description: 'Deep cleanses and brightens skin tone for a radiant look.',
      price: '₹24.99',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Glow Serum',
      description: 'Brightens and rejuvenates your skin with natural extracts.',
      price: '₹29.99',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      id: 5,
      name: 'Glow Serum',
      description: 'Brightens and rejuvenates your skin with natural extracts.',
      price: '₹29.99',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more products here as needed
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
            }}
            className="product-card"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                maxHeight: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{product.name}</h3>
              <p style={{ fontSize: '1rem', color: '#666', margin: '10px 0' }}>{product.description}</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e74c3c' }}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinGlowProducts;
