'use client';

import { Alert, AlertProps } from '@material-tailwind/react';

export default function MyAlert(props: AlertProps & { children: React.ReactNode }) {
  return (
    <Alert {...props} color="red">
      {props.children}
    </Alert>
  );
}
