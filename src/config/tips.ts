import { message, notification } from 'antd';

export const tips = {
  add: {
    success: '添加成功',
    fail: '添加失败',
  },
  delete: {
    success: '删除成功',
    fail: '删除失败',
  },
  update: {
    success: '更新成功',
    fail: '更新失败',
  },
  network: {
    timeout: '网络请求超时!',
    fail: '网络连接失败！',
  },
  server: {
    error: '系统错误!',
  },
};

export const loading = (ctx: string = '请求中...请耐心等候~', duration: number = 0) => {
  return message.loading(ctx, duration);
};

export const showError = (description: string) => {
  notification.error({
    message: '错误提示',
    description,
  });
};
