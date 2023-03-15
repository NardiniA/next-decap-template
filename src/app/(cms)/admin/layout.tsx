export const metadata = {
  title: "Content Management System",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
