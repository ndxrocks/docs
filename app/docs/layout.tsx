import { Sidebar } from "@/components/layout/sidebar";
import { DocsMobileNav } from "@/components/docs/mobile-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl gap-0">
      <Sidebar />
      <DocsMobileNav />
      <div className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </div>
  );
}
