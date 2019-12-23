import request from 'request'
export const getRecommendsList = (data) => request('/api/v2/home/recommends', data)

