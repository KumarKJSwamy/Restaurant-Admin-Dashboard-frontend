// Configuration file for different environments
const config = {
  development: {
    apiUrl: '/api', // Will be proxied by Vite
    timeout: 10000,
    secure: false
  },
  production: {
    apiUrl: 'https://api.smartestmenu.com/api',
    timeout: 10000,
    secure: false
  }
};

// Get current environment
const env = import.meta.env.MODE || 'development';

// Export current config
export const currentConfig = config[env] || config.development;

// Export all configs
export default config;

