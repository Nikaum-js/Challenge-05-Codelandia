import Ghosts from '../../assets/ilustracao.png';
import Play from '../../assets/play.svg';

import './styles.scss'

export function Content() {
  return (
  <>
      <section>
        <h2>HAYAO MIYAZAKI</h2>
        <h1>A VIAGEM DE CHIHIRO</h1>
        <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>

        <button id="watch"> 
          <img src={Play} /> 
          ASSISTIR AGORA
        </button>

        <button id="trailer">ASSISTA O TRAILER</button>
      </section>

        <img className="ilustracao" src={Ghosts} />
  </>
  );
}