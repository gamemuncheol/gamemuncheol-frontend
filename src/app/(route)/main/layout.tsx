export default function VideoContainerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
    title: string;
    image: JSX.Element;
  };
}) {
  const { category, title, image } = params;

  return (
    <article className="mb-12">
      <div className="flex items-end">
        <div>
          <p className="text-sm font-SansNeoRegular text-primary-font-color">
            {category}
          </p>

          <h1 className="whitespace-pre-line text-black900 font-sansNeoBold">
            {title}
          </h1>
        </div>

        {image}
      </div>

      {children}
    </article>
  );
}
