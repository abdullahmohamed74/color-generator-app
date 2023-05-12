import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

function ColorsList({ colors }) {
  const renderedColors = colors.map((color, index) => {
    return <SingleColor key={nanoid()} color={color} index={index} />;
  });

  return <section className="colors">{renderedColors}</section>;
}
export default ColorsList;
