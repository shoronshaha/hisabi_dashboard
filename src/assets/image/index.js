// Import all image files dynamically
const imageFiles = import.meta.glob("./*.png", { eager: true });

const images = Object.fromEntries(
  Object.entries(imageFiles).map(([path, module]) => {
    const name = path.split("/").pop().replace(".svg", "");
    return [name, module.default];
  })
);

export default images;
