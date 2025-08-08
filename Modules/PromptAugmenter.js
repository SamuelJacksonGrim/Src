import { GlyphRegistry } from './GlyphRegistry';

export const augmentPrompt = (basePrompt, glyphChain) => {
  const descriptors = glyphChain
    .map(g => GlyphRegistry[g]?.descriptor)
    .filter(Boolean);
  return `${basePrompt}, ${descriptors.join(', ')}`;
};
