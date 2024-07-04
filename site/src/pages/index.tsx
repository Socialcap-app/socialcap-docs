import React from 'react'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  let isPhone = window.innerWidth < 750;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={"hero__title " + styles.zIndexTen}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={"button button--secondary button--lg " + styles.zIndexTen + ' ' + styles.fiveMinutesTitle }
            to="/docs/intro">
            Socialcap in less than 5 min ⏱️
          </Link>
          <div
            className={styles.square + ' ' + (isPhone ? styles.oneMobile : styles.one)}
          ></div>
          <div
            className={styles.square + ' ' + (isPhone ? styles.twoMobile : styles.two)}
          ></div>
          <div
            className={styles.square + ' ' + (isPhone ? styles.threeMobile : styles.three)}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
