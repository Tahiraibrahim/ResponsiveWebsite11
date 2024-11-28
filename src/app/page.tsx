import Navbar from '@/components/Navbar';
import ContentLayout from '@/components/ContentLayout';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <ContentLayout />
    </main>
  );
}
