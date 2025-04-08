import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Elenco delle lingue supportate
export const locales = ['it', 'de', 'fr', 'rm'];
export const defaultLocale = 'it';

// Funzione per ottenere la lingua preferita dall'utente
function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files
  // in `public` manually. Esto podría necesitar ser actualizado si añades más archivos en public
  const PUBLIC_FILE = /\.(.*)$/;
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Reindirizzamento diretto per la root path alla versione italiana
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/it', request.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // e.g. incoming request is /products
    // The new URL is now /it/products or /{locale}/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

// Nuova sintassi per la configurazione del middleware
export const matcher = ['/((?!api|_next/static|_next/image|favicon.ico).*)']; 