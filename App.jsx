import { interpretGlyphChain } from './modules/GlyphInterpreter';
import { augmentPrompt } from './modules/PromptAugmentor';
import { routeModel } from './modules/ModelRouter';
import { storeGlyphThread } from './modules/MemoryThreader';
import { callGenerationAPI } from './utils/callGenerationAPI';

const generateWithGlyphs = async (basePrompt, glyphChain, db, userId) => {
  const enrichedPrompt = augmentPrompt(basePrompt, glyphChain);
  const styleParams = interpretGlyphChain(glyphChain);
  const modelId = routeModel(glyphChain);

  await storeGlyphThread(userId, glyphChain, db);

  const payload = {
    prompt: enrichedPrompt,
    parameters: styleParams,
    model: modelId
  };

  return await callGenerationAPI(payload);
};
