import React from 'react';

function GlyphThreadDisplay({ glyphChain }) {
  if (!glyphChain || glyphChain.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-4 p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 shadow-md">
      <h2 className="text-purple-200 text-xl font-semibold mb-2 w-full text-center">Glyph Thread</h2>
      {glyphChain.map((glyph, index) => (
        <span
          key={index}
          className="text-3xl transition transform hover:scale-125 cursor-default"
          title={`Emotion: ${glyph}`}
        >
          {glyph}
        </span>
      ))}
    </div>
  );
}

export default GlyphThreadDisplay;
