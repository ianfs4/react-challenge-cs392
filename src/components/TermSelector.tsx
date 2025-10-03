interface TermSelectorProps {
  activeTerm: string;
  setActiveTerm: (term: string) => void;
}

const TermSelector = ({ activeTerm, setActiveTerm }: TermSelectorProps) => {
  const terms = ["Fall", "Winter", "Spring", "Summer"];
  return (
    <div className="flex gap-4">
      {terms.map((term) => (
        <button
          key={term}
          className={`btn ${term === activeTerm ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveTerm(term)}
        >
          {term}
        </button>
      ))}
    </div>
  );
}

export default TermSelector;