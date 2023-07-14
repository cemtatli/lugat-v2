import { Badge } from '@/components/ui/badge';
import data from '@/data/data.json';

export default function Home() {
  return (
    <section className="h-full overflow-auto p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 mb-4 last:mb-0 border rounded-xl p-4"
        >
          <h3 className="font-semibold text-base">{item.term} nedir ?</h3>
          <div className="text-sm"> {item.desc}</div>
          <div className="mt-5 flex items-center gap-2.5">
            {item.category.map((category, index) => (
              <Badge key={index}>{category}</Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
