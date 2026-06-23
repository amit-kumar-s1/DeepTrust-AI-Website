interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-12">
      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        mb-4
        "
      >
        {title}
      </h2>

      <p
        className="
        text-gray-400
        max-w-2xl
        mx-auto
        "
      >
        {subtitle}
      </p>
    </div>
  );
}