const http = require("http");

const bsospaceText = `
  \x1b[31mBBBBB\x1b[0m    \x1b[32mSSSSS\x1b[0m   \x1b[33mOOOOO\x1b[0m   \x1b[34mSSSSS\x1b[0m   \x1b[35mPPPPP\x1b[0m    \x1b[36mAAAAA\x1b[0m   \x1b[37mCCCCC\x1b[0m   \x1b[38mEEEEE\x1b[0m
  \x1b[31mB    B\x1b[0m  \x1b[32mS\x1b[0m       \x1b[33mO     O\x1b[0m  \x1b[34mS\x1b[0m       \x1b[35mP    P\x1b[0m  \x1b[36mA     A\x1b[0m  \x1b[37mC\x1b[0m        \x1b[38mE\x1b[0m
  \x1b[31mBBBBB\x1b[0m   \x1b[32mSSSSS\x1b[0m   \x1b[33mO     O\x1b[0m  \x1b[34mSSSSS\x1b[0m   \x1b[35mPPPPPP\x1b[0m  \x1b[36mAAAAAA\x1b[0m  \x1b[37mC\x1b[0m        \x1b[38mEEEE\x1b[0m
  \x1b[31mB    B\x1b[0m      \x1b[32mS\x1b[0m   \x1b[33mO     O\x1b[0m      \x1b[34mS\x1b[0m   \x1b[35mP\x1b[0m       \x1b[36mA     A\x1b[0m  \x1b[37mC\x1b[0m        \x1b[38mE\x1b[0m
  \x1b[31mBBBBB\x1b[0m    \x1b[32mSSSSS\x1b[0m   \x1b[33mOOOOO\x1b[0m   \x1b[34mSSSSS\x1b[0m   \x1b[35mP\x1b[0m       \x1b[36mA     A\x1b[0m  \x1b[37mCCCCC\x1b[0m   \x1b[38mEEEEE\x1b[0m
`;


// ASCII Art: พลุหลากหลายตำแหน่ง และต้นคริสต์มาสที่มีไฟ
const fireworksFrames = [
  `
                 \x1b[33m🌟\x1b[0m                      \x1b[34m🌟\x1b[0m                     \x1b[35m🌟\x1b[0m
                \x1b[32m🎆🎆🎆\x1b[0m                  \x1b[36m🎆🎆🎆\x1b[0m                 \x1b[31m🎆🎆🎆\x1b[0m
             \x1b[33m🎇🎇🎇🎇🎇\x1b[0m              \x1b[34m🎇🎇🎇🎇🎇\x1b[0m             \x1b[35m🎇🎇🎇🎇🎇\x1b[0m
          \x1b[32m🎆🎆🎆🎆🎆🎆🎆\x1b[0m        \x1b[36m🎆🎆🎆🎆🎆🎆🎆\x1b[0m        \x1b[31m🎆🎆🎆🎆🎆🎆🎆\x1b[0m
             \x1b[33m🎇🎇🎇🎇🎇\x1b[0m          \x1b[34m🎇🎇🎇🎇🎇\x1b[0m           \x1b[35m🎇🎇🎇🎇🎇\x1b[0m
                \x1b[32m🎆🎆🎆\x1b[0m                \x1b[36m🎆🎆🎆\x1b[0m             \x1b[31m🎆🎆🎆\x1b[0m
                \x1b[33m✨  ✨ ✨\x1b[0m              \x1b[34m✨  ✨ ✨\x1b[0m           \x1b[35m✨  ✨ ✨\x1b[0m
  `,
  `
          \x1b[33m🎆🎆🎇🎆🎆🎇\x1b[0m              \x1b[34m🎆🎆🎆🎆🎆🎆🎆\x1b[0m          \x1b[31m🎆🎆🎆🎆🎆🎆🎆\x1b[0m
       \x1b[32m🌟\x1b[0m  \x1b[33m🎇🎇🎇🎇🎇🎇🎇🎇🎇\x1b[0m        \x1b[36m🎇🎇🎆🎆🎆🎆🎆🎆🎆🎆\x1b[0m  \x1b[31m🎇🎇🎇🎇🎇🎇🎇🎇\x1b[0m
      \x1b[34m🎇🎇🎆🎆🎆🎆🎆🎆🎆🎆🎆🎇\x1b[0m    \x1b[33m🎆🎇🎆🎆🎆🎆🎆🎇🎆🎆🎇\x1b[0m  \x1b[32m🎆🎆🎆🎇🎆🎆🎆🎆\x1b[0m
        \x1b[35m🎆🎇🎇🎆🎇🎇🎆🎇🎆🎆\x1b[0m      \x1b[33m🎇🎇🎇🎇🎆🎆🎆🎇🎆🎇🎆\x1b[0m    \x1b[36m🎇🎆🎆🎇🎇\x1b[0m
          \x1b[31m✨   ✨      ✨       ✨\x1b[0m      \x1b[32m✨    ✨      ✨\x1b[0m         \x1b[34m✨\x1b[0m
  `,
  `
               \x1b[33m🌟\x1b[0m      \x1b[34m🌟\x1b[0m       \x1b[31m🌟\x1b[0m  \x1b[32m🌟\x1b[0m    \x1b[36m🌟\x1b[0m      \x1b[35m🌟\x1b[0m         \x1b[33m🌟\x1b[0m
              \x1b[31m🎇🎇\x1b[0m    \x1b[34m🎆🎆\x1b[0m   \x1b[33m🎇🎆🎇\x1b[0m \x1b[32m🎆🎆\x1b[0m  \x1b[35m🎇🎆🎆🎆🎇🎆\x1b[0m       \x1b[36m🎇🎇🎇🎇\x1b[0m
         \x1b[32m🎆🎆🎆🎆🎆\x1b[0m  \x1b[36m🎇🎆🎇🎆🎇🎆🎆🎇🎆🎆🎇🎇🎆🎆🎆🎆🎆🎇🎆🎆🎆\x1b[0m
        \x1b[31m🎇🎆🎆🎆🎆🎆🎇🎆🎇🎆🎆🎇🎆🎆🎇🎇🎆🎇🎆🎆🎇🎇🎆🎆🎇🎆\x1b[0m
                \x1b[34m✨   ✨     ✨\x1b[0m          \x1b[33m✨        ✨\x1b[0m       \x1b[31m✨\x1b[0m      \x1b[32m✨\x1b[0m
  `,
];

// Christmas tree with colorful lights
const treeWithLights = `
                                 \x1b[32m🌟\x1b[0m                  
                                 \x1b[33m* *\x1b[0m                   
                                \x1b[35m* * *\x1b[0m                 
                               \x1b[34m* * * *\x1b[0m                
                              \x1b[36m* * * * *\x1b[0m               
                             \x1b[31m* * * * * *\x1b[0m              
                            \x1b[32m* * * * * * *\x1b[0m             
                           \x1b[33m* * * * * * * *\x1b[0m            
                          \x1b[34m* * * * * * * * *\x1b[0m           
                         \x1b[35m* * * * * * * * * *\x1b[0m          
                        \x1b[36m* * * * * * * * * * *\x1b[0m         
                                 \x1b[32m||| \x1b[0m                    
                                 \x1b[33m||| \x1b[0m                    
             🎄 \x1b[31mMerry Christmas & Happy New Year 2025!\x1b[0m 🎄
`;

// HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  let frame = 0;

  // Animation loop
  const interval = setInterval(() => {
    res.write("\x1b[2J\x1b[H"); // Clear screen
    res.write(fireworksFrames[frame % fireworksFrames.length]); // Fireworks animation
    res.write(treeWithLights); // Christmas tree with lights
    res.write(bsospaceText); // BSO Space message
    frame++;
  }, 300); // Change animation every 300ms

  // Stop animation after 15 seconds
  setTimeout(() => {
    clearInterval(interval);
  }, 15000);
});

// Start server on port 2025
const PORT = 2025;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
