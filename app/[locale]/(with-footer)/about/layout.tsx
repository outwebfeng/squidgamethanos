export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-white'>
      {children}
    </div>
  );
}
