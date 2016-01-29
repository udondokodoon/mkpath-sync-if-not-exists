module.exports = function mkpathSyncIfNotExists(path) {
  var fs = require("fs");
  var stat;
  var mkdirSyncIfNotExists = function(dir) {
    if (fs.existsSync(dir)) {
      if ((stat = fs.statSync(dir)).isDirectory()) {
        //console.log("既にディレクトリが存在しています: " + dir);
        return;
      } else {
        throw new Error("ファイルが存在します: " + dir);
      }
    }
    fs.mkdirSync(dir);
  };
  var p = "";
  path.replace(/^\//, "").split("/").forEach(function(dir) {
    p += dir + "/";
    mkdirSyncIfNotExists(p);
  });
}

