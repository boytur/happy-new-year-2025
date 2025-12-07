#!/usr/bin/env node
const http = require("http");

// ANSI Color codes with better gradient support
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  black: '\x1b[30m',

  // Foreground colors
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  // Bright colors
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',

  // Background colors
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
};

// Detect terminal emoji support
const supportsEmoji = process.platform !== 'win32' || process.env.WT_SESSION || process.env.TERM_PROGRAM === 'vscode';

// Emoji with fallback
const emoji = {
  star: supportsEmoji ? '⭐' : '*',
  tree: supportsEmoji ? '🎄' : '^',
  sparkle: supportsEmoji ? '✨' : '*',
  gift: supportsEmoji ? '🎁' : '[=]',
  firework: supportsEmoji ? '🎆' : '*',
  party: supportsEmoji ? '🎉' : '!',
  snowflake: supportsEmoji ? '❄️' : '*',
};

// Beautiful header with gradient effect
const createHeader = () => {
  const c = colors;
  return `
${c.bright}${c.cyan}╔═══════════════════════════════════════════════════════════════════════════════╗${c.reset}
${c.bright}${c.cyan}║${c.reset}                                                                               ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}     ${c.brightYellow}${emoji.sparkle}${c.reset}  ${c.brightRed}H A P P Y   N E W   Y E A R   2 0 2 6${c.reset}  ${c.brightYellow}${emoji.sparkle}${c.reset}     ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}                                                                               ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}╚═══════════════════════════════════════════════════════════════════════════════╝${c.reset}
`;
};

// Enhanced Christmas tree with better design
const createChristmasTree = () => {
  const c = colors;
  const lights = [c.brightRed, c.brightYellow, c.brightGreen, c.brightCyan, c.brightMagenta];

  return `
${c.dim}                                      ${c.brightYellow}${emoji.star}${c.reset}
${c.green}                                     /\\${c.reset}
${c.green}                                    /${lights[0]}o${c.green}\\${c.reset}
${c.green}                                   /${lights[1]}o${c.green} ${lights[2]}o${c.green}\\${c.reset}
${c.green}                                  /${lights[3]}o${c.green}   ${lights[4]}o${c.green}\\${c.reset}
${c.green}                                 /  ${lights[0]}o${c.green} ${lights[1]}o${c.green}  \\${c.reset}
${c.green}                                /${lights[2]}o${c.green}       ${lights[3]}o${c.green}\\${c.reset}
${c.green}                               /  ${lights[4]}o${c.green}  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  \\${c.reset}
${c.green}                              /${lights[2]}o${c.green}           ${lights[3]}o${c.green}\\${c.reset}
${c.green}                             /  ${lights[4]}o${c.green}  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  ${lights[2]}o${c.green}  \\${c.reset}
${c.green}                            /${lights[3]}o${c.green}               ${lights[4]}o${c.green}\\${c.reset}
${c.green}                           /  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  ${lights[2]}o${c.green}  ${lights[3]}o${c.green}  ${lights[4]}o${c.green}  \\${c.reset}
${c.green}                          /${lights[0]}o${c.green}                   ${lights[1]}o${c.green}\\${c.reset}
${c.green}                         /  ${lights[2]}o${c.green}  ${lights[3]}o${c.green}  ${lights[4]}o${c.green}  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  ${lights[2]}o${c.green}  \\${c.reset}
${c.green}                        /${lights[3]}o${c.green}                       ${lights[4]}o${c.green}\\${c.reset}
${c.green}                       /  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  ${lights[2]}o${c.green}  ${lights[3]}o${c.green}  ${lights[4]}o${c.green}  ${lights[0]}o${c.green}  ${lights[1]}o${c.green}  \\${c.reset}
${c.yellow}                                      |||${c.reset}
${c.yellow}                                      |||${c.reset}
${c.yellow}                                   ${c.bgYellow}${c.black} ======= ${c.reset}
`;
};

// BSOSPACE logo with enhanced styling
const createBSOSpaceLogo = () => {
  const c = colors;
  return `
${c.bright}${c.red}  ██████╗ ${c.green} ███████╗${c.yellow}  ██████╗ ${c.blue} ███████╗${c.magenta} ██████╗  ${c.cyan}  █████╗  ${c.white}  ██████╗ ${c.brightBlue} ███████╗${c.reset}
${c.bright}${c.red}  ██╔══██╗${c.green} ██╔════╝${c.yellow} ██╔═══██╗${c.blue} ██╔════╝${c.magenta} ██╔══██╗ ${c.cyan} ██╔══██╗ ${c.white} ██╔════╝ ${c.brightBlue} ██╔════╝${c.reset}
${c.bright}${c.red}  ██████╔╝${c.green} ███████╗${c.yellow} ██║   ██║${c.blue} ███████╗${c.magenta} ██████╔╝ ${c.cyan} ███████║ ${c.white} ██║      ${c.brightBlue} █████╗  ${c.reset}
${c.bright}${c.red}  ██╔══██╗${c.green} ╚════██║${c.yellow} ██║   ██║${c.blue} ╚════██║${c.magenta} ██╔═══╝  ${c.cyan} ██╔══██║ ${c.white} ██║      ${c.brightBlue} ██╔══╝  ${c.reset}
${c.bright}${c.red}  ██████╔╝${c.green} ███████║${c.yellow} ╚██████╔╝${c.blue} ███████║${c.magenta} ██║      ${c.cyan} ██║  ██║ ${c.white} ╚██████╗ ${c.brightBlue} ███████╗${c.reset}
${c.bright}${c.red}  ╚═════╝ ${c.green} ╚══════╝${c.yellow}  ╚═════╝ ${c.blue} ╚══════╝${c.magenta} ╚═╝      ${c.cyan} ╚═╝  ╚═╝ ${c.white}  ╚═════╝ ${c.brightBlue} ╚══════╝${c.reset}
`;
};

// Festive message with decorations
const createFestiveMessage = () => {
  const c = colors;
  return `
${c.bright}${c.cyan}╔═══════════════════════════════════════════════════════════════════════════════╗${c.reset}
${c.bright}${c.cyan}║${c.reset}                                                                               ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}        ${c.brightGreen}${emoji.tree}${c.reset}  ${c.brightRed}Merry Christmas & Happy New Year 2026!${c.reset}  ${c.brightGreen}${emoji.tree}${c.reset}        ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}                                                                               ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}     ${c.brightYellow}May your year be filled with joy, success, and prosperity!${c.reset}      ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}║${c.reset}                                                                               ${c.bright}${c.cyan}║${c.reset}
${c.bright}${c.cyan}╚═══════════════════════════════════════════════════════════════════════════════╝${c.reset}

${c.dim}                    ${emoji.gift}  ${emoji.party}  ${emoji.firework}  ${emoji.snowflake}  ${emoji.sparkle}  ${emoji.gift}  ${emoji.party}${c.reset}
`;
};

// Footer with server info
const createFooter = () => {
  const c = colors;
  return `
${c.dim}${c.cyan}─────────────────────────────────────────────────────────────────────────────────${c.reset}
${c.dim}                        Powered by BSOSPACE ${c.brightCyan}${emoji.sparkle}${c.reset}
${c.dim}${c.cyan}─────────────────────────────────────────────────────────────────────────────────${c.reset}
`;
};

// Combine all elements
const createFullDisplay = () => {
  return `
${createChristmasTree()}
${createBSOSpaceLogo()}
${createFestiveMessage()}
`;
};

// HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache"
  });

  // Display the complete festive message
  res.write(createFullDisplay());
  res.end();
});

// Start server on port 2026
const PORT = 2026;
server.listen(PORT, () => {
  const c = colors;
  console.log(`\n${c.bright}${c.green}${emoji.party} Server is running!${c.reset}`);
  console.log(`${c.cyan}${emoji.sparkle} Visit: ${c.brightCyan}http://localhost:${PORT}${c.reset}`);
  console.log(`${c.dim}Press Ctrl+C to stop the server${c.reset}\n`);
});
