const markdownpdf = require("markdown-pdf");
const options = {
    cssPath: "style.css",
    paperFormat: "A4",
     paperBorder: "1cm",
    paperOrientation: "portrait",   
    remarkable: {
      html: true,
      breaks: true,
      plugins: [require("remarkable-classy")],
      syntax: ["footnote", "sup", "sub"]
    }
}
markdownpdf(options).from("example.md").to("汪骏（前端）.pdf", function () {
    console.log("PDF生成完毕");
  });
