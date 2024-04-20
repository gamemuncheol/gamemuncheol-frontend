import { ReactElement } from 'react';

export default function VideoContainerLayout(props: {
  category: string;
  title: string;
  children: React.ReactNode;
  image: ReactElement;
}) {
  const { category, title, image, children } = props;

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
