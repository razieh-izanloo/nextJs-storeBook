import { useEffect, useRef, useState } from "react";

export const Suggestions = (props: {
  query: string;
  handleSelect: (text: string) => void;
}) => {
  const { query, handleSelect } = props;
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const controllerRef = useRef<AbortController | null>(null);

  // debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);
    return () => clearTimeout(handler);
  }, [query]);

  // fetch API
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    // cancel previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data: string[]) => {
        setSuggestions(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Search error:", err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [debouncedQuery]);

  return (
    suggestions.length > 0 && (
      <ul className="suggestions">
        {suggestions.map((text) => (
          <li key={text} onClick={() => handleSelect(text)}>
            {text}
          </li>
        ))}
      </ul>
    )
  );
};
