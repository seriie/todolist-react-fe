import { useState } from "react";

interface Item {
  id: number;
  icon: string;
  title: string;
}

interface ListsProps {
  title: string;
  items: Item[];
  onItemClick: (item: Item) => void;
}

export default function Lists({ title, items, onItemClick }: ListsProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (item: Item) => {
    setActiveId(item.id);
    onItemClick(item);
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-slate-800">{title}</h1>
      <div className="grid gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`cursor-pointer p-3 rounded-md border ${
              activeId === item.id
                ? "bg-indigo-100 border-indigo-500"
                : "bg-white"
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
