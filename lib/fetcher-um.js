const fs = require("fs");

const { parse } = require("rss-to-json");
// async await
(async () => {
  const rss = await parse("https://rss-rengga.vercel.app/blogs/wordpress/fip.um.ac.id/http");

  fs.writeFileSync("./um.json", JSON.stringify(rss, null, 2));
})();
