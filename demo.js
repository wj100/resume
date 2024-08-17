
const puppeteer = require('puppeteer');

async function savePageAsPdf(url, outputPath) {
  // 启动一个无头浏览器实例
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 导航到指定的 URL
  await page.goto(url, { waitUntil: 'networkidle2' });

  // 保存页面为 PDF
  await page.pdf({
    path: outputPath, // 输出 PDF 文件路径
    format: 'A4', // 页面格式
    printBackground: true // 打印背景颜色和图片
  });

  // 关闭浏览器
  await browser.close();
}

// 示例用法
const url = 'https://resume.wangjun.work/'; // 你想要爬取的网页 URL
const outputPath = 'output.pdf'; // 输出 PDF 文件名

savePageAsPdf(url, outputPath)
  .then(() => console.log('PDF 文件生成完毕'))
  .catch(err => console.error('生成 PDF 文件时出错:', err));