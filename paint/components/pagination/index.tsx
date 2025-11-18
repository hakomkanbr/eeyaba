'use client';
import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';
import IPaginationType from '@/types/pagination-type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Pagination({ total = 0, c: defaultCurrentPage = 1, p: defaultPageSize = 10 }: IPaginationType) {
  const [active, setActive] = React.useState(1);
  const router = useRouter();
  const queries = useSearchParams();
  const c = parseInt(queries.get('c') ?? defaultCurrentPage.toString());
  const p = parseInt(queries.get('p') ?? defaultPageSize.toString());
  const pathname = usePathname();
  const getItemProps = (index: number) =>
    ({
      variant: active === index ? 'filled' : 'text',
      onClick: () => {
        router.replace(`${pathname}?c=${index}&p=${p}`);
        setActive(index);
      },
    }) as any;

  const next = () => {
    if (Math.ceil(parseInt(c.toString()) * parseInt(p.toString())) > total) return;
    setActive(active + 1);
    router.replace(`${pathname}?c=${active + 1}&p=${p}`);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    router.replace(`${pathname}?c=${active - 1}&p=${p}`);
  };

  const renderItems = () => {
    const items = [];
    let index = 0;
    for (index; index < Math.ceil(total / p); index++) {
      items.push(
        <IconButton
          style={{
            borderRadius: '50%',
          }}
          {...getItemProps(index + 1)}
        >
          {index + 1}
        </IconButton>
      );
    }
    return items;
  };
  if (Math.ceil(total) < 1) return '';
  if (total <= p) return '';
  return (
    <div className="flex items-center flex-wrap gap-4">
      <Button variant="text" className="flex items-center gap-2" onClick={prev} disabled={active === 1}>
        <LuArrowLeftSquare strokeWidth={2} className="h-4 w-4" /> prev
      </Button>
      <div className="flex items-center gap-2">{renderItems()}</div>
      <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={Math.ceil(c * p) >= total}>
        next
        <LuArrowRightSquare strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
