// 阿里云ESA Pages边缘函数：AI菜谱生成（演示版，无API依赖）
exports.handler = async (request, context) => {
  const body = await request.json();
  const { userPrompt, userId } = body;

  if (!userPrompt) {
    return new Response(JSON.stringify({
      code: 400,
      message: "请输入菜谱需求描述",
      data: null
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=300'
      }
    });
  }

  try {
    // 模拟菜谱数据（无需调用通义千问API）
    const mockRecipe = {
      name: "番茄炒蛋（简易版）",
      ingredients: [
        { name: "番茄", quantity: "2个" },
        { name: "鸡蛋", quantity: "3个" },
        { name: "食盐", quantity: "1小勺" },
        { name: "食用油", quantity: "2大勺" }
      ],
      steps: [
        "1. 番茄洗净切块，鸡蛋打入碗中搅匀备用",
        "2. 锅中倒入食用油，油热后倒入鸡蛋液，煎至定型后盛出",
        "3. 锅中留少许底油，放入番茄块翻炒至出汁",
        "4. 倒入煎好的鸡蛋，加入食盐，翻炒均匀后即可出锅"
      ],
      notice: "番茄选择熟透的，口感更佳；鸡蛋不要煎太久，避免变老"
    };

    // 边缘缓存：模拟缓存用户菜谱
    context.cache.set(`user_recipe_${userId}`, JSON.stringify(mockRecipe), {
      ttl: 3600,
      keyType: "user_defined"
    });

    // 返回模拟结果
    return new Response(JSON.stringify({
      code: 200,
      message: "菜谱生成成功（演示版，无API依赖）",
      data: mockRecipe,
      edgeNode: context.region || "本地演示节点",
      latency: "32ms"
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=300'
      }
    });
  } catch (error) {
    console.error("边缘函数-菜谱生成失败：", error);
    return new Response(JSON.stringify({
      code: 500,
      message: "菜谱生成失败，请重试",
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
