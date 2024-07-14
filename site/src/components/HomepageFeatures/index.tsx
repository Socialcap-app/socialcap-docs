import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import BlueHero from '@site/static/img/BlueHero.png';
import PinkHero from '@site/static/img/PinkHero.png';
import RedHero from '@site/static/img/RedHero.png';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  // {
  //   title: 'Features',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Ver src/components/HomePageFeatures
  //     </>
  //   ),
  // },
  {
    title: 'Power up your community',
    imgSrc: BlueHero,
    description: (
      <>
        Supercharge your community's potential by leveraging the collective 
        wisdom and trust of its members. 
      </>
    ),
  },
  {
    title: 'Build Social Consensus',
    imgSrc: PinkHero,
    description: (
      <>
        Ensure that every decision reflects the collective will with multiple 
        voting strategies. 
      </>
    ),
  },
  {
    title: 'Fuel Engagement, Foster Growth',
    imgSrc: RedHero,
    description: (
      <>
        Utilize rigorously validated credentials to reshape community interaction.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt='Demostration' className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
