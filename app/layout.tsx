import '#/styles/globals.scss';
import { AddressBar } from '#/ui/address-bar';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import ThemeProvider from './theme-provider';
import { MuiSetup } from './mui-setup';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <ThemeProvider>
          <MuiSetup>
            <GlobalNav />
            <div className="lg:pl-72">
              <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
                <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
                  <div className="rounded-lg bg-black">
                    <AddressBar />
                  </div>
                </div>

                <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
                  <div className="rounded-lg bg-black p-3.5 lg:p-6">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </MuiSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}