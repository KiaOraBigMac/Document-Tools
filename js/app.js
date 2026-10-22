/* Mac's Tool: Document Transformer — v0.3
   Implemented features run in the browser. Planned features never pretend to convert files. */
(() => {
  "use strict";
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const translations = {
    en: {
      workspace:"WORKSPACE", navHome:"Home", navAllTools:"All tools", navRecent:"Quick access", categories:"CATEGORIES", textTools:"Text & TXT",
      homeTitle:"Document tools", homeSubtitle:"Choose a tool to get started.", officeToolsTitle:"Office file tools", officeToolsSubtitle:"Word, Excel and PowerPoint", otherToolsDivider:"OTHER FILE TOOLS",
      privacyTitle:"Privacy first", privacyShort:"Available tools process files in your browser whenever possible.", breadcrumbWorkspace:"Workspace", localBadge:"Browser-based tools",
      heroEyebrow:"YOUR DOCUMENT WORKSPACE", heroTitle:'Every document.<br><span>One simple workspace.</span>', heroSubtitle:"Convert, organise and clean up your files with a growing collection of practical tools.",
      searchPlaceholder:"Search tools, e.g. PDF merge", heroPrivacy:"Privacy-conscious by design. Local processing where supported.", browseByCategory:"BROWSE BY CATEGORY", categoriesTitle:"Choose your workspace", viewAllTools:"View all tools",
      popularTools:"POPULAR TOOLS", starterToolsTitle:"Useful tools to get started", starterToolsNote:"Only implemented tools can be opened",
      privacyLong:"This starter version processes supported files locally in your browser. It does not upload files to a custom server. Optional third-party libraries are loaded from CDNs when online.",
      learnMore:"Learn more ↗", aboutTitle:"A practical document toolbox", aboutIntro:"Mac's Tool is a growing collection of browser-first file utilities.",
      aboutPrivacyTitle:"Privacy-conscious", aboutPrivacyBody:"Implemented tools work in your browser where supported. This version has no custom upload backend.",
      aboutHonestTitle:"Honest tool status", aboutHonestBody:"Planned tools are clearly labelled and will not pretend to convert a file.",
      aboutQualityTitle:"Quality matters", aboutQualityBody:"Document layouts can be complex. Conversion quality depends on file structure, fonts and the engine used.",
      dependencyTitle:"External library note", dependencyBody:"PDF features use third-party libraries loaded from public CDNs. Those libraries are not bundled into this project. An internet connection is required for those PDF features unless you download and host the libraries locally.",
      footerTagline:"Simple tools. Clear limits. Your files stay yours.", plannedLegend:'Planned tools are labelled “Coming soon”.', noResults:"No tools found", noResultsHint:"Try a different keyword or category.",
      backToTools:"Back to tools", allTools:"All tools", recent:"Quick access", ready:"Ready", comingSoon:"Coming soon", local:"Local processing", onlineLibrary:"External library", implemented:"Available",
      chooseFile:"Choose file", dropFile:"Drop your file here", orBrowse:"or select a file from your device", supported:"Supported formats", convert:"Process file", reset:"Reset", download:"Download result",
      noFile:"Please choose a file first.", libraryMissing:"A required PDF library did not load. Check your internet connection, then refresh this page.",
      aboutModal:"Implemented tools process supported files in your browser. PDF functions rely on third-party libraries loaded from public CDNs in this version. No custom upload server is included. File processing and output quality depend on the file structure and the selected tool.",
      toolUnavailable:"This tool is planned but not implemented yet. It is shown here as part of the roadmap and will not process or modify your file.",
      outputPreview:"Result preview", completed:"Processing completed.", copied:"Copied to clipboard.", downloadReady:"Your file is ready to download.", inputText:"Input text", outputEncoding:"Output encoding", fileName:"Output filename", linesPerPart:"Lines per file", delimiter:"CSV delimiter", sheetNote:"For spreadsheets, CSV export only preserves the selected sheet's plain data—not formulas, styles, charts or multiple sheets.",
      textCleanTitle:"Text cleaner", textCleanDesc:"Remove extra spaces, trim lines and tidy blank lines.", textMergeTitle:"Merge TXT files", textMergeDesc:"Combine multiple plain-text files into one document.", textSplitTitle:"Split TXT by lines", textSplitDesc:"Split a text file into multiple downloadable parts.", encodingTitle:"Text encoding converter", encodingDesc:"Decode common text encodings and save as UTF-8.", csvJsonTitle:"CSV to JSON", csvJsonDesc:"Convert a CSV table into a JSON array.", jsonCsvTitle:"JSON to CSV", jsonCsvDesc:"Convert an array of JSON objects into CSV.", pdfMergeTitle:"Merge PDF files", pdfMergeDesc:"Combine multiple PDFs into one PDF file.", pdfSplitTitle:"Split PDF pages", pdfSplitDesc:"Export selected pages or each page as a separate PDF.", pdfRotateTitle:"Rotate PDF pages", pdfRotateDesc:"Rotate all pages by 90, 180 or 270 degrees.", pdfTextTitle:"Extract PDF text", pdfTextDesc:"Extract selectable text from a text-based PDF. Scanned PDFs need OCR.",
      processing:"Processing…", pageRange:"Page range", pageRangeHelp:"Examples: 1-3, 5, 8-10. Page numbers start at 1.", rotateDegrees:"Rotation", allPages:"All pages", eachPage:"Create one PDF per page", mergeHelp:"Choose two or more PDF files. Files are processed locally in this browser.", pdfTextHelp:"This extracts selectable text only. It does not run OCR on scanned page images.",
      csvHelp:"The first CSV row is used as column headers. Quote marks and commas inside quoted fields are handled.", jsonHelp:"Expected input: an array of objects. Nested objects are JSON-stringified into cells.", textHelp:"The file is read locally in your browser. Some legacy encodings may not be supported by every browser.",
      chooseFiles:"Choose files", choosePdfFiles:"Choose PDF files", selectPdf:"Select PDF", toolCount:"tools", planned:"Coming soon", allCategories:"All", home:"Home", category:"Category",
      cleanAction:"Clean text", mergeAction:"Merge files", splitAction:"Split text", convertAction:"Convert", privacyModalTitle:"Privacy and processing", okay:"Got it", error:"Something went wrong",
      browse:"Browse", fileSelected:"File selected", resultFiles:"Result files", outputReady:"Output ready", downloadAll:"Download parts", removeFile:"Remove", clear:"Clear",
      unsupportedFile:"This file type is not supported by this tool.", badCsv:"Could not parse CSV. Check that the file uses consistent columns and valid quoting.", badJson:"Invalid JSON, or the input is not an array of objects.", invalidRange:"Invalid page range. Check the page numbers and try again.",
      encodingWarning:"This browser supports a limited set of legacy encodings. If the selected encoding is unavailable, use UTF-8 or a local desktop conversion tool.", noPdfPages:"The PDF has no pages or could not be read.", pageCount:"Pages", filesCount:"files", linesCount:"lines",
      aboutButton:"About", privacyDetails:"Privacy details", toolLibrary:"TOOL LIBRARY", searchResults:"Search results", toolsFor:"Tools for", noToolsInCategory:"No matching tools in this category.", xlsxCsvTitle:"Excel to CSV", xlsxCsvDesc:"Export the first worksheet as CSV.", xlsxJsonTitle:"Excel to JSON", xlsxJsonDesc:"Export worksheet data as JSON.", pdfWatermarkTitle:"Add PDF watermark", pdfWatermarkDesc:"Stamp text on every PDF page.", pdfPageNumbersTitle:"Add PDF page numbers", pdfPageNumbersDesc:"Add page numbers to PDF pages.", textReplaceTitle:"Find and replace", textReplaceDesc:"Replace text in a local text file.", watermarkText:"Watermark text", watermarkOpacity:"Opacity", watermarkSize:"Font size", firstSheetNote:"Exports the first worksheet only. Formatting and charts are not preserved.", findText:"Find", replaceText:"Replace with", replaceHelp:"Literal, case-sensitive matching. Original file is not modified.", pageNumberHelp:"Adds a small number at the bottom of each page.", pdfExtractTitle:"Extract pages to one PDF", pdfExtractDesc:"Copy selected pages into one new PDF.", pdfDeleteTitle:"Delete PDF pages", pdfDeleteDesc:"Remove selected pages from a PDF.", pdfReorderTitle:"Reorder PDF pages", pdfReorderDesc:"Arrange pages in a custom order.", excelDupTitle:"Find duplicate Excel rows", excelDupDesc:"Find repeated rows in the first worksheet.", textStatsTitle:"Text statistics", textStatsDesc:"Count words, characters and lines.", pageOrderLabel:"Page order", pageOrderHelp:"Enter every page number once, separated by commas, e.g. 3,1,2.", duplicateNote:"Checks the first worksheet. Formatting and formulas are not preserved.", pptTextTitle:"Extract slide text", pptTextDesc:"Extract readable text from PPTX slides.", pdfCompressTitle:"Compress PDF", pdfCompressDesc:"Re-save a PDF with object-stream optimisation; results vary.", docMergeTitle:"Merge Word files", docMergeDesc:"Append DOCX document body content into one file.", textStatsResult:"Text statistics", wordCountLabel:"Words", charCountLabel:"Characters", charNoSpaceLabel:"Characters (excluding spaces)", lineCountLabel:"Lines", textInputLabel:"Text input", emptyText:"Please enter or select some text first."
    },
    zh: {
      workspace:"工作空间", navHome:"首页", navAllTools:"全部工具", navRecent:"快速访问", categories:"文件分类", textTools:"文本与 TXT",
      homeTitle:"文档工具", homeSubtitle:"选择一个工具开始处理文件。", officeToolsTitle:"Office 文件工具", officeToolsSubtitle:"Word、Excel 和 PowerPoint", otherToolsDivider:"其他文件工具",
      privacyTitle:"隐私优先", privacyShort:"在可行的情况下，工具会在浏览器本地处理文件。", breadcrumbWorkspace:"工作空间", localBadge:"浏览器工具",
      heroEyebrow:"你的文档工作空间", heroTitle:'每一份文档。<br><span>一个简单的工作站。</span>', heroSubtitle:"使用不断扩展的实用工具，转换、整理和清理你的文件。",
      searchPlaceholder:"搜索工具，例如 PDF 合并", heroPrivacy:"以隐私为先。支持时优先本地处理。", browseByCategory:"按类别浏览", categoriesTitle:"选择你的工作区", viewAllTools:"查看全部工具",
      popularTools:"常用工具", starterToolsTitle:"从这些实用工具开始", starterToolsNote:"只有已实现的工具可以打开",
      privacyLong:"当前版本会在浏览器本地处理已支持的文件，不会上传到自建服务器。在线时，部分 PDF 功能会从 CDN 加载第三方库。",
      learnMore:"了解更多 ↗", aboutTitle:"实用的文档工具箱", aboutIntro:"Mac's Tool 是一个以浏览器本地处理为优先的文件工具集合。",
      aboutPrivacyTitle:"注重隐私", aboutPrivacyBody:"已实现的工具会在浏览器支持的范围内本地处理文件。当前版本没有自建文件上传后端。",
      aboutHonestTitle:"明确标注状态", aboutHonestBody:"尚未实现的工具会清楚标注为规划中，不会假装已经转换文件。",
      aboutQualityTitle:"重视转换质量", aboutQualityBody:"文档排版可能很复杂。转换质量取决于文件结构、字体和使用的转换引擎。",
      dependencyTitle:"第三方库说明", dependencyBody:"PDF 功能使用从公共 CDN 加载的第三方库。项目未内置这些库；除非将库下载并改为本地引用，否则 PDF 功能需要联网。",
      footerTagline:"简单工具，明确限制，文件由你掌控。", plannedLegend:"规划中的工具会标注“即将推出”。", noResults:"没有找到工具", noResultsHint:"请尝试其他关键词或分类。",
      backToTools:"返回工具列表", allTools:"全部工具", recent:"快速访问", ready:"就绪", comingSoon:"即将推出", local:"本地处理", onlineLibrary:"外部依赖", implemented:"已可使用",
      chooseFile:"选择文件", dropFile:"将文件拖放到这里", orBrowse:"或从你的设备中选择文件", supported:"支持格式", convert:"开始处理", reset:"重置", download:"下载结果",
      noFile:"请先选择文件。", libraryMissing:"PDF 所需的库未能加载。请检查网络连接，然后刷新页面。",
      aboutModal:"已实现的工具会在浏览器支持的范围内本地处理文件。本版本的 PDF 功能依赖从公共 CDN 加载的第三方库。项目不包含自建上传服务器。处理能力和输出质量取决于文件结构与所选工具。",
      toolUnavailable:"该工具目前尚未实现。它作为未来规划展示，不会处理或修改你的文件。",
      outputPreview:"结果预览", completed:"处理完成。", copied:"已复制到剪贴板。", downloadReady:"文件已准备好下载。", inputText:"输入文本", outputEncoding:"输出编码", fileName:"输出文件名", linesPerPart:"每个文件的行数", delimiter:"CSV 分隔符", sheetNote:"Excel 转 CSV 只保留所选工作表的普通数据，不保留公式、样式、图表或多个工作表。",
      textCleanTitle:"文本清理", textCleanDesc:"删除多余空格、清理行首行尾并整理空行。", textMergeTitle:"合并 TXT 文件", textMergeDesc:"将多个纯文本文件合并为一个文档。", textSplitTitle:"按行拆分 TXT", textSplitDesc:"将文本文件拆分为多个可下载的部分。", encodingTitle:"文本编码转换", encodingDesc:"读取常见文本编码，并保存为 UTF-8。", csvJsonTitle:"CSV 转 JSON", csvJsonDesc:"将 CSV 表格转换为 JSON 数组。", jsonCsvTitle:"JSON 转 CSV", jsonCsvDesc:"将 JSON 对象数组转换为 CSV。", pdfMergeTitle:"合并 PDF", pdfMergeDesc:"将多个 PDF 合并为一个 PDF 文件。", pdfSplitTitle:"拆分 PDF 页面", pdfSplitDesc:"导出指定页面，或将每页单独导出为 PDF。", pdfRotateTitle:"旋转 PDF 页面", pdfRotateDesc:"将所有页面旋转 90、180 或 270 度。", pdfTextTitle:"提取 PDF 文字", pdfTextDesc:"提取可选择的文字型 PDF 内容。扫描版 PDF 需要 OCR。",
      processing:"正在处理…", pageRange:"页面范围", pageRangeHelp:"示例：1-3、5、8-10。页码从 1 开始。", rotateDegrees:"旋转角度", allPages:"全部页面", eachPage:"每页单独生成一个 PDF", mergeHelp:"请选择两个或更多 PDF 文件。文件会在当前浏览器中本地处理。", pdfTextHelp:"此工具只提取可选择的文字，不会对扫描版页面图像执行 OCR。",
      csvHelp:"CSV 第一行将作为列名。工具支持处理带引号的字段以及字段内部的逗号。", jsonHelp:"输入应为对象数组。嵌套对象会被转换成 JSON 字符串放入单元格。", textHelp:"文件会在浏览器本地读取。部分旧式编码可能不受当前浏览器支持。",
      chooseFiles:"选择多个文件", choosePdfFiles:"选择 PDF 文件", selectPdf:"选择 PDF", toolCount:"个工具", planned:"即将推出", allCategories:"全部", home:"首页", category:"分类",
      cleanAction:"清理文本", mergeAction:"合并文件", splitAction:"拆分文本", convertAction:"转换", privacyModalTitle:"隐私与文件处理", okay:"知道了", error:"处理时发生错误",
      browse:"浏览文件", fileSelected:"已选择文件", resultFiles:"结果文件", outputReady:"结果已准备好", downloadAll:"下载分段文件", removeFile:"移除", clear:"清空",
      unsupportedFile:"此工具不支持该文件类型。", badCsv:"无法解析 CSV。请检查列数是否一致、引号是否正确。", badJson:"JSON 无效，或输入内容不是对象数组。", invalidRange:"页面范围无效。请检查页码后重试。",
      encodingWarning:"浏览器支持的旧式编码有限。如果所选编码不可用，请改用 UTF-8 或桌面转换工具。", noPdfPages:"PDF 没有页面或无法读取。", pageCount:"页数", filesCount:"个文件", linesCount:"行",
      aboutButton:"关于", privacyDetails:"隐私说明", toolLibrary:"工具库", searchResults:"搜索结果", toolsFor:"分类工具", noToolsInCategory:"此分类中没有匹配的工具。", xlsxCsvTitle:"Excel 转 CSV", xlsxCsvDesc:"将第一个工作表导出为 CSV。", xlsxJsonTitle:"Excel 转 JSON", xlsxJsonDesc:"将工作表数据导出为 JSON。", pdfWatermarkTitle:"添加 PDF 水印", pdfWatermarkDesc:"为 PDF 每一页添加文字水印。", pdfPageNumbersTitle:"添加 PDF 页码", pdfPageNumbersDesc:"为 PDF 页面添加页码。", textReplaceTitle:"查找与替换", textReplaceDesc:"在本地文本文件中替换内容。", watermarkText:"水印文字", watermarkOpacity:"透明度", watermarkSize:"字号", firstSheetNote:"仅导出第一个工作表，不保留格式和图表。", findText:"查找内容", replaceText:"替换为", replaceHelp:"按字面匹配且区分大小写，不会修改原文件。", pageNumberHelp:"在每页底部添加一个小页码。", pdfExtractTitle:"提取页面为一个 PDF", pdfExtractDesc:"将指定页面复制到一个新的 PDF。", pdfDeleteTitle:"删除 PDF 页面", pdfDeleteDesc:"从 PDF 中删除指定页面。", pdfReorderTitle:"调整 PDF 页面顺序", pdfReorderDesc:"按照自定义顺序重新排列页面。", excelDupTitle:"检查 Excel 重复行", excelDupDesc:"检查第一个工作表中的重复行。", textStatsTitle:"文本统计", textStatsDesc:"统计单词、字符和行数。", pageOrderLabel:"页面顺序", pageOrderHelp:"输入每一页的页码，用逗号分隔，例如 3,1,2。", duplicateNote:"检查第一个工作表，不保留格式和公式。", pptTextTitle:"提取幻灯片文字", pptTextDesc:"提取 PPTX 幻灯片中的可读取文字。", pdfCompressTitle:"压缩 PDF", pdfCompressDesc:"使用对象流优化重新保存 PDF，效果因文件而异。", docMergeTitle:"合并 Word 文件", docMergeDesc:"将多个 DOCX 的正文追加合并为一个文件。", textStatsResult:"文本统计结果", wordCountLabel:"单词数", charCountLabel:"字符数", charNoSpaceLabel:"不含空格的字符数", lineCountLabel:"行数", textInputLabel:"输入文本", emptyText:"请先输入文本或选择文本文件。"
    }
  };

  const categories = [
    {id:"word",name:"Word",zh:"Word 文档",short:"DOC · DOCX",icon:"W",color:"word",desc:{en:"Create, convert and clean up documents.",zh:"创建、转换和整理文档。"},count:8},
    {id:"excel",name:"Excel",zh:"Excel 表格",short:"XLS · XLSX · CSV",icon:"X",color:"excel",desc:{en:"Work with spreadsheets and structured data.",zh:"处理电子表格与结构化数据。"},count:8},
    {id:"powerpoint",name:"PowerPoint",zh:"PowerPoint 演示文稿",short:"PPT · PPTX",icon:"P",color:"powerpoint",desc:{en:"Prepare and convert slide decks.",zh:"整理和转换演示文稿。"},count:8},
    {id:"pdf",name:"PDF",zh:"PDF 工具",short:"PDF",icon:"P",color:"pdf",desc:{en:"Merge, split, rotate and extract PDF content.",zh:"合并、拆分、旋转 PDF 并提取内容。"},count:10},
    {id:"text",name:"Text & TXT",zh:"文本与 TXT",short:"TXT · MD · HTML",icon:"T",color:"text",desc:{en:"Clean, combine and convert plain text.",zh:"清理、合并和转换纯文本。"},count:10}
  ];

  const tools = [
    {id:"text-clean",category:"text",icon:"✎",titleKey:"textCleanTitle",descKey:"textCleanDesc",status:"ready",action:"text-clean",formats:"TXT, MD, CSV, LOG",keywords:"clean whitespace blank lines trim 文本 清理 空格 空行"},
    {id:"text-merge",category:"text",icon:"⊕",titleKey:"textMergeTitle",descKey:"textMergeDesc",status:"ready",action:"text-merge",formats:"TXT",keywords:"merge combine concatenate 合并 文本"},
    {id:"text-split",category:"text",icon:"⫶",titleKey:"textSplitTitle",descKey:"textSplitDesc",status:"ready",action:"text-split",formats:"TXT",keywords:"split lines 拆分 文本"},
    {id:"text-encoding",category:"text",icon:"文",titleKey:"encodingTitle",descKey:"encodingDesc",status:"ready",action:"text-encoding",formats:"TXT, CSV, LOG",keywords:"encoding utf8 utf16 gbk charset 编码"},
    {id:"csv-json",category:"excel",icon:"⇄",titleKey:"csvJsonTitle",descKey:"csvJsonDesc",status:"ready",action:"csv-json",formats:"CSV → JSON",keywords:"csv json table data 表格 数据"},
    {id:"json-csv",category:"excel",icon:"⇄",titleKey:"jsonCsvTitle",descKey:"jsonCsvDesc",status:"ready",action:"json-csv",formats:"JSON → CSV",keywords:"json csv table data 表格 数据"},
    {id:"pdf-merge",category:"pdf",icon:"⊕",titleKey:"pdfMergeTitle",descKey:"pdfMergeDesc",status:"ready",action:"pdf-merge",formats:"PDF",needsPdf:true,keywords:"merge combine pdf 合并"},
    {id:"pdf-split",category:"pdf",icon:"⫶",titleKey:"pdfSplitTitle",descKey:"pdfSplitDesc",status:"ready",action:"pdf-split",formats:"PDF",needsPdf:true,keywords:"split pages extract pdf 拆分 页面 提取"},
    {id:"pdf-rotate",category:"pdf",icon:"↻",titleKey:"pdfRotateTitle",descKey:"pdfRotateDesc",status:"ready",action:"pdf-rotate",formats:"PDF",needsPdf:true,keywords:"rotate pages pdf 旋转"},
    {id:"pdf-text",category:"pdf",icon:"≡",titleKey:"pdfTextTitle",descKey:"pdfTextDesc",status:"ready",action:"pdf-text",formats:"PDF → TXT",needsPdf:true,needsPdfJs:true,keywords:"extract text pdf 提取文字"},
    {id:"pdf-extract-pages",category:"pdf",icon:"⇥",titleKey:"pdfExtractTitle",descKey:"pdfExtractDesc",status:"ready",action:"pdf-extract-pages",formats:"PDF",needsPdf:true,keywords:"extract selected pages PDF 提取 页面"},
    {id:"pdf-delete-pages",category:"pdf",icon:"−",titleKey:"pdfDeleteTitle",descKey:"pdfDeleteDesc",status:"ready",action:"pdf-delete-pages",formats:"PDF",needsPdf:true,keywords:"delete remove pages PDF 删除 页面"},
    {id:"pdf-reorder-pages",category:"pdf",icon:"↕",titleKey:"pdfReorderTitle",descKey:"pdfReorderDesc",status:"ready",action:"pdf-reorder-pages",formats:"PDF",needsPdf:true,keywords:"reorder arrange pages PDF 页面 顺序"},
    {id:"excel-duplicates",category:"excel",icon:"⌕",titleKey:"excelDupTitle",descKey:"excelDupDesc",status:"ready",action:"excel-duplicates",formats:"XLSX · XLS",needsXlsx:true,keywords:"excel duplicate repeated rows 重复 行"},
    {id:"text-statistics",category:"text",icon:"123",titleKey:"textStatsTitle",descKey:"textStatsDesc",status:"ready",action:"text-statistics",formats:"TXT · MD",keywords:"word count characters lines statistics 字数 字符 行数"},
    ...[
      ["excel-xlsx-csv","excel","⇄","XLSX → CSV","XLSX 转 CSV","Export a worksheet's data to CSV.","将工作表数据导出为 CSV。","XLSX → CSV","xlsxCsvTitle","xlsxCsvDesc","xlsx-csv"],
      ["ppt-text","powerpoint","≡","Extract slide text","提取幻灯片文字","Extract text from presentation slides.","提取演示文稿中的文字。","PPTX → TXT","pptTextTitle","pptTextDesc","ppt-text"],
      ["pdf-compress","pdf","↓","Compress PDF","压缩 PDF","Re-save a PDF with object-stream optimisation; size reduction depends on the source file.","使用对象流优化重新保存 PDF；压缩幅度取决于源文件。","PDF","pdfCompressTitle","pdfCompressDesc","pdf-compress"],
      ["pdf-page-numbers","pdf","#","Add PDF page numbers","添加 PDF 页码","Add page numbers to PDF pages.","为 PDF 页面添加页码。","PDF","pdfPageNumbersTitle","pdfPageNumbersDesc","pdf-page-numbers"],
      ["pdf-watermark","pdf","◈","Add PDF watermark","添加 PDF 水印","Add a text watermark to PDF pages.","为 PDF 页面添加文字水印。","PDF","pdfWatermarkTitle","pdfWatermarkDesc","pdf-watermark"],
      ["text-find","text","⌕","Find & replace","查找与替换","Find and replace text in a local document.","在本地文本中查找和替换内容。","TXT","textReplaceTitle","textReplaceDesc","text-replace"],
      ["doc-merge","word","⊕","Merge Word files","合并 Word 文件","Combine DOCX documents by appending document body content. Complex headers, footers and embedded relationships may not be preserved.","通过追加正文内容合并 DOCX。复杂页眉页脚及嵌入对象关系可能无法完整保留。","DOCX","docMergeTitle","docMergeDesc","doc-merge"],
      ["excel-json","excel","⇄","Excel → JSON","Excel 转 JSON","Convert worksheet data into JSON.","将工作表数据转换为 JSON。","XLSX → JSON","xlsxJsonTitle","xlsxJsonDesc","xlsx-json"]
    ].map(([id,category,icon,enTitle,zhTitle,enDesc,zhDesc,formats,titleKey,descKey,action])=>({
      id,category,icon,titleKey,descKey,title:{en:enTitle,zh:zhTitle},desc:{en:enDesc,zh:zhDesc},status:action?"ready":"planned",action:action||null,formats,
      keywords:`${enTitle} ${zhTitle} ${enDesc} ${zhDesc} ${formats}`
    }))
  ];

  categories.forEach(c => { c.count = tools.filter(tool => tool.category === c.id).length; });

  let lang = "en";
  let currentView = "home";
  let currentCategory = "all";
  let currentTool = null;
  let selectedFiles = [];
  let activeResults = [];

  const t = key => translations[lang][key] || translations.en[key] || key;
  const catName = id => {
    const c = categories.find(x=>x.id===id);
    return c ? (lang==="zh"?c.zh:c.name) : t("allTools");
  };
  const toolTitle = tool => typeof tool.titleKey==="string" ? t(tool.titleKey) : (tool.title?.[lang] || tool.title?.en || "");
  const toolDesc = tool => typeof tool.descKey==="string" ? t(tool.descKey) : (tool.desc?.[lang] || tool.desc?.en || "");
  const formatBytes = n => n < 1024 ? `${n} B` : n < 1024*1024 ? `${(n/1024).toFixed(1)} KB` : `${(n/1024/1024).toFixed(2)} MB`;
  const safeName = name => name.replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim() || "output";
  const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const catIcon = id => categories.find(c=>c.id===id)?.icon || "•";

  function toast(message){
    const el=document.createElement("div");el.className="toast";el.textContent=message;$("#toastRegion").append(el);
    setTimeout(()=>el.remove(),3600);
  }
  function showModal(title, text){
    $("#modalTitle").textContent=title;$("#modalText").textContent=text;$("#modalBackdrop").classList.remove("hidden");
  }
  function closeModal(){$("#modalBackdrop").classList.add("hidden");}
  function setView(view){
    currentView=view;
    $$(".view").forEach(v=>v.classList.remove("active"));
    const target=view==="home"?"homeView":view==="tool"?"toolView":view==="about"?"aboutView":"listingView";
    $("#"+target).classList.add("active");
    $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view || (view==="listing"&&b.dataset.view==="all-tools")));
    $("#breadcrumbCurrent").textContent=view==="home"?t("home"):view==="tool"?(currentTool?toolTitle(currentTool):"Tool"):view==="about"?"About":view==="listing"?(currentCategory==="all"?t("allTools"):catName(currentCategory)):t("allTools");
    $("#sidebar").classList.remove("open");
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function renderCategories(){
    if(!$("#categoryGrid")) return;
    $("#categoryGrid").innerHTML=categories.map(c=>`
      <button class="category-card" data-open-category="${c.id}">
        <span class="category-icon ${c.color}">${c.icon}</span>
        <strong>${esc(lang==="zh"?c.zh:c.name)}</strong>
        <p>${esc(c.desc[lang])}</p>
        <span class="category-bottom"><b>↗</b></span>
      </button>`).join("");
  }
  function toolCard(tool){
    return `<button class="tool-card" data-tool-id="${tool.id}" aria-label="${esc(toolTitle(tool))}">
      <span class="tool-card-icon">${tool.icon||"⇄"}</span>
      <span class="tool-card-copy"><strong>${esc(toolTitle(tool))}</strong><p>${esc(toolDesc(tool))}</p><span class="tool-card-format">${esc(tool.formats||"")}</span></span><span class="tool-arrow">↗</span>
    </button>`;
  }
  function toolOrder(a,b){
    const group=x=>["word","excel","powerpoint"].includes(x.category)?0:1;
    return group(a)-group(b) || ["word","excel","powerpoint","pdf","text"].indexOf(a.category)-["word","excel","powerpoint","pdf","text"].indexOf(b.category) || toolTitle(a).localeCompare(toolTitle(b));
  }
  function renderFeatured(){
    const office=tools.filter(x=>["word","excel","powerpoint"].includes(x.category)).sort(toolOrder);
    const other=tools.filter(x=>!["word","excel","powerpoint"].includes(x.category)).sort(toolOrder);
    $("#officeTools").innerHTML=office.map(toolCard).join("");
    $("#otherTools").innerHTML=other.map(toolCard).join("");
  }
  function renderFilters(){
    const list=[{id:"all",en:"All",zh:"全部"},...categories.map(c=>({id:c.id,en:c.name,zh:c.zh}))];
    $("#filterPills").innerHTML=list.map(x=>`<button class="filter-pill ${currentCategory===x.id?"active":""}" data-filter="${x.id}">${esc(x[lang])}</button>`).join("");
  }
  function renderListing(query=""){
    const q=query.trim().toLowerCase();
    const filtered=tools.filter(tool=>(currentCategory==="all"||tool.category===currentCategory)&&(!q||[toolTitle(tool),toolDesc(tool),tool.keywords,tool.formats,catName(tool.category)].join(" ").toLowerCase().includes(q))).sort(toolOrder);
    const office=filtered.filter(x=>["word","excel","powerpoint"].includes(x.category));
    const other=filtered.filter(x=>!["word","excel","powerpoint"].includes(x.category));
    $("#listingTools").innerHTML=(currentCategory==="all"&&!q&&office.length&&other.length?office.map(toolCard).join("")+`<div class="listing-divider"><span>${esc(t("otherToolsDivider"))}</span></div>`+other.map(toolCard).join(""):filtered.map(toolCard).join(""));
    $("#resultCount").textContent=`${filtered.length} ${t("toolCount")}`;
    $("#emptyState").classList.toggle("hidden",filtered.length!==0);
    $("#listingTools").classList.toggle("hidden",filtered.length===0);
    renderFilters();
  }
  function openListing(category="all",query=""){
    currentCategory=category;$("#listingSearch").value=query;
    $("#listingTitle").textContent=query?t("searchResults"):category==="all"?t("allTools"):catName(category);
    $("#listingDescription").textContent=query?(lang==="zh"?`与“${query}”相关的工具`:`Tools matching “${query}”`):category==="all"?(lang==="zh"?"浏览所有已实现与规划中的文档工具。":"Browse implemented and planned document tools."):categories.find(c=>c.id===category).desc[lang];
    $("#listingEyebrow").textContent=category==="all"?t("toolLibrary"):catName(category).toUpperCase();
    renderListing(query);setView("listing");
  }
  function setLanguage(next){
    lang=next;document.documentElement.lang=lang==="zh"?"zh-CN":"en";$("#languageLabel").textContent=lang==="en"?"中文":"English";
    $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key];});
    $$("[data-i18n-placeholder]").forEach(el=>{const key=el.dataset.i18nPlaceholder;el.placeholder=t(key);});
    $("#heroSearch").placeholder=t("searchPlaceholder");
    renderCategories();renderFeatured();
    if(currentView==="listing")openListing(currentCategory,$("#listingSearch").value);
    if(currentView==="tool"&&currentTool)openTool(currentTool.id);
    $("#breadcrumbCurrent").textContent=currentView==="home"?t("home"):currentView==="listing"?(currentCategory==="all"?t("allTools"):catName(currentCategory)):currentView==="about"?"About":toolTitle(currentTool||{title:{en:"Tool",zh:"工具"}});
  }

  function openTool(id){
    const tool=tools.find(x=>x.id===id);if(!tool)return;
    if(tool.status!=="ready"){toast(t("toolUnavailable"));return;}
    currentTool=tool;selectedFiles=[];activeResults=[];
    $("#activeToolIcon").textContent=tool.icon||"⇄";
    $("#activeToolCategory").textContent=catName(tool.category).toUpperCase();
    $("#activeToolTitle").textContent=toolTitle(tool);
    $("#activeToolDescription").textContent=toolDesc(tool);
    $("#toolStatus").textContent="";
    $("#toolNoteText").textContent=tool.needsPdf||tool.needsPdfJs?t("dependencyBody"):t("textHelp");
    $("#toolWorkspace").innerHTML=renderToolWorkspace(tool);
    setView("tool");
    bindToolWorkspace(tool);
  }

  function renderUpload(id,multiple,accept){
    return `<div class="upload-zone" id="uploadZone"><div class="upload-symbol">⇧</div><h3>${t("dropFile")}</h3><p>${t("orBrowse")}</p><button class="secondary-button" type="button" id="browseFiles">${multiple?t("chooseFiles"):t("chooseFile")}</button><input class="file-input" type="file" id="fileInput" ${multiple?"multiple":""} accept="${accept||"*/*"}"></div><div id="selectedFiles"></div>`;
  }
  function renderToolWorkspace(tool){
    const id=tool.action;
    if(id==="text-clean")return `${renderUpload(id,false,".txt,.md,.csv,.log,text/plain,text/csv")}<div class="field-row"><div class="field"><label>${t("inputText")}</label><textarea id="textInput" placeholder="${lang==="zh"?"也可以直接在这里粘贴文本…":"You can also paste text here…"}"></textarea></div></div><div class="tool-actions"><button class="primary-button" id="runTool">${t("cleanAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="text-merge")return `${renderUpload(id,true,".txt,.md,.log,text/plain")}<div class="field"><label>${t("inputText")}</label><textarea id="separatorInput" placeholder="${lang==="zh"?"可选：在每个文件之间插入的分隔文字":"Optional text to insert between files"}"></textarea></div><div class="tool-actions"><button class="primary-button" id="runTool">${t("mergeAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="text-split")return `${renderUpload(id,false,".txt,.md,.log,text/plain")}<div class="field-row"><div class="field"><label>${t("linesPerPart")}</label><input type="number" id="linesPerPart" value="500" min="1" max="100000"></div><div class="field"><label>${t("fileName")}</label><input id="outputBase" value="part"></div></div><div class="tool-actions"><button class="primary-button" id="runTool">${t("splitAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="text-encoding")return `${renderUpload(id,false,".txt,.csv,.md,.log,text/plain,text/csv")}<div class="field-row"><div class="field"><label>${t("outputEncoding")}</label><select id="encodingSelect"><option value="utf-8">UTF-8</option><option value="utf-16le">UTF-16 LE</option><option value="utf-16be">UTF-16 BE</option></select></div></div><p class="helper-text">${t("encodingWarning")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="csv-json")return `${renderUpload(id,false,".csv,.tsv,text/csv,text/tab-separated-values")}<div class="field-row"><div class="field"><label>${t("delimiter")}</label><select id="csvDelimiter"><option value=",">Comma (,)</option><option value=";">Semicolon (;)</option><option value="\\t">Tab</option></select></div></div><p class="helper-text">${t("csvHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="json-csv")return `${renderUpload(id,false,".json,application/json")}<p class="helper-text">${t("jsonHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-merge")return `${renderUpload(id,true,".pdf,application/pdf")}<p class="helper-text">${t("mergeHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("mergeAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-split")return `${renderUpload(id,false,".pdf,application/pdf")}<div class="field-row"><div class="field"><label>${t("pageRange")}</label><input id="pageRange" placeholder="1-3, 5, 8-10"></div></div><p class="helper-text">${t("pageRangeHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("splitAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-rotate")return `${renderUpload(id,false,".pdf,application/pdf")}<div class="field-row"><div class="field"><label>${t("rotateDegrees")}</label><select id="rotateDegrees"><option value="90">90° clockwise</option><option value="180">180°</option><option value="270">270° clockwise</option></select></div></div><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-text")return `${renderUpload(id,false,".pdf,application/pdf")}<p class="helper-text">${t("pdfTextHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;

    if(id==="pdf-extract-pages"||id==="pdf-delete-pages")return `${renderUpload(id,false,".pdf,application/pdf")}<div class="field"><label>${t("pageRange")}</label><input id="pageRange" placeholder="1-3, 5, 8-10"></div><p class="helper-text">${t("pageRangeHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-reorder-pages")return `${renderUpload(id,false,".pdf,application/pdf")}<div class="field"><label>${t("pageOrderLabel")}</label><input id="pageOrder" placeholder="3,1,2"></div><p class="helper-text">${t("pageOrderHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="excel-duplicates")return `${renderUpload(id,false,".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel")}<p class="helper-text">${t("duplicateNote")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="ppt-text")return `${renderUpload(id,false,".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation")}<p class="helper-text">${lang==="zh"?"仅支持 .pptx，不支持旧版 .ppt。":"Supports .pptx only, not legacy .ppt."}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="doc-merge")return `${renderUpload(id,true,".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document")}<p class="helper-text">${lang==="zh"?"请至少选择两个 DOCX。此简化合并会追加正文，复杂页眉页脚、脚注和嵌入对象可能无法保留。":"Choose at least two DOCX files. This basic merge appends document body content; complex headers, footers, footnotes and embedded objects may not be preserved."}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("mergeAction")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-compress")return `${renderUpload(id,false,".pdf,application/pdf")}<p class="helper-text">${lang==="zh"?"重新保存并启用对象流优化。扫描图像和已压缩 PDF 的体积可能不会明显减少。":"Re-saves with object-stream optimisation. Scanned images and already-optimised PDFs may not shrink significantly."}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="text-statistics")return `<div class="field"><label>${t("textInputLabel")}</label><textarea id="textInput" placeholder="${lang==="zh"?"粘贴或输入文本…":"Paste or type text…"}"></textarea></div>${renderUpload(id,false,".txt,.md,.log,text/plain,text/markdown")}<div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="xlsx-csv"||id==="xlsx-json")return `${renderUpload(id,false,".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel")}<p class="helper-text">${t("firstSheetNote")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-watermark")return `${renderUpload(id,false,".pdf,application/pdf")}<div class="field-row"><div class="field"><label>${t("watermarkText")}</label><input id="watermarkText" value="CONFIDENTIAL" maxlength="100"></div><div class="field"><label>${t("watermarkSize")}</label><input id="watermarkSize" type="number" min="8" max="100" value="42"></div><div class="field"><label>${t("watermarkOpacity")}</label><input id="watermarkOpacity" type="number" min="0.05" max="0.8" step="0.05" value="0.25"></div></div><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="pdf-page-numbers")return `${renderUpload(id,false,".pdf,application/pdf")}<p class="helper-text">${t("pageNumberHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    if(id==="text-replace")return `${renderUpload(id,false,".txt,.md,.csv,.log,text/plain,text/csv")}<div class="field-row"><div class="field"><label>${t("findText")}</label><input id="findValue"></div><div class="field"><label>${t("replaceText")}</label><input id="replaceValue"></div></div><p class="helper-text">${t("replaceHelp")}</p><div class="tool-actions"><button class="primary-button" id="runTool">${t("convert")}</button><button class="secondary-button" id="resetTool">${t("reset")}</button></div><div id="toolOutput"></div>`;
    return `<p>${t("toolUnavailable")}</p>`;
  }

  function bindToolWorkspace(tool){
    const input=$("#fileInput"),zone=$("#uploadZone");
    if(input){
      input.addEventListener("change",()=>{selectedFiles=[...input.files];renderSelectedFiles();});
      $("#browseFiles").addEventListener("click",e=>{e.stopPropagation();input.click();});
      zone.addEventListener("click",e=>{if(e.target.closest("button"))return;input.click();});
      const stopDrag=e=>{e.preventDefault();e.stopPropagation();};
      ["dragenter","dragover"].forEach(type=>zone.addEventListener(type,e=>{stopDrag(e);zone.classList.add("dragover");}));
      ["dragleave","dragend"].forEach(type=>zone.addEventListener(type,e=>{stopDrag(e);if(!zone.contains(e.relatedTarget))zone.classList.remove("dragover");}));
      zone.addEventListener("drop",e=>{stopDrag(e);zone.classList.remove("dragover");const dropped=[...(e.dataTransfer?.files||[])];if(!dropped.length)return;selectedFiles=input.multiple?[...selectedFiles,...dropped]:dropped.slice(0,1);try{const dt=new DataTransfer();selectedFiles.forEach(f=>dt.items.add(f));input.files=dt.files;}catch{}renderSelectedFiles();});
    }
    $("#runTool")?.addEventListener("click",()=>runTool(tool));
    $("#resetTool")?.addEventListener("click",()=>openTool(tool.id));
  }
  function renderSelectedFiles(){
    const holder=$("#selectedFiles");if(!holder)return;
    holder.innerHTML=selectedFiles.map((f,i)=>`<div class="selected-file"><span class="selected-file-icon">▤</span><span class="file-details"><strong>${esc(f.name)}</strong><small>${formatBytes(f.size)}</small></span><button class="icon-button" data-remove-file="${i}" title="${t("removeFile")}">×</button></div>`).join("");
    $$("[data-remove-file]",holder).forEach(btn=>btn.addEventListener("click",()=>{selectedFiles.splice(Number(btn.dataset.removeFile),1);const input=$("#fileInput");if(input){try{const dt=new DataTransfer();selectedFiles.forEach(f=>dt.items.add(f));input.files=dt.files;}catch{}}renderSelectedFiles();}));
  }
  function outputPanel(content,filename,mime="text/plain;charset=utf-8",preview=true){
    const blob=content instanceof Blob?content:new Blob([content],{type:mime});
    const url=URL.createObjectURL(blob);activeResults.push(url);
    const name=safeName(filename);
    const previewText=preview&&typeof content==="string"?`<pre>${esc(content.length>12000?content.slice(0,12000)+"\\n…":content)}</pre>`:"";
    return `<div class="result-panel"><h3>✓ ${t("outputReady")}</h3><p>${t("downloadReady")}</p>${previewText}<div class="result-actions"><a class="primary-button" style="text-decoration:none;display:inline-flex;align-items:center" href="${url}" download="${esc(name)}">${t("download")}</a><button class="secondary-button" id="copyResult">${t("copyResult")||"Copy text"}</button></div></div>`;
  }
  function setOutput(html){$("#toolOutput").innerHTML=html;const copy=$("#copyResult");if(copy)copy.addEventListener("click",async()=>{const pre=$("#toolOutput pre");if(!pre)return;try{await navigator.clipboard.writeText(pre.textContent);toast(t("copied"));}catch{toast("Clipboard access is unavailable in this context.");}});}
  async function readText(file){return await file.text();}
  function parseCsv(text,delimiter=","){
    const rows=[];let row=[],field="",quoted=false;
    for(let i=0;i<text.length;i++){const ch=text[i];if(quoted){if(ch==='"'&&text[i+1]==='"'){field+='"';i++;}else if(ch==='"')quoted=false;else field+=ch;}else{if(ch==='"'&&field==="")quoted=true;else if(ch===delimiter){row.push(field);field="";}else if(ch==="\n"){row.push(field.replace(/\r$/,""));rows.push(row);row=[];field="";}else field+=ch;}}
    if(quoted)throw new Error("Unclosed quote");
    if(field.length||row.length){row.push(field.replace(/\r$/,""));rows.push(row);}
    while(rows.length&&rows[rows.length-1].every(v=>v===""))rows.pop();
    return rows;
  }
  function csvEscape(v){const s=v==null?"":typeof v==="object"?JSON.stringify(v):String(v);return /[",\r\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s;}
  function parsePageRange(value,total){
    const parts=value.split(",").map(x=>x.trim()).filter(Boolean),pages=new Set();
    if(!parts.length)throw new Error(t("invalidRange"));
    for(const p of parts){const m=p.match(/^(\d+)(?:\s*-\s*(\d+))?$/);if(!m)throw new Error(t("invalidRange"));const start=Number(m[1]),end=Number(m[2]||m[1]);if(start<1||end<start||end>total||end-start>10000)throw new Error(t("invalidRange"));for(let n=start;n<=end;n++)pages.add(n-1);}
    return [...pages].sort((a,b)=>a-b);
  }
  function pdfLib(){if(!window.PDFLib)throw new Error(t("libraryMissing"));return window.PDFLib;}
  function pdfJs(){if(!window.pdfjsLib)throw new Error(t("libraryMissing"));if(window.pdfjsLib.GlobalWorkerOptions)window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";return window.pdfjsLib;}

  async function runTool(tool){
    const out=$("#toolOutput");out.innerHTML="";
    try{
      const action=tool.action;
      if(action.startsWith("pdf-")&&!window.PDFLib)throw new Error(t("libraryMissing"));
      if(["text-clean","text-encoding","text-split","csv-json","json-csv","xlsx-csv","xlsx-json","pdf-split","pdf-rotate","pdf-text","pdf-watermark","pdf-page-numbers","text-replace","pdf-extract-pages","pdf-delete-pages","pdf-reorder-pages","excel-duplicates","ppt-text","pdf-compress","doc-merge"].includes(action)&&!selectedFiles.length)throw new Error(t("noFile"));
      let html="";
      if(action==="text-clean"){
        let source=$("#textInput").value;
        if(selectedFiles[0])source=await readText(selectedFiles[0]);
        const cleaned=source.split(/\r\n|\n|\r/).map(line=>line.replace(/[ \t]+$/g,"").replace(/^[ \t]+/g,"")).join("\n").replace(/\n{3,}/g,"\n\n").trim();
        html=outputPanel(cleaned,(selectedFiles[0]?.name.replace(/\.[^.]+$/,"")||"cleaned")+".txt");
      } else if(action==="text-merge"){
        if(selectedFiles.length<2)throw new Error(lang==="zh"?"请至少选择两个 TXT 文件。":"Choose at least two text files.");
        const sep=$("#separatorInput").value;
        const parts=await Promise.all(selectedFiles.map(readText));
        html=outputPanel(parts.join(sep||"\n\n"),"merged.txt");
      } else if(action==="text-split"){
        const text=await readText(selectedFiles[0]),lines=text.split(/\r\n|\n|\r/),size=Number($("#linesPerPart").value);
        if(!Number.isInteger(size)||size<1)throw new Error("Enter a valid number of lines.");
        const base=safeName($("#outputBase").value||"part"),parts=[];
        for(let i=0;i<lines.length;i+=size)parts.push({name:`${base}_${String(parts.length+1).padStart(3,"0")}.txt`,text:lines.slice(i,i+size).join("\n")});
        const links=parts.map(p=>{const url=URL.createObjectURL(new Blob([p.text],{type:"text/plain;charset=utf-8"}));activeResults.push(url);return `<a class="secondary-button" style="text-decoration:none" href="${url}" download="${esc(p.name)}">${esc(p.name)}</a>`;}).join("");
        html=`<div class="result-panel"><h3>✓ ${t("resultFiles")}</h3><p>${parts.length} ${t("filesCount")} · ${lines.length} ${t("linesCount")}</p><div class="result-actions">${links}</div></div>`;
      } else if(action==="text-encoding"){
        const file=selectedFiles[0],buffer=await file.arrayBuffer();let text;
        const enc=$("#encodingSelect").value;
        try{text=new TextDecoder("utf-8",{fatal:false}).decode(buffer);if(buffer.byteLength>=2&&new Uint8Array(buffer)[0]===0xFF&&new Uint8Array(buffer)[1]===0xFE)text=new TextDecoder("utf-16le").decode(buffer);else if(buffer.byteLength>=2&&new Uint8Array(buffer)[0]===0xFE&&new Uint8Array(buffer)[1]===0xFF)text=new TextDecoder("utf-16be").decode(buffer);}catch{text=new TextDecoder().decode(buffer);}
        let blob;
        if(enc==="utf-8")blob=new Blob(["\uFEFF",text],{type:"text/plain;charset=utf-8"});
        else if(enc==="utf-16le"){const bytes=new Uint8Array(text.length*2+2);bytes[0]=0xFF;bytes[1]=0xFE;for(let i=0;i<text.length;i++){const c=text.charCodeAt(i);bytes[2+i*2]=c&255;bytes[3+i*2]=c>>8;}blob=new Blob([bytes],{type:"text/plain"});}
        else {const bytes=new Uint8Array(text.length*2+2);bytes[0]=0xFE;bytes[1]=0xFF;for(let i=0;i<text.length;i++){const c=text.charCodeAt(i);bytes[2+i*2]=c>>8;bytes[3+i*2]=c&255;}blob=new Blob([bytes],{type:"text/plain"});}
        html=outputPanel(blob,file.name.replace(/\.[^.]+$/,"")+"."+enc.replace("-",""),"application/octet-stream",false);
      } else if(action==="csv-json"){
        const text=await readText(selectedFiles[0]),del=$("#csvDelimiter").value==="\\t"?"\t":$("#csvDelimiter").value,rows=parseCsv(text,del);
        if(!rows.length)throw new Error(t("badCsv"));
        const headers=rows.shift().map((h,i)=>h.trim()||`column_${i+1}`);
        const data=rows.filter(r=>r.some(v=>v!=="")).map(row=>Object.fromEntries(headers.map((h,i)=>[h,row[i]??""])));
        const json=JSON.stringify(data,null,2);
        html=outputPanel(json,selectedFiles[0].name.replace(/\.[^.]+$/,"")+".json","application/json;charset=utf-8");
      } else if(action==="json-csv"){
        const text=await readText(selectedFiles[0]);let data;try{data=JSON.parse(text);}catch{throw new Error(t("badJson"));}
        if(!Array.isArray(data)||!data.every(x=>x&&typeof x==="object"&&!Array.isArray(x)))throw new Error(t("badJson"));
        const headers=[...new Set(data.flatMap(x=>Object.keys(x)))];
        const csv=[headers.map(csvEscape).join(","),...data.map(row=>headers.map(h=>csvEscape(row[h])).join(","))].join("\r\n");
        html=outputPanel(csv,selectedFiles[0].name.replace(/\.[^.]+$/,"")+".csv","text/csv;charset=utf-8");
      } else if(action==="pdf-merge"){
        if(selectedFiles.length<2)throw new Error(lang==="zh"?"请至少选择两个 PDF 文件。":"Choose at least two PDF files.");
        const {PDFDocument}=pdfLib(),merged=await PDFDocument.create();
        for(const file of selectedFiles){const src=await PDFDocument.load(await file.arrayBuffer());const pages=await merged.copyPages(src,src.getPageIndices());pages.forEach(p=>merged.addPage(p));}
        const bytes=await merged.save();html=outputPanel(new Blob([bytes],{type:"application/pdf"}),"merged.pdf","application/pdf",false);
      } else if(action==="pdf-split"){
        const {PDFDocument}=pdfLib(),src=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),indices=parsePageRange($("#pageRange").value,src.getPageCount()),links=[];
        for(const idx of indices){const one=await PDFDocument.create();const [page]=await one.copyPages(src,[idx]);one.addPage(page);const bytes=await one.save();const url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"}));activeResults.push(url);links.push(`<a class="secondary-button" style="text-decoration:none" href="${url}" download="${esc(selectedFiles[0].name.replace(/\.pdf$/i,""))}_page_${idx+1}.pdf">Page ${idx+1}</a>`);}
        html=`<div class="result-panel"><h3>✓ ${t("resultFiles")}</h3><p>${indices.length} ${t("filesCount")}</p><div class="result-actions">${links.join("")}</div></div>`;
      } else if(action==="pdf-rotate"){
        const {PDFDocument,degrees}=pdfLib(),doc=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),deg=Number($("#rotateDegrees").value);
        doc.getPages().forEach(page=>page.setRotation(degrees((page.getRotation().angle+deg)%360)));
        const bytes=await doc.save();html=outputPanel(new Blob([bytes],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_rotated.pdf","application/pdf",false);
      } else if(action==="pdf-text"){
        const pdfjs=pdfJs(),doc=await pdfjs.getDocument({data:await selectedFiles[0].arrayBuffer()}).promise,parts=[];
        for(let p=1;p<=doc.numPages;p++){const page=await doc.getPage(p),content=await page.getTextContent();parts.push(`--- Page ${p} ---\n`+content.items.map(i=>i.str).join(" "));}
        html=outputPanel(parts.join("\n\n"),selectedFiles[0].name.replace(/\.pdf$/i,"")+".txt");
      } else if(action==="xlsx-csv"||action==="xlsx-json"){
        if(!window.XLSX)throw new Error(lang==="zh"?"Excel 解析库未加载，请检查网络并刷新页面。":"Spreadsheet library did not load; check your connection and refresh.");
        const wb=window.XLSX.read(await selectedFiles[0].arrayBuffer(),{type:"array"}),name=wb.SheetNames[0];
        if(!name)throw new Error(lang==="zh"?"工作簿中没有工作表。":"No worksheets found.");
        const sheet=wb.Sheets[name];
        if(action==="xlsx-csv")html=outputPanel(window.XLSX.utils.sheet_to_csv(sheet),selectedFiles[0].name.replace(/\.(xlsx|xls)$/i,"")+".csv","text/csv;charset=utf-8");
        else html=outputPanel(JSON.stringify(window.XLSX.utils.sheet_to_json(sheet,{defval:""}),null,2),selectedFiles[0].name.replace(/\.(xlsx|xls)$/i,"")+".json","application/json;charset=utf-8");
      } else if(action==="pdf-watermark"){
        const {PDFDocument,rgb,degrees}=pdfLib(),doc=await PDFDocument.load(await selectedFiles[0].arrayBuffer());
        const label=( $("#watermarkText").value || "CONFIDENTIAL").slice(0,100),size=Math.max(8,Math.min(100,Number($("#watermarkSize").value)||42)),opacity=Math.max(0.05,Math.min(0.8,Number($("#watermarkOpacity").value)||0.25));
        doc.getPages().forEach(page=>{const {width,height}=page.getSize(),textWidth=label.length*size*0.58;page.drawText(label,{x:Math.max(8,(width-textWidth)/2),y:height/2,size,color:rgb(0.55,0.12,0.12),opacity,rotate:degrees(-35)});});
        html=outputPanel(new Blob([await doc.save()],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_watermarked.pdf","application/pdf",false);
      } else if(action==="pdf-page-numbers"){
        const {PDFDocument,StandardFonts,rgb}=pdfLib(),doc=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),font=await doc.embedFont(StandardFonts.Helvetica);
        doc.getPages().forEach((page,i)=>{const {width}=page.getSize(),label=String(i+1);page.drawText(label,{x:(width-font.widthOfTextAtSize(label,10))/2,y:18,size:10,font,color:rgb(0.25,0.25,0.25)});});
        html=outputPanel(new Blob([await doc.save()],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_numbered.pdf","application/pdf",false);
      } else if(action==="text-replace"){
        const source=await readText(selectedFiles[0]),find=$("#findValue").value;if(!find)throw new Error(lang==="zh"?"请填写要查找的内容。":"Enter the text to find.");
        const result=source.split(find).join($("#replaceValue").value);html=outputPanel(result,selectedFiles[0].name.replace(/\.[^.]+$/i,"")+"_replaced"+(selectedFiles[0].name.match(/\.[^.]+$/)?.[0]||".txt"));
      }
       else if(action==="pdf-extract-pages"){
        const {PDFDocument}=pdfLib(),src=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),indices=parsePageRange($("#pageRange").value,src.getPageCount()),dest=await PDFDocument.create();
        const pages=await dest.copyPages(src,indices);pages.forEach(p=>dest.addPage(p));
        html=outputPanel(new Blob([await dest.save()],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_extracted.pdf","application/pdf",false);
      } else if(action==="pdf-delete-pages"){
        const {PDFDocument}=pdfLib(),doc=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),indices=parsePageRange($("#pageRange").value,doc.getPageCount());
        if(indices.length>=doc.getPageCount())throw new Error(lang==="zh"?"不能删除全部页面。":"You cannot delete every page.");
        indices.sort((a,b)=>b-a).forEach(i=>doc.removePage(i));
        html=outputPanel(new Blob([await doc.save()],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_pages_removed.pdf","application/pdf",false);
      } else if(action==="pdf-reorder-pages"){
        const {PDFDocument}=pdfLib(),src=await PDFDocument.load(await selectedFiles[0].arrayBuffer()),orderText=$("#pageOrder").value.trim(),nums=orderText.split(",").map(x=>Number(x.trim()));
        if(!orderText||nums.length!==src.getPageCount()||nums.some(n=>!Number.isInteger(n)||n<1||n>src.getPageCount())||new Set(nums).size!==nums.length)throw new Error(lang==="zh"?`请按顺序输入所有页码一次，例如 3,1,2。此文件共 ${src.getPageCount()} 页。`:`Enter every page number exactly once, e.g. 3,1,2. This file has ${src.getPageCount()} pages.`);
        const dest=await PDFDocument.create(),pages=await dest.copyPages(src,nums.map(n=>n-1));pages.forEach(p=>dest.addPage(p));
        html=outputPanel(new Blob([await dest.save()],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_reordered.pdf","application/pdf",false);
      } else if(action==="excel-duplicates"){
        if(!window.XLSX)throw new Error(lang==="zh"?"Excel 解析库未加载，请检查网络后刷新。":"Spreadsheet library did not load. Check the internet connection and refresh.");
        const wb=window.XLSX.read(await selectedFiles[0].arrayBuffer(),{type:"array"}),sn=wb.SheetNames[0];if(!sn)throw new Error(lang==="zh"?"工作簿中没有工作表。":"No worksheet found.");
        const rows=window.XLSX.utils.sheet_to_json(wb.Sheets[sn],{header:1,defval:""}),seen=new Map(),duplicates=[];
        rows.forEach((row,i)=>{const key=JSON.stringify(row);if(seen.has(key))duplicates.push({firstRow:seen.get(key),duplicateRow:i+1,data:row});else seen.set(key,i+1);});
        html=outputPanel(JSON.stringify({worksheet:sn,rowsChecked:rows.length,duplicateCount:duplicates.length,duplicates},null,2),selectedFiles[0].name.replace(/\.(xlsx|xls)$/i,"")+"_duplicates.json","application/json;charset=utf-8");
      } else if(action==="ppt-text"){
        if(!window.JSZip)throw new Error(lang==="zh"?"PPTX 解析库未加载，请检查网络后刷新。":"PPTX library did not load; check your connection and refresh.");
        const zip=await window.JSZip.loadAsync(await selectedFiles[0].arrayBuffer());
        const names=Object.keys(zip.files).filter(n=>/^ppt\/slides\/slide\d+\.xml$/i.test(n)).sort((a,b)=>Number(a.match(/slide(\d+)/i)[1])-Number(b.match(/slide(\d+)/i)[1]));
        if(!names.length)throw new Error(lang==="zh"?"文件中没有可读取的幻灯片。":"No readable slides found.");
        const parts=[];for(let i=0;i<names.length;i++){const xml=await zip.file(names[i]).async("text"),doc=new DOMParser().parseFromString(xml,"application/xml"),texts=[...doc.getElementsByTagNameNS("*","t")].map(n=>n.textContent).filter(Boolean);parts.push(`--- Slide ${i+1} ---\n${texts.join(" ")}`);}
        html=outputPanel(parts.join("\n\n"),selectedFiles[0].name.replace(/\.pptx$/i,"")+"_text.txt");
      } else if(action==="pdf-compress"){
        const {PDFDocument}=pdfLib(),doc=await PDFDocument.load(await selectedFiles[0].arrayBuffer());
        const bytes=await doc.save({useObjectStreams:true,objectsPerTick:50});
        const before=selectedFiles[0].size,after=bytes.length,delta=before?((before-after)/before*100):0;
        html=outputPanel(new Blob([bytes],{type:"application/pdf"}),selectedFiles[0].name.replace(/\.pdf$/i,"")+"_optimised.pdf","application/pdf",false).replace(t("downloadReady"),`${t("downloadReady")} ${lang==="zh"?`原文件 ${(before/1024).toFixed(1)} KB；新文件 ${(after/1024).toFixed(1)} KB；体积变化 ${delta.toFixed(1)}%。`:`Original ${(before/1024).toFixed(1)} KB; output ${(after/1024).toFixed(1)} KB; size change ${delta.toFixed(1)}%.`}`);
      } else if(action==="doc-merge"){
        if(!window.JSZip)throw new Error(lang==="zh"?"DOCX 解析库未加载，请检查网络后刷新。":"DOCX library did not load; check your connection and refresh.");
        if(selectedFiles.length<2)throw new Error(lang==="zh"?"请至少选择两个 DOCX 文件。":"Choose at least two DOCX files.");
        const zips=[];for(const file of selectedFiles)zips.push(await window.JSZip.loadAsync(await file.arrayBuffer()));
        const base=zips[0],baseXml=await base.file("word/document.xml").async("text"),parser=new DOMParser(),baseDoc=parser.parseFromString(baseXml,"application/xml"),body=baseDoc.getElementsByTagNameNS("*","body")[0];
        if(!body)throw new Error("Invalid DOCX document.xml");
        for(let i=1;i<zips.length;i++){const xml=await zips[i].file("word/document.xml").async("text"),doc=parser.parseFromString(xml,"application/xml"),srcBody=doc.getElementsByTagNameNS("*","body")[0];if(!srcBody)continue;[...srcBody.childNodes].forEach(node=>{if(node.nodeType===1&&!/sectPr$/i.test(node.localName||node.nodeName))body.appendChild(baseDoc.importNode(node,true));});}
        const serial=new XMLSerializer().serializeToString(baseDoc);base.file("word/document.xml",serial);
        const blob=await base.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
        html=outputPanel(blob,"merged.docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document",false);
      } else if(action==="text-statistics"){
        const text=selectedFiles[0]?await readText(selectedFiles[0]):($("#textInput").value||"");
        if(!text.trim())throw new Error(t("emptyText"));
        const words=(text.match(/[\p{L}\p{N}_]+(?:['’.-][\p{L}\p{N}_]+)*/gu)||[]).length,chars=[...text].length,noSpace=[...text.replace(/\s/g,"")].length,lines=text.length?text.split(/\r\n|\n|\r/).length:0;
        const report=`${t("textStatsResult")}\n${t("wordCountLabel")}: ${words}\n${t("charCountLabel")}: ${chars}\n${t("charNoSpaceLabel")}: ${noSpace}\n${t("lineCountLabel")}: ${lines}`;
        html=outputPanel(report,"text_statistics.txt");
      }
      setOutput(html);
    }catch(err){out.innerHTML=`<div class="error-text">${esc(err.message||t("error"))}</div>`;console.error(err);}
  }

  function bindEvents(){
    $$(".nav-item[data-view]").forEach(btn=>btn.addEventListener("click",()=>btn.dataset.view==="home"?setView("home"):openListing("all")));
    $$("[data-category]").forEach(btn=>btn.addEventListener("click",()=>openListing(btn.dataset.category)));
    $$("[data-view='all-tools']").forEach(btn=>btn.addEventListener("click",()=>openListing("all")));
    $("#homeBrand").addEventListener("click",e=>{e.preventDefault();setView("home");});
    $("#languageToggle").addEventListener("click",()=>setLanguage(lang==="en"?"zh":"en"));
    $("#heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter")openListing("all",e.target.value);});
    $("#listingSearch").addEventListener("input",e=>renderListing(e.target.value));
    $("#filterPills").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;currentCategory=b.dataset.filter;$("#listingTitle").textContent=currentCategory==="all"?t("allTools"):catName(currentCategory);renderListing($("#listingSearch").value);});
    document.body.addEventListener("click",e=>{const cat=e.target.closest("[data-open-category]");if(cat){openListing(cat.dataset.openCategory);return;}const card=e.target.closest("[data-tool-id]");if(card&&!card.disabled)openTool(card.dataset.toolId);});
    $("#backToTools").addEventListener("click",()=>openListing(currentTool?.category||"all"));
    $("#modalClose").addEventListener("click",closeModal);$("#modalOkay").addEventListener("click",closeModal);
    $("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal();});
    $("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
    document.addEventListener("dragover",e=>{if(currentView==="tool"&&e.dataTransfer?.types?.includes("Files"))e.preventDefault();});
    document.addEventListener("drop",e=>{if(currentView==="tool"&&e.dataTransfer?.types?.includes("Files"))e.preventDefault();});
    $("#year").textContent=new Date().getFullYear();
  }

  // Initialise. Keep translated text in markup as the default English state.
  bindEvents();renderCategories();renderFeatured();setView("home");
})();
