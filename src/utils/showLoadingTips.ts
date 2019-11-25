import { loading } from '@/config/tips';

let loadingTipsShowing = 0;
let hideLoading = () => {};

export const requestStart = () => {
  if (loadingTipsShowing === 0) {
    hideLoading = loading();
  }
  ++loadingTipsShowing;
};

export const requestEnd = () => {
  --loadingTipsShowing;
  if (loadingTipsShowing === 0) {
    hideLoading();
  }
};
