type TechnologyTagsProps = {
  items: string[];
};

export function TechnologyTags({ items }: TechnologyTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias do projeto">
      {items.map((item) => (
        <li key={item} className="data-chip bg-background/60 text-[10px]">
          {item}
        </li>
      ))}
    </ul>
  );
}
