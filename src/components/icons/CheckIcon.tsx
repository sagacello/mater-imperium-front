interface CheckIconProps {
  checked: boolean;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ checked }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={checked ? 'var(--card-color)' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
