
import Navigation from './navBar';
import RouteOne from './Routes';
import WebSnackbar from './snackBar';
import { connect } from 'react-redux';
import { userState } from './component/Student.type';

const mapState = (state: userState) => ({
  action:state.action
}
) 

function App(props:any) {
  return (
    <div className="App">
      <Navigation />
      <RouteOne />
      {props &&  <WebSnackbar  key={Math.random()} message={props.action.msg} openStatus ={props.action.open} /> }
      
    </div>
  );
}

export default connect(mapState) (App);
