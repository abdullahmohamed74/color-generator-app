import { useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import ColorsList from './components/ColorsList';
import Form from './components/Form';

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  // change the colors state using the input color
  const handleColorChange = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      {/* send the handleColorChange function to Form component to be called onSubmit with the color */}
      <Form handleColorChange={handleColorChange} />
      {/* send the colors array to ColorsList component to be diplayed */}
      <ColorsList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}
export default App;
