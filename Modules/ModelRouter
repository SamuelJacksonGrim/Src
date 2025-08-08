import { GlyphRegistry } from './GlyphRegistry';

export const routeModel = (glyphChain) => {
  const dominantEmotion = glyphChain
    .map(g => GlyphRegistry[g]?.emotion)
    .filter(Boolean)[0];

  switch (dominantEmotion) {
    case "rage": return "action-model";
    case "stillness": return "minimalist-model";
    case "freedom": return "dreamlike-model";
    default: return "default-model";
  }
};
