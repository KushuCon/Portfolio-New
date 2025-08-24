// // // // import { useEffect, useState } from 'react';

// // // // const MORSE_CODE_MAP: { [key: string]: string } = {
// // // //   'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
// // // //   'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
// // // //   'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
// // // //   'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
// // // //   'Y': '-.--', 'Z': '--..', ' ': '/'
// // // // };

// // // // const PORTFOLIO_MESSAGES = [
// // // //   'DEVELOPER',
// // // //   'CREATIVE',
// // // //   'INNOVATIVE', 
// // // //   'PASSIONATE',
// // // //   'CODER'
// // // // ];

// // // // const MATH_EQUATIONS = [
// // // //   // Math equations
// // // //   'E=mc²',
// // // //   'a²+b²=c²',
// // // //   'f(x)=∫xdx',
// // // //   '∑n=1∞',
// // // //   'lim→∞',
// // // //   'π≈3.14159',
// // // //   'e^(iπ)+1=0',
// // // //   '∇²φ=0',
// // // //   'dx/dt',
// // // //   'O(n²)',
// // // //   'λx.x',
// // // //   'P(A|B)',
// // // //   '∂f/∂x',
// // // //   'sin(θ)',
// // // //   'log₂(n)',
// // // //   '√(-1)=i',
// // // //   'Σ(xi-μ)²',
// // // //   'cos(π/2)',
// // // //   'tan(45°)',
// // // //   'ln(e)=1',
// // // //   '∫₀^∞ e^(-x²)dx',
// // // //   'F=ma',
// // // //   'v=d/t',
// // // //   'PV=nRT',
// // // //   'Δx·Δp≥ℏ/2',
// // // //   'c=λf',
// // // //   '∇·E=ρ/ε₀',
// // // //   'H=-kT∑ln(p)',
// // // //   'S=k·ln(W)',
  
// // // //   // Programming symbols and brackets
// // // //   '{',
// // // //   '}',
// // // //   '[',
// // // //   ']',
// // // //   '(',
// // // //   ')',
// // // //   '</',
// // // //   '/>',
// // // //   '<?',
// // // //   '?>',
// // // //   '&&',
// // // //   '||',
// // // //   '!=',
// // // //   '==',
// // // //   '===',
// // // //   '=>',
// // // //   '->',
// // // //   '++',
// // // //   '--',
// // // //   '+=',
// // // //   '-=',
// // // //   '*=',
// // // //   '/=',
// // // //   '%=',
// // // //   '<<',
// // // //   '>>',
// // // //   '&=',
// // // //   '|=',
// // // //   '^=',
// // // //   '~',
// // // //   '?:',
// // // //   '::',
// // // //   '...',
  
// // // //   // Code snippets
// // // //   'if(x>0)',
// // // //   'while(true)',
// // // //   'for(;;)',
// // // //   'try{',
// // // //   '}catch',
// // // //   'return',
// // // //   'void*',
// // // //   'int[]',
// // // //   'String',
// // // //   'bool',
// // // //   'null',
// // // //   'undefined',
// // // //   'const',
// // // //   'let',
// // // //   'var',
// // // //   'async',
// // // //   'await',
// // // //   'import',
// // // //   'export',
// // // //   'class',
// // // //   'extends',
// // // //   'implements',
// // // //   'interface',
// // // //   'type',
// // // //   'enum',
// // // //   'struct',
// // // //   'union',
// // // //   'sizeof',
// // // //   'malloc',
// // // //   'free',
// // // //   'new',
// // // //   'delete',
// // // //   'this',
// // // //   'super',
// // // //   'static',
// // // //   'final',
// // // //   'abstract',
// // // //   'virtual',
// // // //   'override',
// // // //   'public',
// // // //   'private',
// // // //   'protected',
  
// // // //   // Mathematical symbols
// // // //   '∞',
// // // //   '∫',
// // // //   '∂',
// // // //   '∇',
// // // //   '∑',
// // // //   '∏',
// // // //   '√',
// // // //   '∛',
// // // //   '±',
// // // //   '≠',
// // // //   '≤',
// // // //   '≥',
// // // //   '≈',
// // // //   '∈',
// // // //   '∉',
// // // //   '⊂',
// // // //   '⊃',
// // // //   '∪',
// // // //   '∩',
// // // //   '∀',
// // // //   '∃',
// // // //   'α',
// // // //   'β',
// // // //   'γ',
// // // //   'δ',
// // // //   'ε',
// // // //   'θ',
// // // //   'λ',
// // // //   'μ',
// // // //   'π',
// // // //   'σ',
// // // //   'φ',
// // // //   'ψ',
// // // //   'ω',
// // // //   'Δ',
// // // //   'Φ',
// // // //   'Ψ',
// // // //   'Ω',
// // // //   'ℏ',
// // // //   '℮',
// // // //   'ℝ',
// // // //   'ℂ',
// // // //   'ℕ',
// // // //   'ℤ',
// // // //   'ℚ'
// // // // ];

// // // // export const MorseBackground = () => {
// // // //   const [morseLines, setMorseLines] = useState<Array<{ text: string; x: number; y: number; delay: number; type: string }>>([]);

// // // //   const textToMorse = (text: string): string => {
// // // //     return text.toUpperCase().split('').map(char => MORSE_CODE_MAP[char] || '').join(' ');
// // // //   };

// // // //   useEffect(() => {
// // // //     const generateMorseLines = () => {
// // // //       const lines = [];
      
// // // //       // Generate morse code lines
// // // //       for (let i = 0; i < 6; i++) {
// // // //         const message = PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)];
// // // //         const morseText = textToMorse(message);
// // // //         lines.push({
// // // //           text: morseText,
// // // //           x: Math.random() * 95,
// // // //           y: Math.random() * 95,
// // // //           delay: Math.random() * 8,
// // // //           type: 'morse'
// // // //         });
// // // //       }
      
// // // //       // Generate math equations (filter out programming symbols for separate handling)
// // // //       const mathOnly = MATH_EQUATIONS.filter(eq => 
// // // //         !eq.includes('{') && !eq.includes('<') && !eq.includes('if') && 
// // // //         !eq.includes('while') && !eq.includes('class') && !eq.includes('const')
// // // //       );
      
// // // //       for (let i = 0; i < 15; i++) {
// // // //         const equation = mathOnly[Math.floor(Math.random() * mathOnly.length)];
// // // //         lines.push({
// // // //           text: equation,
// // // //           x: Math.random() * 95,
// // // //           y: Math.random() * 95,
// // // //           delay: Math.random() * 6,
// // // //           type: 'math'
// // // //         });
// // // //       }
      
// // // //       // Generate code symbols separately
// // // //       const codeSymbols = MATH_EQUATIONS.filter(eq => 
// // // //         eq.includes('{') || eq.includes('<') || eq.includes('if') || 
// // // //         eq.includes('while') || eq.includes('class') || eq.includes('const') ||
// // // //         eq.length < 3
// // // //       );
      
// // // //       for (let i = 0; i < 20; i++) {
// // // //         const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
// // // //         lines.push({
// // // //           text: symbol,
// // // //           x: Math.random() * 95,
// // // //           y: Math.random() * 95,
// // // //           delay: Math.random() * 7,
// // // //           type: 'code'
// // // //         });
// // // //       }
      
// // // //       setMorseLines(lines);
// // // //     };

// // // //     generateMorseLines();
// // // //     const interval = setInterval(generateMorseLines, 10000);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   return (
// // // //     <div className="morse-bg">
// // // //       {morseLines.map((line, index) => {
// // // //         const elementClass = line.type === 'morse' ? 'morse-element' : 
// // // //                            line.type === 'math' ? 'math-element' : 'code-element';
        
// // // //         return (
// // // //           <div
// // // //             key={index}
// // // //             className={`absolute ${elementClass}`}
// // // //             style={{
// // // //               left: `${line.x}%`,
// // // //               top: `${line.y}%`,
// // // //               animationDelay: `${line.delay}s`
// // // //             }}
// // // //           >
// // // //             {line.text}
// // // //           </div>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };


// // // import { useEffect, useState } from 'react';

// // // const MORSE_CODE_MAP: { [key: string]: string } = {
// // //   'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
// // //   'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
// // //   'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
// // //   'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
// // //   'Y': '-.--', 'Z': '--..', ' ': '/'
// // // };

// // // const PORTFOLIO_MESSAGES = [
// // //   'DEVELOPER',
// // //   'CREATIVE',
// // //   'INNOVATIVE', 
// // //   'PASSIONATE',
// // //   'CODER'
// // // ];

// // // const MATH_EQUATIONS = [
// // //   // ...all your equations, symbols, brackets, snippets, etc...
// // //   'E=mc²', 'a²+b²=c²', 'f(x)=∫xdx', '∑n=1∞', 'lim→∞', 'π≈3.14159', 'e^(iπ)+1=0', '∇²φ=0',
// // //   'dx/dt', 'O(n²)', 'λx.x', 'P(A|B)', '∂f/∂x', 'sin(θ)', 'log₂(n)', '√(-1)=i', 'Σ(xi-μ)²',
// // //   'cos(π/2)', 'tan(45°)', 'ln(e)=1', '∫₀^∞ e^(-x²)dx', 'F=ma', 'v=d/t', 'PV=nRT', 'Δx·Δp≥ℏ/2',
// // //   'c=λf', '∇·E=ρ/ε₀', 'H=-kT∑ln(p)', 'S=k·ln(W)', '{', '}', '[', ']', '(', ')', '</', '/>', '<?',
// // //   '?>', '&&', '||', '!=', '==', '===', '=>', '->', '++', '--', '+=', '-=', '*=', '/=', '%=', '<<',
// // //   '>>', '&=', '|=', '^=', '~', '?:', '::', '...', 'if(x>0)', 'while(true)', 'for(;;)', 'try{',
// // //   '}catch', 'return', 'void*', 'int[]', 'String', 'bool', 'null', 'undefined', 'const', 'let', 'var',
// // //   'async', 'await', 'import', 'export', 'class', 'extends', 'implements', 'interface', 'type', 'enum',
// // //   'struct', 'union', 'sizeof', 'malloc', 'free', 'new', 'delete', 'this', 'super', 'static', 'final',
// // //   'abstract', 'virtual', 'override', 'public', 'private', 'protected', '∞', '∫', '∂', '∇', '∑', '∏',
// // //   '√', '∛', '±', '≠', '≤', '≥', '≈', '∈', '∉', '⊂', '⊃', '∪', '∩', '∀', '∃', 'α', 'β', 'γ', 'δ',
// // //   'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'φ', 'ψ', 'ω', 'Δ', 'Φ', 'Ψ', 'Ω', 'ℏ', '℮', 'ℝ', 'ℂ', 'ℕ', 'ℤ', 'ℚ'
// // // ];

// // // const ANIMATION_CLASSES = ['move-right', 'move-left'];

// // // function getRandomItems<T>(arr: T[], count: number): T[] {
// // //   const shuffled = arr.slice().sort(() => 0.5 - Math.random());
// // //   return shuffled.slice(0, count);
// // // }

// // // export const MorseBackground = () => {
// // //   const [lines, setLines] = useState<
// // //     Array<{ text: string; type: string; animation: string; top: number; key: string }>
// // //   >([]);

// // //   const textToMorse = (text: string): string => {
// // //     return text.toUpperCase().split('').map(char => MORSE_CODE_MAP[char] || '').join(' ');
// // //   };

// // //   useEffect(() => {
// // //     // Create multiple lines, each line is a long string of random items
// // //     const newLines: Array<{ text: string; type: string; animation: string; top: number; key: string }> = [];
// // //     const totalLines = 12; // Number of horizontal lines

// // //     for (let i = 0; i < totalLines; i++) {
// // //       // Each line will contain a mix of Morse, equations, symbols, snippets, etc.
// // //       const morse = textToMorse(PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)]);
// // //       const equations = getRandomItems(MATH_EQUATIONS, 8).join('   ');
// // //       const lineText = `${morse}   ${equations}`;
// // //       // Alternate type for styling, but you can use your own logic
// // //       const type = i % 3 === 0 ? 'morse-element' : (i % 3 === 1 ? 'math-element' : 'code-element');
// // //       const animation = ANIMATION_CLASSES[i % 2];
// // //       newLines.push({
// // //         text: lineText,
// // //         type,
// // //         animation,
// // //         top: 5 + i * (90 / totalLines), // Evenly spread vertically
// // //         key: `line-${i}-${Date.now()}-${Math.random()}`
// // //       });
// // //     }

// // //     setLines(newLines);

// // //     // Regenerate lines every 12 seconds for continuous flooding
// // //     const interval = setInterval(() => {
// // //       const refreshedLines: Array<{ text: string; type: string; animation: string; top: number; key: string }> = [];
// // //       for (let i = 0; i < totalLines; i++) {
// // //         const morse = textToMorse(PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)]);
// // //         const equations = getRandomItems(MATH_EQUATIONS, 8).join('   ');
// // //         const lineText = `${morse}   ${equations}`;
// // //         const type = i % 3 === 0 ? 'morse-element' : (i % 3 === 1 ? 'math-element' : 'code-element');
// // //         const animation = ANIMATION_CLASSES[i % 2];
// // //         refreshedLines.push({
// // //           text: lineText,
// // //           type,
// // //           animation,
// // //           top: 5 + i * (90 / totalLines),
// // //           key: `line-${i}-${Date.now()}-${Math.random()}`
// // //         });
// // //       }
// // //       setLines(refreshedLines);
// // //     }, 12000);

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="morse-bg">
// // //       {lines.map((line) => (
// // //         <div
// // //           key={line.key}
// // //           className={`${line.type} ${line.animation}`}
// // //           style={{
// // //             position: 'absolute',
// // //             top: `${line.top}%`
// // //           }}
// // //         >
// // //           {line.text}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };


// // import { useEffect, useState } from 'react';

// // const MORSE_CODE_MAP: { [key: string]: string } = {
// //   'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
// //   'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
// //   'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
// //   'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
// //   'Y': '-.--', 'Z': '--..', ' ': '/'
// // };

// // const PORTFOLIO_MESSAGES = [
// //   'DEVELOPER',
// //   'CREATIVE',
// //   'INNOVATIVE', 
// //   'PASSIONATE',
// //   'CODER'
// // ];

// // const MATH_EQUATIONS = [
// //   // ...all your equations, symbols, brackets, snippets, etc...
// //   'E=mc²', 'a²+b²=c²', 'f(x)=∫xdx', '∑n=1∞', 'lim→∞', 'π≈3.14159', 'e^(iπ)+1=0', '∇²φ=0',
// //   'dx/dt', 'O(n²)', 'λx.x', 'P(A|B)', '∂f/∂x', 'sin(θ)', 'log₂(n)', '√(-1)=i', 'Σ(xi-μ)²',
// //   'cos(π/2)', 'tan(45°)', 'ln(e)=1', '∫₀^∞ e^(-x²)dx', 'F=ma', 'v=d/t', 'PV=nRT', 'Δx·Δp≥ℏ/2',
// //   'c=λf', '∇·E=ρ/ε₀', 'H=-kT∑ln(p)', 'S=k·ln(W)', '{', '}', '[', ']', '(', ')', '</', '/>', '<?',
// //   '?>', '&&', '||', '!=', '==', '===', '=>', '->', '++', '--', '+=', '-=', '*=', '/=', '%=', '<<',
// //   '>>', '&=', '|=', '^=', '~', '?:', '::', '...', 'if(x>0)', 'while(true)', 'for(;;)', 'try{',
// //   '}catch', 'return', 'void*', 'int[]', 'String', 'bool', 'null', 'undefined', 'const', 'let', 'var',
// //   'async', 'await', 'import', 'export', 'class', 'extends', 'implements', 'interface', 'type', 'enum',
// //   'struct', 'union', 'sizeof', 'malloc', 'free', 'new', 'delete', 'this', 'super', 'static', 'final',
// //   'abstract', 'virtual', 'override', 'public', 'private', 'protected', '∞', '∫', '∂', '∇', '∑', '∏',
// //   '√', '∛', '±', '≠', '≤', '≥', '≈', '∈', '∉', '⊂', '⊃', '∪', '∩', '∀', '∃', 'α', 'β', 'γ', 'δ',
// //   'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'φ', 'ψ', 'ω', 'Δ', 'Φ', 'Ψ', 'Ω', 'ℏ', '℮', 'ℝ', 'ℂ', 'ℕ', 'ℤ', 'ℚ'
// // ];

// // const ANIMATION_CLASSES = ['marquee-right', 'marquee-left'];

// // function getRandomItems<T>(arr: T[], count: number): T[] {
// //   const shuffled = arr.slice().sort(() => 0.5 - Math.random());
// //   return shuffled.slice(0, count);
// // }

// // function buildLongLine(): string {
// //   // Build a long string by repeating random items
// //   let line = '';
// //   for (let i = 0; i < 30; i++) {
// //     if (i % 5 === 0) {
// //       line += ' ' + PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)] + ' ';
// //       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
// //       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
// //     } else {
// //       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
// //     }
// //   }
// //   return line;
// // }

// // export const MorseBackground = () => {
// //   const totalLines = 12;
// //   const [lines, setLines] = useState<
// //     Array<{ text: string; type: string; animation: string; top: number; key: string }>
// //   >([]);

// //   useEffect(() => {
// //     const newLines: Array<{ text: string; type: string; animation: string; top: number; key: string }> = [];
// //     for (let i = 0; i < totalLines; i++) {
// //       const lineText = buildLongLine();
// //       const type = i % 3 === 0 ? 'morse-element' : (i % 3 === 1 ? 'math-element' : 'code-element');
// //       const animation = ANIMATION_CLASSES[i % 2];
// //       newLines.push({
// //         text: lineText,
// //         type,
// //         animation,
// //         top: 5 + i * (90 / totalLines),
// //         key: `line-${i}-${Date.now()}-${Math.random()}`
// //       });
// //     }
// //     setLines(newLines);
// //   }, []);

// //   return (
// //     <div className="morse-bg">
// //       {lines.map((line) => (
// //         <div
// //           key={line.key}
// //           className={`${line.type} ${line.animation}`}
// //           style={{
// //             position: 'absolute',
// //             top: `${line.top}%`,
// //             whiteSpace: 'nowrap',
// //             width: 'max-content'
// //           }}
// //         >
// //           {line.text}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };


// import { useEffect, useState } from 'react';

// const MORSE_CODE_MAP: { [key: string]: string } = {
//   'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
//   'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
//   'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
//   'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
//   'Y': '-.--', 'Z': '--..', ' ': '/'
// };

// const PORTFOLIO_MESSAGES = [
//   'DEVELOPER',
//   'CREATIVE',
//   'INNOVATIVE', 
//   'PASSIONATE',
//   'CODER'
// ];

// const MATH_EQUATIONS = [
//   // ...all your equations, symbols, brackets, snippets, etc...
//   'E=mc²', 'a²+b²=c²', 'f(x)=∫xdx', '∑n=1∞', 'lim→∞', 'π≈3.14159', 'e^(iπ)+1=0', '∇²φ=0',
//   'dx/dt', 'O(n²)', 'λx.x', 'P(A|B)', '∂f/∂x', 'sin(θ)', 'log₂(n)', '√(-1)=i', 'Σ(xi-μ)²',
//   'cos(π/2)', 'tan(45°)', 'ln(e)=1', '∫₀^∞ e^(-x²)dx', 'F=ma', 'v=d/t', 'PV=nRT', 'Δx·Δp≥ℏ/2',
//   'c=λf', '∇·E=ρ/ε₀', 'H=-kT∑ln(p)', 'S=k·ln(W)', '{', '}', '[', ']', '(', ')', '</', '/>', '<?',
//   '?>', '&&', '||', '!=', '==', '===', '=>', '->', '++', '--', '+=', '-=', '*=', '/=', '%=', '<<',
//   '>>', '&=', '|=', '^=', '~', '?:', '::', '...', 'if(x>0)', 'while(true)', 'for(;;)', 'try{',
//   '}catch', 'return', 'void*', 'int[]', 'String', 'bool', 'null', 'undefined', 'const', 'let', 'var',
//   'async', 'await', 'import', 'export', 'class', 'extends', 'implements', 'interface', 'type', 'enum',
//   'struct', 'union', 'sizeof', 'malloc', 'free', 'new', 'delete', 'this', 'super', 'static', 'final',
//   'abstract', 'virtual', 'override', 'public', 'private', 'protected', '∞', '∫', '∂', '∇', '∑', '∏',
//   '√', '∛', '±', '≠', '≤', '≥', '≈', '∈', '∉', '⊂', '⊃', '∪', '∩', '∀', '∃', 'α', 'β', 'γ', 'δ',
//   'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'φ', 'ψ', 'ω', 'Δ', 'Φ', 'Ψ', 'Ω', 'ℏ', '℮', 'ℝ', 'ℂ', 'ℕ', 'ℤ', 'ℚ'
// ];

// const ANIMATION_CLASSES = ['marquee-right', 'marquee-left'];

// function getRandomItems<T>(arr: T[], count: number): T[] {
//   const shuffled = arr.slice().sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }

// function buildLongLine(): string {
//   let line = '';
//   for (let i = 0; i < 30; i++) {
//     if (i % 5 === 0) {
//       line += ' ' + PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)] + ' ';
//       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
//       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
//     } else {
//       line += ' ' + getRandomItems(MATH_EQUATIONS, 1)[0] + ' ';
//     }
//   }
//   return line;
// }

// export const MorseBackground = () => {
//   const totalLines = 12;
//   const [lines, setLines] = useState<
//     Array<{ text: string; type: string; animation: string; top: number; key: string }>
//   >([]);

//   useEffect(() => {
//     const newLines: Array<{ text: string; type: string; animation: string; top: number; key: string }> = [];
//     for (let i = 0; i < totalLines; i++) {
//       const lineText = buildLongLine();
//       const type = i % 3 === 0 ? 'morse-element' : (i % 3 === 1 ? 'math-element' : 'code-element');
//       const animation = ANIMATION_CLASSES[i % 2];
//       newLines.push({
//         text: lineText,
//         type,
//         animation,
//         top: 5 + i * (90 / totalLines),
//         key: `line-${i}-${Date.now()}-${Math.random()}`
//       });
//     }
//     setLines(newLines);
//   }, []);

//   return (
//     <div className="morse-bg">
//       {lines.map((line) => (
//         <div
//           key={line.key}
//           className={`${line.type} ${line.animation} marquee-container`}
//           style={{
//             position: 'absolute',
//             top: `${line.top}%`,
//             whiteSpace: 'nowrap',
//             width: 'max-content'
//           }}
//         >
//           <span>{line.text}</span>
//           <span aria-hidden="true">{line.text}</span>
//         </div>
//       ))}
//     </div>
//   );
// };


import { useEffect, useState } from 'react';

const MORSE_CODE_MAP: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', ' ': '/'
};

const PORTFOLIO_MESSAGES = [
  'DEVELOPER',
  'CREATIVE',
  'INNOVATIVE', 
  'PASSIONATE',
  'CODER'
];

const MATH_EQUATIONS = [
  // ...all your equations, symbols, brackets, snippets, etc...
  'E=mc²', 'a²+b²=c²', 'f(x)=∫xdx', '∑n=1∞', 'lim→∞', 'π≈3.14159', 'e^(iπ)+1=0', '∇²φ=0',
  'dx/dt', 'O(n²)', 'λx.x', 'P(A|B)', '∂f/∂x', 'sin(θ)', 'log₂(n)', '√(-1)=i', 'Σ(xi-μ)²',
  'cos(π/2)', 'tan(45°)', 'ln(e)=1', '∫₀^∞ e^(-x²)dx', 'F=ma', 'v=d/t', 'PV=nRT', 'Δx·Δp≥ℏ/2',
  'c=λf', '∇·E=ρ/ε₀', 'H=-kT∑ln(p)', 'S=k·ln(W)', '{', '}', '[', ']', '(', ')', '</', '/>', '<?',
  '?>', '&&', '||', '!=', '==', '===', '=>', '->', '++', '--', '+=', '-=', '*=', '/=', '%=', '<<',
  '>>', '&=', '|=', '^=', '~', '?:', '::', '...', 'if(x>0)', 'while(true)', 'for(;;)', 'try{',
  '}catch', 'return', 'void*', 'int[]', 'String', 'bool', 'null', 'undefined', 'const', 'let', 'var',
  'async', 'await', 'import', 'export', 'class', 'extends', 'implements', 'interface', 'type', 'enum',
  'struct', 'union', 'sizeof', 'malloc', 'free', 'new', 'delete', 'this', 'super', 'static', 'final',
  'abstract', 'virtual', 'override', 'public', 'private', 'protected', '∞', '∫', '∂', '∇', '∑', '∏',
  '√', '∛', '±', '≠', '≤', '≥', '≈', '∈', '∉', '⊂', '⊃', '∪', '∩', '∀', '∃', 'α', 'β', 'γ', 'δ',
  'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'φ', 'ψ', 'ω', 'Δ', 'Φ', 'Ψ', 'Ω', 'ℏ', '℮', 'ℝ', 'ℂ', 'ℕ', 'ℤ', 'ℚ'
];

const ANIMATION_CLASSES = ['marquee-right', 'marquee-left'];

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function buildLongLine(): string[] {
  // Return an array of symbols/messages for spacing
  const lineArr: string[] = [];
  for (let i = 0; i < 30; i++) {
    if (i % 5 === 0) {
      lineArr.push(PORTFOLIO_MESSAGES[Math.floor(Math.random() * PORTFOLIO_MESSAGES.length)]);
      lineArr.push(getRandomItems(MATH_EQUATIONS, 1)[0]);
      lineArr.push(getRandomItems(MATH_EQUATIONS, 1)[0]);
    } else {
      lineArr.push(getRandomItems(MATH_EQUATIONS, 1)[0]);
    }
  }
  return lineArr;
}

export const MorseBackground = () => {
  const totalLines = 6; // Reduced number of lines
  const [lines, setLines] = useState<
    Array<{ textArr: string[]; type: string; animation: string; top: number; key: string }>
  >([]);

  useEffect(() => {
    const newLines: Array<{ textArr: string[]; type: string; animation: string; top: number; key: string }> = [];
    for (let i = 0; i < totalLines; i++) {
      const lineArr = buildLongLine();
      const type = i % 3 === 0 ? 'morse-element' : (i % 3 === 1 ? 'math-element' : 'code-element');
      const animation = ANIMATION_CLASSES[i % 2];
      newLines.push({
        textArr: lineArr,
        type,
        animation,
        top: 10 + i * (80 / totalLines),
        key: `line-${i}-${Date.now()}-${Math.random()}`
      });
    }
    setLines(newLines);
  }, []);

  return (
    <div className="morse-bg">
      {lines.map((line) => (
        <div
          key={line.key}
          className={`${line.type} ${line.animation} marquee-container`}
          style={{
            position: 'absolute',
            top: `${line.top}%`,
            whiteSpace: 'nowrap',
            width: 'max-content'
          }}
        >
          {/* Repeat for seamless loop */}
          <span>
            {line.textArr.map((item, idx) => (
              <span key={idx} className="marquee-symbol">{item}</span>
            ))}
          </span>
          <span aria-hidden="true">
            {line.textArr.map((item, idx) => (
              <span key={`repeat-${idx}`} className="marquee-symbol">{item}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};