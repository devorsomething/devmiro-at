'use client';

export function TypewriterText({ words }: { words: string[] }) {
  // Static display of the first word with a blinking cursor
  // The final word shown is the last one in the array (after typewriter completes)
  const finalWord = words[words.length - 1] || 'Kompromisse.';

  return (
    <span className="inline-block">
      <span className="gradient-text">{finalWord}</span>
      <span className="cursor-blink">|</span>
    </span>
  );
}