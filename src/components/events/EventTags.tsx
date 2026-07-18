type EventTagsProps = {
  tags?: string[];
  className?: string;
};

export default function EventTags({ tags, className }: EventTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
