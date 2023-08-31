const config = {
    baseURL: import.meta.env.VITE_BASE_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    httpTimeout: 1000 * 60 * 1, // 1 minutes
    idleTimeOut: 1000 * 60 * 30, /// 30 minutes
};

export default config;
