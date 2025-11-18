import React from 'react';

export default function DetailLayout({ sidebar, children }: { children: React.ReactNode; sidebar: React.ReactNode }) {
  return (
    <article className="container mx-auto grid grid-cols-12 my-10 px-2">
      <div className="col-span-12 order-1 md:order-2 md:col-span-9">{children}</div>
      <aside className="col-span-12 order-2 md:order-1 md:col-span-3">{sidebar}</aside>
    </article>
  );
}
