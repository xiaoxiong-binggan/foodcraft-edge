// 阿里云ESA Pages边缘函数：边缘实时翻译（演示版，无API依赖）
exports.handler = async (request, context) => {
  const body = await request.json();
  const { text, fromLang = "auto", toLang = "zh-CN" } = body;

  if (!text) {
    return new Response(JSON.stringify({
      code: 400,
      message: "待翻译文本不能为空",
      data: null
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  try {
    // 模拟翻译结果（无需调用阿里云翻译API）
    let translatedText = "";
    if (toLang === "en") {
      // 中译英模拟
      switch (text) {
        case "番茄炒蛋":
          translatedText = "Scrambled Eggs with Tomatoes";
          break;
        case "青椒炒肉":
          translatedText = "Stir-fried Pork with Green Peppers";
          break;
        default:
          translatedText = `[Demo Translation] ${text}`;
      }
    } else if (toLang === "ja") {
      // 中译日模拟
      translatedText = `【デモ翻訳】${text}`;
    } else {
      // 其他语言默认返回原文+演示标记
      translatedText = `[演示翻译] ${text}`;
    }

    // 模拟边缘缓存
    const cacheKey = `translate_${fromLang}_${toLang}_${Buffer.from(text).toString('base64')}`;
    context.cache.set(cacheKey, translatedText, {
      ttl: 86400,
      keyType: "user_defined"
    });

    return new Response(JSON.stringify({
      code: 200,
      message: "翻译成功（演示版，无API依赖）",
      data: {
        originalText: text,
        translatedText,
        fromLang,
        toLang
      },
      edgeNode: context.region || "本地演示节点"
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error("边缘函数-实时翻译失败：", error);
    return new Response(JSON.stringify({
      code: 500,
      message: "翻译失败，请重试",
      data: null,
      edgeNode: context.region || "本地演示节点"
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
