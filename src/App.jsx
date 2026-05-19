import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  const placeholders = [
    "Type something...",
    "Enter your text here...",
    "Make it aesthetic ✨",
    "Text Still ugly? Try again! 😎",
    "Text needs to swag it out..."
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // ---------- FONT SYSTEM ----------
  const fonts = {
    monospace: {
      lower: {
        a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏",
        g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕",
        m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛",
        s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡",
        y: "𝚢", z: "𝚣",
        " ": " "
      },
      upper: {
        A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵",
        G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻",
        M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁",
        S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇",
        Y: "𝚈", Z: "𝚉"
      }
    },

    bold: {
      lower: {
        a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞",
        f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
        k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨",
        p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
        u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
        " ": " "
      },
      upper: {
        A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄",
        F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉",
        K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎",
        P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓",
        U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙"
      }
    },

    cursive: {
      lower: {
        a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒",
        f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
        k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜",
        p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
        u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
        " ": " "
      },
      upper: {
        A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸",
        F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
        K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪",
        P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
        U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
      }
    },

    assumedDone: {
      lower: {
        a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖",
        f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
        k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠",
        p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
        u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
        " ": " ",
        "&": "&"
      },
      upper: {
        A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼",
        F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
        K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆",
        P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
        U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
      }
    }
  };

  // ---------- ROLE SYSTEM ----------
  const roles = ["heading", "subheading", "emphasis", "text"];

  const [selectedRole, setSelectedRole] = useState("heading");

  const [roleFonts, setRoleFonts] = useState({
    heading: "monospace",
    subheading: "assumedDone",
    emphasis: "bold",
    text: "cursive"
  });

  const [customFonts, setCustomFonts] = useState({});

  function transformText(text, font) {
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";

        if (char >= "a" && char <= "z") {
          return font.lower?.[char] || char;
        }

        if (char >= "A" && char <= "Z") {
          return font.upper?.[char] || char;
        }

        return font.lower?.[char] || font.upper?.[char] || char;
      })
      .join("");
  }

  function transformByRole(text, role) {
    const fontName = customFonts[role] || roleFonts[role];

    if (!fontName || !fonts[fontName]) return text;

    return transformText(text, fonts[fontName]);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  const transformed = transformByRole(text, selectedRole);

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1>Ghefont™</h1>

      <p style={{ color: "#666" }}>
        Turn text into styled Unicode typography instantly.
      </p>

      {/* TEXT INPUT */}
      <input
        placeholder={placeholders[placeholderIndex]}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "20px"
        }}
      />

      {/* ROLE SELECTOR */}
      <div style={{ marginBottom: "15px" }}>
        <label>Select Role: </label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>


      {/* OUTPUT */}
      <div
        style={{
          border: "1px solid #eee",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
      
        <h3>{selectedRole}</h3>

        <p style={{ fontSize: "18px" }}>{transformed}</p>

        <button onClick={() => copyToClipboard(transformed)}>
          Copy!
        </button>
      </div>
    </div>
  );
}

export default App;
