import './PixelButton.css';

interface Props {
  target?: string;
  text?: string;
  children?: React.ReactNode;
  onClick: (buttonText: string) => void;
}

export default function PixelButton({ children, text = '', target = text || children.toString(), onClick }: Props) {
  return (
    <>
      <span className='pixel-box' onClick={() => onClick(target)}>
        {text ? <>{text}</> : <>{children}</>}
        {/* {text}
        {children} */}
      </span>
    </>
  );
}
