// 阿里云ESA Pages边缘函数：AI视频生成（演示版，无API依赖）
exports.handler = async (request, context) => {
  const body = await request.json();
  const { recipeName, videoStyle, userId } = body;

  if (!recipeName || !videoStyle) {
    return new Response(JSON.stringify({
      code: 400,
      message: "菜谱名称和视频风格不能为空",
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
    // 模拟视频生成结果
    const mockVideoData = {
      videoId: `video_${Date.now()}_${userId}`,
      recipeName,
      videoStyle,
      coverUrl: "/sample/sample-video-cover.png",
      duration: "01:20",
      resolution: "1080P",
      status: "生成完成"
    };

    // 边缘缓存视频信息
    context.cache.set(`ai_video_${mockVideoData.videoId}`, JSON.stringify(mockVideoData), {
      ttl: 86400,
      keyType: "user_defined"
    });

    return new Response(JSON.stringify({
      code: 200,
      message: "AI视频生成成功（演示版，无API依赖）",
      data: mockVideoData,
      edgeNode: context.region || "本地演示节点"
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error("边缘函数-AI视频生成失败：", error);
    return new Response(JSON.stringify({
      code: 500,
      message: "视频生成失败，请重试",
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
