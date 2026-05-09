Paste this:

export const metadata = {
  title: "Fortematic",
  description: "Science-backed supplements for modern wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
