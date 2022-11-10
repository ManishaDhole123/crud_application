
import "./ViewStudent.styles.css";
import { IStudent } from "./Student.type";

type Props = {
  onClose: () => void;
  data: IStudent;
};

const ViewStudent = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Student data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Email Add. : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent ;
