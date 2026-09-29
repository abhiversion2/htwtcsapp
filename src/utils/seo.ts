import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export function usePageTitle(title: string, description?: string): void {
  useEffect(() => {
    const previousTitle = document.title;
    const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    const oldDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (metaDesc && oldDesc) {
        metaDesc.setAttribute('content', oldDesc);
      }
    };
  }, [title, description]);
}
