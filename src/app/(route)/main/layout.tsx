export default function VideoContainerLayout(props: {
  category: string;
  title: string;
  children: React.ReactNode;
}) {
  const { category, title, children } = props;

  return (
    <section>
      <p className="text-sm font-SansNeoRegular text-primary-font-color">
        {category}
      </p>

      <h1 className="whitespace-pre-line text-black900 font-sansNeoBold">
        {title}
      </h1>

      {children}
    </section>
  );
}
