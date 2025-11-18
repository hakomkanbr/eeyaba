import React from 'react';

export default function DetailLayoutWithOutLayout({ children }: { children: React.ReactNode }) {
  return <article className="container mx-auto py-16">{children}</article>;
}
