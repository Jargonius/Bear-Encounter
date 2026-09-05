import './PixelButton.css';

interface Props {
  target?: string;
  children?: React.ReactNode;
  onClick?: (buttonText: React.ReactNode | string) => void;
}

export default function PixelButton({ children, target = children.toString(), onClick }: Props) {
  return (
    <>
      <span className='pixel-corners' onClick={() => onClick(target)}>
        {children}
      </span>
    </>
  );
}
