export default function Button({ text, style_ }) {
  if (style_ === 1) {
    return (
      <button className="transform rounded-full bg-ncPurple px-4 py-2 text-violet-200 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-violet-200 hover:text-ncDarkBlue">
        {text}
      </button>
    );
  } else {
    return (
      <button className="transform rounded-full border-2 border-ncDarkBlue bg-violet-200 px-4 py-2 text-ncDarkBlue transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-ncDarkBlue hover:text-violet-200">
        {text}
      </button>
    );
  }
}
