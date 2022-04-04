import "./about.css";
import AnggiePerfil from "../../img/anggie-perfil.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AnggiePerfil}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Para ti <strong>03/10/22</strong></h1>
        <p className="a-sub">
          Espero hayas pasado un maravilloso día junto a los que más amas en este mundo y claro que sí,
          con el Señor de tu lado.
        </p>
        <p className="a-desc">
          No olvides que el Señor tiene grandes proezas en este mundo para ti, un mundo que recorrer y
          muchas cosas que aprender. No olvides que eres un ser maravilloso, quien tiene mucho que enseñar y
          que lo haces, día a día con quienes te rodean. Recuerda que cada día es una oportunidad grandiosa 
          para hacer lo que no hiciste ayer, para respirar, para sentirte viva y para disfrutar de todo lo que Dios
          te ha dado.
        </p>
        <br/>
        <p className="a-desc">
          Sabe cada día que tienes grandes tesoros en medio de tu vida, nunca te subestimes o pienses que no eres
          suficiente para este mundo, es más, este mundo necesita de personas como tú; créeme que jamás había aprendido 
          de una persona tanto como de ti.
        </p>
        <br />
        <p className="a-desc">
          Me siento tan feliz que cumplas un año más de vida, me hace gracia que veas en tu futuro a una persona de 
          edad avanzada, quien verá su juventud perdida; no obstante, yo siento que le agradeceré al Señor demasiado
          por cada año que cumplas, por cuanto será el certificado de que viviste, aprendiste y algo que más sabes hacer:
          amaste.
        </p>
      </div>
    </div>
  );
};

export default About;
