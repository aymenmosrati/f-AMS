import "../table_create_prj.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../constant/Constant"

const Tab_Question = (props) => {
  const { Questions } = props.data;
  // console.log(Questions);
  const deleteQuestion = (id) => {
    axios.delete(`${URL}/delete_question/${id}`)
      .then((response) => {
         window.location.reload(false)
      })
      .catch((error) => { console.log(error) })
  };

  return (

    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">question</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell className="tableCell">{question.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{question.Questions}</div>
              </TableCell>

              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to={`/questions/${question.id}`} style={{ textDecoration: "none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                  <div 
                    className="deleteButton"
                    onClick={() => deleteQuestion(question.id)}
                  >
                    Delete
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tab_Question;
