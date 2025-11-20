'use client';

import { MakingOffSection } from '@/components/sections/MakingOffSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';

export default function NaCocoPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main>
        <MakingOffSection />

        <PageNavigation
          backHref="/naquela-pegada"
          nextLabel="INÍCIO"
          nextHref="/"
        />
      </main>
    </GSAPWrapper>
  );
}
