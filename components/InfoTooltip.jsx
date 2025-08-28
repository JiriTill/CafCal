export default function InfoTooltip({ label = 'More info', children }) {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-700 text-slate-200 text-xs ml-2"
      title={label}
      aria-label={label}
      role="img"
    >
      i
    </span>
  );
}
