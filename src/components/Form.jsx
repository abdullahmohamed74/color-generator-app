import { useState } from 'react';

function Form({ handleColorChange }) {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleColorChange(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="#f15025"
        />
        <button
          style={{
            backgroundColor: color,
            color: color === '#fff' || color === 'white' ? '#000' : '',
          }}
          className="btn"
        >
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;
