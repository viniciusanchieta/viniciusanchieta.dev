'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.href = 'https://m.youtube.com/@viniciusanchieta';
  }, []);
}
