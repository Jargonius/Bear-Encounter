import './PixelButton.css';

interface Props {
  target?: string;
  text: string;
  onClick: (buttonText: string) => void;
}

export default function PixelButton({ text, target = text, onClick }: Props) {
  return (
    <>
      <span className='pixel-box' onClick={() => onClick(target)}>
        {text}
      </span>
    </>
  );
}
