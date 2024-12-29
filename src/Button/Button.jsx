export default function Button({ text, style_ }) {
  if (style_ === 1) {
    return (
      <button className="hover:bg-paletteColor3 bg-paletteColor2 text-paletteColor3 hover:text-paletteColor1 transform rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105">
        {text}
      </button>
    );
  } else {
    return (
      <button className="hover:text-paletteColor3 border-paletteColor1 bg-paletteColor3 text-paletteColor1 hover:bg-paletteColor1 transform rounded-full border-2 px-4 py-2 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105">
        {text}
      </button>
    );
  }
}
