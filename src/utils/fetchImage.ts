export const fetchImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // https://c8.staticflickr.com/8/7492/15644563231_4d682b3c88_n.jpg
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (e) => {
      reject(e);
    };
    img.src = src;
  });
};
