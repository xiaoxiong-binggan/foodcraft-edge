// 阿里云ESA Pages边缘函数：个性化菜谱预缓存（演示版，无API依赖）
exports.handler = async (request, context) => {
  const body = await request.json();
  const { userId, userFavorites, userHistory } = body;

  if (!userId) {
    return new Response(JSON.stringify({
      code: 400,
      message: "用户ID不能为空",
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
    // 模拟个性化预缓存菜谱列表（无需调用API）
    const mockPreCacheRecipes = [
      { id: "1001", name: "青椒炒肉", cuisine: "川菜", mainIngredient: "猪肉" },
      { id: "1002", name: "麻婆豆腐", cuisine: "川菜", mainIngredient: "豆腐" },
      { id: "1003", name: "鱼香肉丝", cuisine: "川菜", mainIngredient: "猪肉" },
      { id: "1004", name: "水煮肉片", cuisine: "川菜", mainIngredient: "牛肉" },
      { id: "1005", name: "宫保鸡丁", cuisine: "川菜", mainIngredient: "鸡肉" }
    ];

    // 模拟批量预缓存
    for (const recipe of mockPreCacheRecipes) {
      const recipeDetail = {
        id: recipe.id,
        name: recipe.name,
        mainIngredient: recipe.mainIngredient,
        cuisine: recipe.cuisine,
        isPreCached: true,
        steps: ["步骤1：备料", "步骤2：炒制", "步骤3：出锅"]
      };
      // 边缘缓存
      context.cache.set(`precache_recipe_${userId}_${recipe.id}`, JSON.stringify(recipeDetail), {
        ttl: 86400,
        keyType: "user_defined"
      });
    }

    return new Response(JSON.stringify({
      code: 200,
      message: "个性化菜谱预缓存成功（演示版）",
      data: mockPreCacheRecipes,
      edgeNode: context.region || "本地演示节点",
      cacheTime: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error("边缘函数-个性化预缓存失败：", error);
    return new Response(JSON.stringify({
      code: 500,
      message: "个性化预缓存失败，请重试",
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
