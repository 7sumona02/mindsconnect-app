import DropNav from "@/components/DropNav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className="h-full w-screen bg-[#f3f4f5]"
        >
          <DropNav />
          {children}
        </body>
      </html>
    );
  }
  