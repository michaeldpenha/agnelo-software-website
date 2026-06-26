'use client';

import { AboutStory } from './AboutStory';
import { AboutStats } from './AboutStats';
import { AboutValues } from './AboutValues';
import type { SanitySiteSettings } from '../../types/sanity';
import styles from './About.module.css';

interface Props {
  siteSettings?: SanitySiteSettings | null;
}

export function About({ siteSettings }: Props) {
  return (
    <section id="about" className={`section section-alt ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <AboutStory siteSettings={siteSettings} />
          <div className={styles.right}>
            <AboutStats />
            <AboutValues />
          </div>
        </div>
      </div>
    </section>
  );
}
