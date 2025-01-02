import { ProfileImage } from './profile-image';
import { BioSection } from './bio-section';
import { ContactInfo } from './contact-info';

export function ProfileSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
      <div className="flex flex-col items-center space-y-6">
        <ProfileImage />
        <BioSection />
        <ContactInfo />
      </div>
    </div>
  );
}