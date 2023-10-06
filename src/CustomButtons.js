export function CustomButtons({ btnID }) {
  return (
    <button
      onClick={() => alert(`You have clicked on Button ${btnID}`)}
      className="border border-black bg-slate-300 py-2 px-5 hover:bg-slate-200 rounded-md"
    >
      Button {btnID}
    </button>
  );
}
