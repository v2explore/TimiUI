const importAll = (requierContext) => requierContext.keys().forEach(requierContext);
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log(error);
}