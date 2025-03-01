// Import all svg files dynamically
const svgFiles = import.meta.glob("./*.{svg,png,jpg}", { eager: true });

const svg = Object.fromEntries(
  Object.entries(svgFiles).map(([path, module]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.(png|jpg|svg)$/, "");
    return [name, module.default];
  })
);

export default svg;
