import { FunctionComponent } from 'react';
import styles from './logo.module.css';

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62.348"
        height="92.542"
        viewBox="0 0 62.348 92.542"
        className={styles.logo}
      >
        <g id="layer1" transform="translate(-5.753 -0.793)">
          <g id="layer4" transform="translate(5.753 0.793)">
            <g id="g1465">
              <g id="g1348" transform="translate(0.128 1.622)">
                <g id="layer2" transform="translate(15.073 22.586)">
                  <path
                    id="path1439"
                    d="M11.548,9.781a.762.762,0,0,0-.321,1.468l15.5,8.421,15.5-8.421a.763.763,0,1,0-.571-1.414L26.726,15.807,11.8,9.835a.761.761,0,0,0-.25-.053Z"
                    transform="translate(-10.749 -9.778)"
                    fill="#999"
                  />
                </g>
                <g id="g1366">
                  <path
                    id="path1430"
                    d="M34.3,2.355,61.551,29.609,34.582,18.823c-2.342.413-4.512,1.722-6.787,2.486l-20.752,8.3Z"
                    transform="translate(-3.247 -2.355)"
                    fill="#999"
                  />
                  <path
                    id="path1424"
                    d="M6.4,12.639l28.74,22.993c1.649.192,2.591-1.632,3.913-2.37L64.829,12.639,53.222,64.876,35.614,70.748,18,64.882Z"
                    transform="translate(-4.564 18.651)"
                    fill="#999"
                  />
                  <path
                    id="path1339"
                    d="M6.893,11.8c-1.859.435-.838,2.077-.637,3.375l11.59,52.155c1.2,1.235,3.2,1.242,4.74,1.964,4.752,1.534,9.474,3.258,14.245,4.674,6.2-1.868,12.335-4.084,18.509-6.085,1.12-1.309.909-3.311,1.473-4.91l11.2-50.412c-1.207-1.48-2.233.16-3.31.912L36.845,35.766,6.893,11.8Z"
                    transform="translate(-5.796 16.947)"
                    fill="#999"
                  />
                </g>
              </g>
              <path
                id="path1428"
                d="M36.39,1.822,5.753,32.957C7,34.1,8.373,32.629,9.69,32.337l27.241-10.9L67.073,33.5c2.14-.446-.45-1.686-1-2.584L37.472,1.822H36.39Z"
                transform="translate(-5.753 -1.822)"
                fill="#999"
              />
            </g>
          </g>
        </g>
      </svg>
      <h1 className={styles['logo-title']}>Alodi</h1>
    </div>
  );
};

export default Logo;
