import './AnimatedZs.css';

export default function AnimatedZs() {
  const text = 'ZZZ';
  return (
    <>
      <span>
        {text.split('').map((letter, index) => (
          <span key={index} className="animated-z">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
    </>
  );
}