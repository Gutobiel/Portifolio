// src/widget/styles.ts
function getStyles(theme, size) {
  const t = {
    background: (theme == null ? void 0 : theme.background) || "#0a0a0f",
    text: (theme == null ? void 0 : theme.text) || "#a0a0a8",
    accent: (theme == null ? void 0 : theme.accent) || "#e8e8ea",
    badge: (theme == null ? void 0 : theme.badge) || "#4ADE80"
  };
  return `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

    .aeo-toggle {
      position: fixed;
      z-index: 2147483647;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      animation: aeo-fade-in 0.3s ease;
    }

    .aeo-toggle.aeo-bottom-right {
      bottom: 20px;
      right: 20px;
    }

    .aeo-toggle.aeo-bottom-left {
      bottom: 20px;
      left: 20px;
    }

    .aeo-toggle.aeo-top-right {
      top: 20px;
      right: 20px;
    }

    .aeo-toggle.aeo-top-left {
      top: 20px;
      left: 20px;
    }

    .aeo-toggle-inner {
      display: flex;
      background: ${t.background};
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 4px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .aeo-toggle-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: none;
      background: transparent;
      color: ${t.text};
      cursor: pointer;
      border-radius: 20px;
      transition: all 0.2s ease;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
    }

    .aeo-toggle-btn svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .aeo-toggle-btn:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .aeo-toggle-btn.aeo-active {
      background: ${t.accent};
      color: ${t.background};
    }

    /* Full-screen overlay */
    .aeo-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      z-index: 2147483646;
      display: flex;
      flex-direction: column;
      animation: aeo-fade-in 0.2s ease;
      font-family: 'JetBrains Mono', monospace;
      isolation: isolate;
    }

    /* Top bar */
    .aeo-topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.02);
      flex-shrink: 0;
    }

    .aeo-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(74, 222, 128, 0.1);
      color: ${t.badge};
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border: 1px solid rgba(74, 222, 128, 0.2);
    }

    .aeo-badge-dot {
      width: 6px;
      height: 6px;
      background: ${t.badge};
      border-radius: 50%;
      flex-shrink: 0;
    }

    .aeo-route-tab {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      background: rgba(255, 255, 255, 0.05);
      color: ${t.accent};
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .aeo-topbar-spacer {
      flex: 1;
    }

    .aeo-topbar-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .aeo-topbar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: transparent;
      color: ${t.text};
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .aeo-topbar-btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.05);
      color: ${t.accent};
      border-color: rgba(255, 255, 255, 0.2);
    }

    .aeo-topbar-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .aeo-topbar-btn svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }

    .aeo-close-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: transparent;
      color: ${t.text};
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .aeo-close-btn:hover {
      background: rgba(255, 60, 60, 0.1);
      color: #ff6b6b;
      border-color: rgba(255, 60, 60, 0.3);
    }

    .aeo-close-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
    }

    /* View tabs */
    .aeo-view-tabs {
      display: flex;
      gap: 2px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 2px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .aeo-view-tab {
      padding: 5px 12px;
      background: transparent;
      color: ${t.text};
      border: none;
      border-radius: 6px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .aeo-view-tab:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .aeo-view-tab.aeo-view-active {
      background: rgba(255, 255, 255, 0.1);
      color: ${t.accent};
    }

    /* Metadata bar */
    .aeo-meta-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      padding: 12px 16px;
      margin-bottom: 24px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      font-size: 12px;
      color: ${t.text};
    }

    .aeo-meta-label {
      color: rgba(160, 160, 168, 0.5);
      margin-right: 4px;
    }

    .aeo-meta-sep {
      width: 1px;
      height: 14px;
      background: rgba(255, 255, 255, 0.1);
    }

    /* Rendered markdown view */
    .aeo-rendered {
      color: ${t.text};
      line-height: 1.75;
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .aeo-rendered .aeo-r-h1 {
      font-size: 28px;
      font-weight: 700;
      color: ${t.accent};
      margin: 0 0 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      line-height: 1.3;
    }

    .aeo-rendered .aeo-r-h2 {
      font-size: 22px;
      font-weight: 600;
      color: ${t.accent};
      margin: 32px 0 12px;
      line-height: 1.3;
    }

    .aeo-rendered .aeo-r-h3 {
      font-size: 18px;
      font-weight: 600;
      color: ${t.accent};
      margin: 24px 0 8px;
      line-height: 1.4;
    }

    .aeo-rendered .aeo-r-h4,
    .aeo-rendered .aeo-r-h5,
    .aeo-rendered .aeo-r-h6 {
      font-size: 15px;
      font-weight: 600;
      color: ${t.accent};
      margin: 20px 0 8px;
    }

    .aeo-rendered .aeo-r-p {
      margin: 0 0 12px;
    }

    .aeo-rendered .aeo-r-list {
      margin: 0 0 16px;
      padding-left: 24px;
    }

    .aeo-rendered .aeo-r-list li {
      margin: 4px 0;
    }

    .aeo-rendered .aeo-r-quote {
      margin: 16px 0;
      padding: 12px 20px;
      border-left: 3px solid ${t.badge};
      background: rgba(255, 255, 255, 0.02);
      color: ${t.text};
      font-style: italic;
    }

    .aeo-rendered .aeo-r-hr {
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin: 24px 0;
    }

    .aeo-rendered .aeo-r-code {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 16px;
      margin: 16px 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      overflow-x: auto;
      color: ${t.badge};
    }

    .aeo-rendered .aeo-r-inline-code {
      background: rgba(255, 255, 255, 0.06);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9em;
      color: ${t.badge};
    }

    .aeo-rendered .aeo-r-link {
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      transition: border-color 0.15s ease;
    }

    .aeo-rendered .aeo-r-link:hover {
      border-color: #fff;
    }

    .aeo-rendered strong {
      color: ${t.accent};
      font-weight: 600;
    }

    .aeo-rendered em {
      font-style: italic;
      opacity: 0.9;
    }

    /* Content area */
    .aeo-content-area {
      flex: 1;
      overflow-y: auto;
      padding: 40px 24px;
    }

    .aeo-content-wrapper {
      max-width: 800px;
      margin: 0 auto;
    }

    .aeo-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 80px 24px;
      color: ${t.text};
    }

    .aeo-loading svg {
      width: 24px;
      height: 24px;
      fill: ${t.text};
      animation: aeo-spin 1s linear infinite;
    }

    .aeo-loading span {
      font-size: 13px;
      opacity: 0.6;
    }

    /* Markdown source display */
    .aeo-markdown-source {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.7;
      color: ${t.text};
      background: transparent;
      margin: 0;
      padding: 0;
      border: none;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-x: auto;
    }

    .aeo-markdown-source code {
      font-family: inherit;
      background: transparent;
    }

    .aeo-markdown-source .hl-fm {
      color: rgba(160, 160, 168, 0.5);
    }

    .aeo-markdown-source .hl-heading {
      color: ${t.accent};
      font-weight: 600;
    }

    .aeo-markdown-source .hl-bold {
      color: ${t.accent};
      font-weight: 600;
    }

    .aeo-markdown-source .hl-italic {
      font-style: italic;
      color: ${t.accent};
      opacity: 0.85;
    }

    .aeo-markdown-source .hl-code {
      color: ${t.badge};
    }

    .aeo-markdown-source .hl-link {
      color: rgba(160, 160, 168, 0.6);
    }

    .aeo-markdown-source .hl-link-text {
      color: #fff;
    }

    .aeo-markdown-source .hl-link-url {
      color: rgba(160, 160, 168, 0.4);
    }

    .aeo-markdown-source .hl-quote {
      color: ${t.text};
      opacity: 0.7;
      font-style: italic;
    }

    .aeo-markdown-source .hl-hr {
      color: rgba(160, 160, 168, 0.3);
    }

    .aeo-error {
      text-align: center;
      padding: 80px 24px;
      color: ${t.text};
    }

    .aeo-error p {
      margin: 0 0 16px;
      font-size: 14px;
    }

    .aeo-attribution {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: rgba(160, 160, 168, 0.5);
      font-size: 11px;
      text-decoration: none;
      transition: color 0.15s ease;
    }

    .aeo-attribution:hover {
      color: ${t.accent};
    }

    .aeo-error a {
      color: #fff;
      text-decoration: none;
      padding: 8px 16px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      display: inline-block;
      margin: 4px;
      font-size: 13px;
      transition: all 0.15s ease;
    }

    .aeo-error a:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.25);
    }

    .aeo-toast {
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: ${t.background};
      color: ${t.accent};
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      opacity: 0;
      transition: all 0.3s ease;
      z-index: 2147483647;
    }

    .aeo-toast.aeo-toast-show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    @keyframes aeo-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes aeo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @media (max-width: 640px) {
      .aeo-toggle {
        bottom: 12px !important;
        right: 12px !important;
        left: auto !important;
        top: auto !important;
      }

      .aeo-toggle-btn {
        padding: 6px 12px;
        font-size: 13px;
      }

      .aeo-toggle-btn span {
        display: none;
      }

      .aeo-topbar {
        padding: 10px 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .aeo-topbar-btn span {
        display: none;
      }

      .aeo-close-btn span {
        display: none;
      }

      .aeo-view-tabs {
        order: 10;
        width: 100%;
        justify-content: center;
      }

      .aeo-meta-bar {
        font-size: 11px;
        gap: 8px;
      }

      .aeo-content-area {
        padding: 24px 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .aeo-toggle,
      .aeo-overlay,
      .aeo-toast {
        animation: none;
        transition: none;
      }
    }

    /* Small size variant */
    .aeo-toggle.aeo-small {
      font-size: 11px;
    }

    .aeo-toggle.aeo-small .aeo-toggle-inner {
      border-radius: 18px;
      padding: 3px;
    }

    .aeo-toggle.aeo-small .aeo-toggle-btn {
      gap: 5px;
      padding: 5px 10px;
      font-size: 11px;
      border-radius: 15px;
    }

    .aeo-toggle.aeo-small .aeo-toggle-btn svg {
      width: 12px;
      height: 12px;
    }

    /* Icon-only variant */
    .aeo-toggle.aeo-icon-only .aeo-toggle-inner {
      border-radius: 18px;
      padding: 3px;
    }

    .aeo-toggle.aeo-icon-only .aeo-toggle-btn {
      padding: 6px;
      border-radius: 15px;
      gap: 0;
    }

    .aeo-toggle.aeo-icon-only .aeo-toggle-btn span {
      display: none;
    }

    .aeo-toggle.aeo-icon-only .aeo-toggle-btn svg {
      width: 14px;
      height: 14px;
    }
  `.trim();
}

// src/widget/icons.ts
function getIcons() {
  return {
    human: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM10 7C10 7 8 7 8 9V13C8 13 8 14 9 14H10V21C10 21 10 22 11 22H13C13 22 14 22 14 21V14H15C15 14 16 14 16 13V9C16 7 14 7 14 7H10Z" fill="currentColor"/>
    </svg>`,
    ai: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2a1 1 0 0 1 2 0v2h3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3V2ZM9.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
      <rect x="6" y="17" width="12" height="5" rx="2"/>
      <rect x="1" y="8" width="3" height="4" rx="1.5"/>
      <rect x="20" y="8" width="3" height="4" rx="1.5"/>
    </svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
    </svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" fill="currentColor"/>
    </svg>`,
    spinner: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  };
}

// src/widget/extract.ts
function extractDOMToMarkdown() {
  const lines = [];
  const processed = /* @__PURE__ */ new WeakSet();
  const title = document.title;
  if (title) {
    lines.push(`# ${title}`, "");
  }
  const description = document.querySelector('meta[name="description"]');
  if (description == null ? void 0 : description.content) {
    lines.push(`> ${description.content}`, "");
  }
  const mainContent = findMainContent();
  if (mainContent) {
    processNode(mainContent, lines, processed);
  } else {
    processNode(document.body, lines, processed);
  }
  return lines.join("\n").trim();
}
function findMainContent() {
  const selectors = [
    "main",
    '[role="main"]',
    "article",
    ".content",
    ".main-content",
    "#content",
    "#main-content",
    ".container",
    ".wrapper"
  ];
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) return element;
  }
  return null;
}
function processNode(node, lines, processed) {
  var _a, _b, _c, _d;
  if (processed.has(node)) return;
  processed.add(node);
  if (node instanceof HTMLElement) {
    const tagName = node.tagName.toLowerCase();
    const skipTags = ["script", "style", "noscript", "iframe", "svg", "canvas", "video", "audio"];
    if (skipTags.includes(tagName)) return;
    const style = window.getComputedStyle(node);
    if (style.display === "none" || style.visibility === "hidden") return;
    if (tagName === "nav" || tagName === "footer" || node.classList.contains("nav") || node.classList.contains("footer")) {
      if (!hasImportantContent(node)) return;
    }
    if (node.classList.contains("aeo-toggle") || node.classList.contains("aeo-overlay")) return;
  }
  if (node instanceof HTMLElement) {
    const tagName = node.tagName.toLowerCase();
    switch (tagName) {
      case "h1":
        lines.push("", `# ${getTextContent(node)}`, "");
        break;
      case "h2":
        lines.push("", `## ${getTextContent(node)}`, "");
        break;
      case "h3":
        lines.push("", `### ${getTextContent(node)}`, "");
        break;
      case "h4":
        lines.push("", `#### ${getTextContent(node)}`, "");
        break;
      case "h5":
        lines.push("", `##### ${getTextContent(node)}`, "");
        break;
      case "h6":
        lines.push("", `###### ${getTextContent(node)}`, "");
        break;
      case "p":
        const text = getTextContent(node);
        if (text) lines.push("", text, "");
        break;
      case "blockquote":
        const quoteText = getTextContent(node);
        if (quoteText) {
          lines.push("", ...quoteText.split("\n").map((line) => `> ${line}`), "");
        }
        break;
      case "pre":
        const codeElement = node.querySelector("code");
        if (codeElement) {
          const lang = extractLanguage(codeElement);
          lines.push("", `\`\`\`${lang}`, getTextContent(codeElement), "```", "");
        } else {
          lines.push("", "```", getTextContent(node), "```", "");
        }
        break;
      case "code":
        if (((_a = node.parentElement) == null ? void 0 : _a.tagName.toLowerCase()) !== "pre") {
          const codeText = getTextContent(node);
          if (codeText && !((_b = lines[lines.length - 1]) == null ? void 0 : _b.includes(codeText))) {
            lines[lines.length - 1] = (lines[lines.length - 1] || "") + ` \`${codeText}\` `;
          }
        }
        break;
      case "ul":
      case "ol":
        processListItems(node, lines, processed, tagName === "ol");
        lines.push("");
        break;
      case "a":
        const href = node.href;
        const linkText = getTextContent(node);
        if (linkText && href && !href.startsWith("javascript:")) {
          const markdown = `[${linkText}](${href})`;
          if (!((_c = lines[lines.length - 1]) == null ? void 0 : _c.includes(markdown))) {
            lines[lines.length - 1] = (lines[lines.length - 1] || "") + " " + markdown + " ";
          }
        } else {
          processChildren(node, lines, processed);
        }
        break;
      case "img":
        const img = node;
        if (img.src && img.alt) {
          lines.push("", `![${img.alt}](${img.src})`, "");
        }
        break;
      case "table":
        processTable(node, lines);
        lines.push("");
        break;
      case "strong":
      case "b":
        const boldText = getTextContent(node);
        if (boldText) {
          lines[lines.length - 1] = (lines[lines.length - 1] || "") + ` **${boldText}** `;
        }
        break;
      case "em":
      case "i":
        const italicText = getTextContent(node);
        if (italicText) {
          lines[lines.length - 1] = (lines[lines.length - 1] || "") + ` *${italicText}* `;
        }
        break;
      case "hr":
        lines.push("", "---", "");
        break;
      default:
        processChildren(node, lines, processed);
    }
  } else if (node.nodeType === Node.TEXT_NODE) {
    const text = (_d = node.textContent) == null ? void 0 : _d.trim();
    if (text && !isWhitespaceOnly(text)) {
      if (lines.length === 0 || lines[lines.length - 1] === "") {
        lines.push(text);
      } else {
        lines[lines.length - 1] += " " + text;
      }
    }
  } else {
    processChildren(node, lines, processed);
  }
}
function processChildren(node, lines, processed) {
  for (const child of Array.from(node.childNodes)) {
    processNode(child, lines, processed);
  }
}
function processListItems(list, lines, processed, isOrdered) {
  const items = Array.from(list.querySelectorAll(":scope > li"));
  items.forEach((item, index) => {
    const prefix = isOrdered ? `${index + 1}. ` : "- ";
    const text = getTextContent(item);
    if (text) {
      lines.push(prefix + text);
    }
    processed.add(item);
  });
}
function processTable(table, lines) {
  const rows = Array.from(table.querySelectorAll("tr"));
  if (rows.length === 0) return;
  const headers = Array.from(rows[0].querySelectorAll("th, td")).map((cell) => getTextContent(cell));
  if (headers.length > 0) {
    lines.push("", "| " + headers.join(" | ") + " |");
    lines.push("|" + headers.map(() => " --- ").join("|") + "|");
    for (let i = 1; i < rows.length; i++) {
      const cells = Array.from(rows[i].querySelectorAll("td")).map((cell) => getTextContent(cell));
      if (cells.length > 0) {
        lines.push("| " + cells.join(" | ") + " |");
      }
    }
  }
}
function getTextContent(node) {
  var _a, _b;
  if (node instanceof HTMLElement) {
    return ((_a = node.innerText) == null ? void 0 : _a.trim().replace(/\s+/g, " ")) || "";
  }
  return ((_b = node.textContent) == null ? void 0 : _b.trim().replace(/\s+/g, " ")) || "";
}
function isWhitespaceOnly(text) {
  return /^\s*$/.test(text);
}
function hasImportantContent(node) {
  var _a;
  const importantKeywords = ["documentation", "docs", "api", "guide", "tutorial", "reference"];
  const text = ((_a = node.textContent) == null ? void 0 : _a.toLowerCase()) || "";
  return importantKeywords.some((keyword) => text.includes(keyword));
}
function extractLanguage(codeElement) {
  const classes = Array.from(codeElement.classList);
  for (const cls of classes) {
    if (cls.startsWith("language-")) {
      return cls.replace("language-", "");
    }
    if (cls.startsWith("lang-")) {
      return cls.replace("lang-", "");
    }
  }
  const pre = codeElement.closest("pre");
  if (pre) {
    const preClasses = Array.from(pre.classList);
    for (const cls of preClasses) {
      if (cls.startsWith("language-")) {
        return cls.replace("language-", "");
      }
      if (cls.startsWith("lang-")) {
        return cls.replace("lang-", "");
      }
    }
  }
  return "";
}

// src/widget/core.ts
var AeoWidget = class {
  constructor(options = {}) {
    this.isAIMode = false;
    this.isLoading = false;
    var _a;
    this.config = this.resolveConfig(options.config);
    this.container = options.container || document.body;
    if (((_a = this.config.widget) == null ? void 0 : _a.enabled) !== false) {
      this.init();
    }
  }
  resolveConfig(config) {
    const defaultConfig = {
      title: document.title || "Website",
      description: "",
      url: window.location.origin,
      contentDir: "docs",
      outDir: "dist",
      generators: {
        robotsTxt: true,
        llmsTxt: true,
        llmsFullTxt: true,
        rawMarkdown: true,
        manifest: true,
        sitemap: true,
        aiIndex: true
      },
      widget: {
        enabled: true,
        position: "bottom-right",
        theme: {
          background: "#0a0a0f",
          text: "#a0a0a8",
          accent: "#e8e8ea",
          badge: "#4ADE80"
        },
        humanLabel: "Human",
        aiLabel: "AI",
        showBadge: true
      }
    };
    return { ...defaultConfig, ...config };
  }
  init() {
    this.injectStyles();
    this.createToggle();
    this.bindEvents();
  }
  injectStyles() {
    var _a, _b;
    if (this.styleElement) return;
    this.styleElement = document.createElement("style");
    this.styleElement.textContent = getStyles((_a = this.config.widget) == null ? void 0 : _a.theme, (_b = this.config.widget) == null ? void 0 : _b.size);
    document.head.appendChild(this.styleElement);
  }
  createToggle() {
    var _a, _b, _c, _d;
    const position = ((_a = this.config.widget) == null ? void 0 : _a.position) || "bottom-right";
    const size = ((_b = this.config.widget) == null ? void 0 : _b.size) || "default";
    const icons = getIcons();
    this.toggleElement = document.createElement("div");
    const sizeClass = size === "small" ? " aeo-small" : size === "icon-only" ? " aeo-icon-only" : "";
    const humanLabel = ((_c = this.config.widget) == null ? void 0 : _c.humanLabel) || "Human";
    const aiLabel = ((_d = this.config.widget) == null ? void 0 : _d.aiLabel) || "AI";
    this.toggleElement.className = `aeo-toggle aeo-${position}${sizeClass}`;
    this.toggleElement.innerHTML = `
      <div class="aeo-toggle-inner" role="group" aria-label="View mode">
        <button
          class="aeo-toggle-btn aeo-human-btn aeo-active"
          data-mode="human"
          aria-label="${this.escHtml(humanLabel)} mode"
          aria-pressed="true"
        >
          ${icons.human}
          <span>${this.escHtml(humanLabel)}</span>
        </button>
        <button
          class="aeo-toggle-btn aeo-ai-btn"
          data-mode="ai"
          aria-label="${this.escHtml(aiLabel)} mode"
          aria-pressed="false"
        >
          ${icons.ai}
          <span>${this.escHtml(aiLabel)}</span>
        </button>
      </div>
    `;
    this.container.appendChild(this.toggleElement);
  }
  bindEvents() {
    if (!this.toggleElement) return;
    this.toggleElement.addEventListener("click", (e) => {
      const target = e.target;
      const btn = target.closest(".aeo-toggle-btn");
      if (!btn) return;
      const mode = btn.dataset.mode;
      if (mode === "ai" && !this.isAIMode) {
        this.switchToAI();
      } else if (mode === "human" && this.isAIMode) {
        this.switchToHuman();
      }
    });
    this.keydownHandler = (e) => {
      if (e.key === "Escape" && this.overlayElement) {
        this.closeOverlay();
      }
    };
    document.addEventListener("keydown", this.keydownHandler);
  }
  async switchToAI() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.isAIMode = true;
    this.updateToggleState();
    await this.showOverlay();
    this.isLoading = false;
  }
  switchToHuman() {
    this.isAIMode = false;
    this.updateToggleState();
    this.closeOverlay();
  }
  updateToggleState() {
    if (!this.toggleElement) return;
    const humanBtn = this.toggleElement.querySelector(".aeo-human-btn");
    const aiBtn = this.toggleElement.querySelector(".aeo-ai-btn");
    if (this.isAIMode) {
      humanBtn == null ? void 0 : humanBtn.classList.remove("aeo-active");
      aiBtn == null ? void 0 : aiBtn.classList.add("aeo-active");
      humanBtn == null ? void 0 : humanBtn.setAttribute("aria-pressed", "false");
      aiBtn == null ? void 0 : aiBtn.setAttribute("aria-pressed", "true");
    } else {
      humanBtn == null ? void 0 : humanBtn.classList.add("aeo-active");
      aiBtn == null ? void 0 : aiBtn.classList.remove("aeo-active");
      humanBtn == null ? void 0 : humanBtn.setAttribute("aria-pressed", "true");
      aiBtn == null ? void 0 : aiBtn.setAttribute("aria-pressed", "false");
    }
  }
  getMarkdownPath() {
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath.endsWith("/")) {
      return `${currentPath}index.md`;
    }
    return `${currentPath}.md`;
  }
  async showOverlay() {
    var _a;
    const icons = getIcons();
    const mdPath = this.getMarkdownPath();
    this.overlayElement = document.createElement("div");
    this.overlayElement.className = "aeo-overlay";
    this.overlayElement.innerHTML = `
      <div class="aeo-topbar">
        ${((_a = this.config.widget) == null ? void 0 : _a.showBadge) !== false ? '<span class="aeo-badge"><span class="aeo-badge-dot"></span>LLM-READY</span>' : ""}
        <span class="aeo-route-tab">${mdPath}</span>
        <div class="aeo-view-tabs">
          <button class="aeo-view-tab aeo-view-active" data-view="rendered">Rendered</button>
          <button class="aeo-view-tab" data-view="source">Source</button>
        </div>
        <div class="aeo-topbar-spacer"></div>
        <a class="aeo-attribution" href="https://aeojs.org" target="_blank" rel="noopener">by aeo.js</a>
        <div class="aeo-topbar-actions">
          <button class="aeo-topbar-btn aeo-copy-btn" disabled>
            ${icons.copy}
            <span>Copy</span>
          </button>
          <button class="aeo-topbar-btn aeo-download-btn" disabled>
            ${icons.download}
            <span>Download .md</span>
          </button>
          <button class="aeo-close-btn">
            ${icons.close}
            <span>Close</span>
          </button>
        </div>
      </div>
      <div class="aeo-content-area">
        <div class="aeo-content-wrapper">
          <div class="aeo-loading">
            ${icons.spinner}
            <span>Loading AI-optimized content...</span>
          </div>
        </div>
      </div>
    `;
    this.container.appendChild(this.overlayElement);
    const closeBtn = this.overlayElement.querySelector(".aeo-close-btn");
    closeBtn == null ? void 0 : closeBtn.addEventListener("click", () => this.closeOverlay());
    const viewTabs = this.overlayElement.querySelectorAll(".aeo-view-tab");
    viewTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        var _a2, _b;
        viewTabs.forEach((t) => t.classList.remove("aeo-view-active"));
        tab.classList.add("aeo-view-active");
        const view = tab.dataset.view;
        const rendered = (_a2 = this.overlayElement) == null ? void 0 : _a2.querySelector(".aeo-rendered");
        const source = (_b = this.overlayElement) == null ? void 0 : _b.querySelector(".aeo-markdown-source");
        if (rendered && source) {
          rendered.style.display = view === "rendered" ? "block" : "none";
          source.style.display = view === "source" ? "block" : "none";
        }
      });
    });
    await this.loadContent();
  }
  /**
   * Strip YAML frontmatter from markdown content.
   */
  stripFrontmatter(md) {
    const frontmatter = {};
    let body = md;
    if (md.startsWith("---")) {
      const endIndex = md.indexOf("---", 3);
      if (endIndex !== -1) {
        const fmBlock = md.slice(3, endIndex).trim();
        body = md.slice(endIndex + 3).trim();
        for (const line of fmBlock.split("\n")) {
          const colonIdx = line.indexOf(":");
          if (colonIdx > 0) {
            const key = line.slice(0, colonIdx).trim();
            const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
            frontmatter[key] = val;
          }
        }
      }
    }
    return { frontmatter, body };
  }
  /**
   * Convert markdown to simple rendered HTML for the "Rendered" view.
   */
  renderMarkdown(md) {
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const lines = md.split("\n");
    const html = [];
    let inList = false;
    let inCode = false;
    let codeContent = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("```")) {
        if (inCode) {
          html.push(`<pre class="aeo-r-code"><code>${esc(codeContent.join("\n"))}</code></pre>`);
          codeContent = [];
          inCode = false;
        } else {
          if (inList) {
            html.push("</ul>");
            inList = false;
          }
          inCode = true;
        }
        continue;
      }
      if (inCode) {
        codeContent.push(line);
        continue;
      }
      if (!trimmed) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        continue;
      }
      const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)/);
      if (headingMatch) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        const level = headingMatch[1].length;
        html.push(`<h${level} class="aeo-r-h${level}">${this.renderInlineMarkdown(esc(headingMatch[2]))}</h${level}>`);
        continue;
      }
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push('<hr class="aeo-r-hr">');
        continue;
      }
      if (trimmed.startsWith(">")) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<blockquote class="aeo-r-quote">${this.renderInlineMarkdown(esc(trimmed.slice(1).trim()))}</blockquote>`);
        continue;
      }
      const listMatch = trimmed.match(/^[-*+]\s+(.*)/);
      if (listMatch) {
        if (!inList) {
          html.push('<ul class="aeo-r-list">');
          inList = true;
        }
        html.push(`<li>${this.renderInlineMarkdown(esc(listMatch[1]))}</li>`);
        continue;
      }
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<p class="aeo-r-p">${this.renderInlineMarkdown(esc(trimmed))}</p>`);
    }
    if (inList) html.push("</ul>");
    if (inCode) html.push(`<pre class="aeo-r-code"><code>${esc(codeContent.join("\n"))}</code></pre>`);
    return html.join("\n");
  }
  renderInlineMarkdown(text) {
    let out = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
    out = out.replace(/`([^`]+)`/g, '<code class="aeo-r-inline-code">$1</code>');
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="aeo-r-link" href="$2" target="_blank" rel="noopener">$1</a>');
    return out;
  }
  async loadContent() {
    if (!this.overlayElement) return;
    const wrapper = this.overlayElement.querySelector(".aeo-content-wrapper");
    if (!wrapper) return;
    try {
      const mdPath = this.getMarkdownPath();
      const response = await fetch(mdPath);
      let content;
      const contentType = response.headers.get("content-type") || "";
      if (response.ok && !contentType.includes("text/html")) {
        const text = await response.text();
        const trimmed = text.trimStart();
        if (trimmed.startsWith("<!") || trimmed.startsWith("<html") || trimmed.startsWith("<HTML")) {
          content = extractDOMToMarkdown();
        } else {
          content = text;
        }
      } else {
        content = extractDOMToMarkdown();
      }
      const { frontmatter, body } = this.stripFrontmatter(content);
      const metaItems = [];
      if (frontmatter.title) metaItems.push(`<span class="aeo-meta-label">Title:</span> ${this.escHtml(frontmatter.title)}`);
      if (frontmatter.url) metaItems.push(`<span class="aeo-meta-label">URL:</span> <a class="aeo-r-link" href="${this.escHtml(frontmatter.url)}" target="_blank" rel="noopener">${this.escHtml(frontmatter.url)}</a>`);
      const metaBar = metaItems.length > 0 ? `<div class="aeo-meta-bar">${metaItems.join('<span class="aeo-meta-sep"></span>')}</div>` : "";
      wrapper.innerHTML = `
        ${metaBar}
        <div class="aeo-rendered">${this.renderMarkdown(body)}</div>
        <pre class="aeo-markdown-source" style="display:none"><code>${this.highlightMarkdown(content)}</code></pre>
      `;
      const copyBtn = this.overlayElement.querySelector(".aeo-copy-btn");
      const downloadBtn = this.overlayElement.querySelector(".aeo-download-btn");
      if (copyBtn) {
        copyBtn.disabled = false;
        copyBtn.addEventListener("click", () => this.copyToClipboard(content));
      }
      if (downloadBtn) {
        downloadBtn.disabled = false;
        downloadBtn.addEventListener("click", () => this.downloadMarkdown(content));
      }
    } catch {
      wrapper.innerHTML = `
        <div class="aeo-error">
          <p>Unable to load AI-optimized content.</p>
          <p>Try these alternatives:</p>
          <div>
            <a href="/llms.txt" target="_blank">llms.txt</a>
            <a href="/llms-full.txt" target="_blank">llms-full.txt</a>
          </div>
        </div>
      `;
    }
  }
  escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  highlightMarkdown(md) {
    var _a;
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const lines = md.split("\n");
    const out = [];
    let inFrontmatter = false;
    let inCode = false;
    let frontmatterStart = ((_a = lines[0]) == null ? void 0 : _a.trim()) === "---";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (i === 0 && frontmatterStart) {
        inFrontmatter = true;
        out.push(`<span class="hl-fm">${esc(line)}</span>`);
        continue;
      }
      if (inFrontmatter) {
        if (trimmed === "---") {
          inFrontmatter = false;
          out.push(`<span class="hl-fm">${esc(line)}</span>`);
        } else {
          out.push(`<span class="hl-fm">${esc(line)}</span>`);
        }
        continue;
      }
      if (trimmed.startsWith("```")) {
        inCode = !inCode;
        out.push(`<span class="hl-code">${esc(line)}</span>`);
        continue;
      }
      if (inCode) {
        out.push(`<span class="hl-code">${esc(line)}</span>`);
        continue;
      }
      if (/^#{1,6}\s/.test(trimmed)) {
        out.push(`<span class="hl-heading">${esc(line)}</span>`);
        continue;
      }
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
        out.push(`<span class="hl-hr">${esc(line)}</span>`);
        continue;
      }
      if (trimmed.startsWith(">")) {
        out.push(`<span class="hl-quote">${esc(line)}</span>`);
        continue;
      }
      if (/^[-*+]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
        out.push(this.highlightInline(esc(line)));
        continue;
      }
      out.push(this.highlightInline(esc(line)));
    }
    return out.join("\n");
  }
  highlightInline(escaped) {
    let text = escaped.replace(/\*\*(.+?)\*\*/g, '<span class="hl-bold">**$1**</span>');
    text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<span class="hl-italic">*$1*</span>');
    text = text.replace(/`([^`]+)`/g, '<span class="hl-code">`$1`</span>');
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="hl-link">[<span class="hl-link-text">$1</span>](<span class="hl-link-url">$2</span>)</span>');
    return text;
  }
  closeOverlay() {
    if (this.overlayElement) {
      this.overlayElement.remove();
      this.overlayElement = void 0;
    }
    this.isAIMode = false;
    this.isLoading = false;
    this.updateToggleState();
  }
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToast("Copied to clipboard!");
    } catch {
      this.showToast("Failed to copy");
    }
  }
  downloadMarkdown(content) {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${this.sanitizeFilename(document.title)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  sanitizeFilename(name) {
    return name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  }
  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "aeo-toast";
    toast.textContent = message;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("aeo-toast-show");
    }, 10);
    setTimeout(() => {
      toast.classList.remove("aeo-toast-show");
      setTimeout(() => toast.remove(), 300);
    }, 2e3);
  }
  destroy() {
    var _a, _b, _c;
    if (this.keydownHandler) {
      document.removeEventListener("keydown", this.keydownHandler);
      this.keydownHandler = void 0;
    }
    (_a = this.toggleElement) == null ? void 0 : _a.remove();
    (_b = this.overlayElement) == null ? void 0 : _b.remove();
    (_c = this.styleElement) == null ? void 0 : _c.remove();
  }
};
function createAeoWidget(options) {
  return new AeoWidget(options);
}

export { AeoWidget, createAeoWidget };
//# sourceMappingURL=widget.mjs.map
//# sourceMappingURL=widget.mjs.map