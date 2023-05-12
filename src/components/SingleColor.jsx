import { toast } from 'react-toastify';

function SingleColor({ index, color: { hex, weight } }) {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed copied to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      // change text color based on dark backgrounds
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}
export default SingleColor;
