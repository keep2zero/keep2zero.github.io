import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CX UI',
    img: require('@site/static/img/cxui-logo.png').default,
    description: (
      <>
        一个基于Flutter的界面UI组件.
      </>
    ),
  },
  
  
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
