import './PixelButton.css';

interface Props {
  target?: string,
  children?: React.ReactNode;
  onClick?: (buttonText: React.ReactNode, event: React.MouseEvent<HTMLElement>) => void;
}

export default function PixelButton({ children, target = children.toString(), onClick }: Props) {
  return (
    <>
      <span className='pixel-corners--wrapper' onClick={(e) => onClick(target, e)}>
        <span className='pixel-corners'>{children}</span>
      </span>
    </>
  );
}
