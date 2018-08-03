export default {
  "publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  "theme": {
    "primary-color": "#fff566",
    "font-family": "TinBird",
    "font-size-base": "15px",
    "font-size-lg": "20px",
    "text-color-secondary": "#595959",
    "background-color-light": 'transparent'
  },
}
