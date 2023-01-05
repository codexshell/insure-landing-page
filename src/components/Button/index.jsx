export default function Button({ children }) {
  return (
    <button className="uppercase border-2 py-2 px-8 active:bg-n-very-light-gray active:text-p-dark-violet">
      {children}
    </button>
  );
}
