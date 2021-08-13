import Logo from '../../assets/logo.svg';

import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import YouTube from '../../assets/youtube.svg';

import './styles.scss'

export function NavBar() {
  return (
    <nav>
      <img src={Logo} />
      <ul>
        <li><img src={Facebook} /></li>
        <li><img src={YouTube} /></li>
        <li><img src={Instagram} /></li>
        <li><img src={Twitter} /></li>
      </ul>
    </nav>
  );
}