export default function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      {title ? <h5 className="text-corigin text-lg mb-2">{title}</h5> : ''}
      {description ? <p className="mb-2 text-4xl text-white font-bold">{description}</p> : ''}
    </div>
  );
}
