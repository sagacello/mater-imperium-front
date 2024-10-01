export const PlusIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className="plus-icon"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke={filled ? '#bdc3c7' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
