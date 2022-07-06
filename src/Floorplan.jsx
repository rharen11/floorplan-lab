import './App.css';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import Bath from './Bath';
import LivingRoom from './LivingRoom';

function Floorplan(props){

return (
    <>
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bath bathSize={"Half"}/>
      <Bedroom bedNum={3}/>
      <Bath bathSize={"Full"}/>
    </div>
    </>
  )
}

export default Floorplan