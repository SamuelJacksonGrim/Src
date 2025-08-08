import { GlyphRegistry } from './GlyphRegistry';

export const interpretGlyphChain = (glyphChain) => {
  return glyphChain.reduce((acc, glyph) => {
    const entry = GlyphRegistry[glyph];
    if (!entry) return acc;
    return {
      ...acc,
      ...entry.style,
      emotions: [...(acc.emotions || []), entry.emotion]
    };
  }, {});
};
