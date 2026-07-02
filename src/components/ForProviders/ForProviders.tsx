import { ProviderHero } from './ProviderHero';
import { ProviderBenefits } from './ProviderBenefits';
import { ProviderHowItWorks } from './ProviderHowItWorks';
import { DataPrivacy } from '../DataPrivacy/DataPrivacy';
import { ProviderCta } from './ProviderCta';

export function ForProviders() {
  return (
    <>
      <ProviderHero />
      <ProviderBenefits />
      <ProviderHowItWorks />
      <DataPrivacy ns="forProviders" />
      <ProviderCta />
    </>
  );
}
