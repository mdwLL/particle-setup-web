module.exports = (mode, platform) => {
  console.log("\n\n\nin dev mode!!!!");
  console.log(`args = ${mode},${platform}` + "\n\n\n");

  let serveFile;
  if (platform === "web") {
    serveFile = "index.html";
  } else if (platform === "local") {
    serveFile = "local-setup-file.html";
  }

  return {
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      index: serveFile
    }
  };
};
