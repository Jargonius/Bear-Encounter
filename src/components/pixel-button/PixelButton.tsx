import './PixelButton.css';

interface WrapperProps {
  children?: React.ReactNode;
}
function PixelButton({children}: WrapperProps) {
  return (
    <>
      <span className='pixel-corners--wrapper'>
        <span className='pixel-corners'>{children}</span>
      </span>
    </>
  );
}

export default PixelButton;
