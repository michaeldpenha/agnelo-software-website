import { BusinessHero } from './BusinessHero';
import { BusinessBenefits } from './BusinessBenefits';
import { BusinessFeatures } from './BusinessFeatures';
import { DataPrivacy } from '../DataPrivacy/DataPrivacy';
import { BusinessCta } from './BusinessCta';

export function ForBusinesses() {
  return (
    <>
      <BusinessHero />
      <BusinessBenefits />
      <BusinessFeatures />
      <DataPrivacy ns="forBusinesses" />
      <BusinessCta />
    </>
  );
}
