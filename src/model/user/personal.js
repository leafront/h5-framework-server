import request from 'request'
export const sendLoginCode = (data) => request('/api/v3/user/sendLoginCode', data)
export const setDeviceId = (data) => request('/api/v1/setDvid', data)
