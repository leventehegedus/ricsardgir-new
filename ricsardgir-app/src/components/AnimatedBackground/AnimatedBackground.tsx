export const AnimatedBackground: React.FC = () => {

  const renderKoalas = () => {
    let lis = [];
    for (let i = 0; i < 10; i++) {
      lis.push(
        <li key={i}>
          <img src="http://ricsardgir.com/assets/fav.png" />
        </li>
      )
    }
    return lis;
  }
  return (
    <div className="area" >
      <ul className="circles">
        {renderKoalas()}
      </ul>
    </div >
  )
}

export default AnimatedBackground;
