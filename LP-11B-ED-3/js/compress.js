// 使用 createImageBitmap 和 Canvas 来压缩 GIF
async function compressGif(imgElement) {
  try {
    const response = await fetch(imgElement.src);
    const blob = await response.blob();
    const bitmap = await createImageBitmap(blob);
    
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);
    
    // 将 GIF 转换为压缩的 WebP 格式
    const compressedUrl = canvas.toDataURL('image/webp', 0.7);
    imgElement.src = compressedUrl;
  } catch (error) {
    console.error('GIF compression failed:', error);
  }
}

// 当页面加载完成后压缩所有 GIF 图片
document.addEventListener('DOMContentLoaded', () => {
  const gifImages = document.querySelectorAll('img[src$=".gif"]');
  gifImages.forEach(img => {
    if (!img.closest('.content-img')) return; // 跳过非内容区的 GIF
    compressGif(img);
  });
}); 