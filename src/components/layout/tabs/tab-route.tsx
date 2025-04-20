import { useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface TabsProps {
  title: string;
  items: Item[];
  onItemClick: (item: Item) => void;
}

export default function TabRoute({ title, items, onItemClick }: TabsProps) {
  const [activeTabs, setActiveTabs] = useState<number | null>(null);

  const handleClick = (item: Item) => {
    setActiveTabs(item.id);
    onItemClick(item);
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <div className="flex gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`cursor-pointer p-3 rounded-md border ${
              activeTabs === item.id
                ? "bg-indigo-100 border-indigo-500"
                : "bg-white"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}