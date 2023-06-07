import React from 'react'
import bg from "../Img/bg.png"
import bgt from "../Img/bgt.png"
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, price) {
  return {
    name,
    price,
    history: [
      {
        period: '1st',
        time: '9:15 AM - 10:15 AM',
        subject: "CS60022",
        teacher: "JM",
        classroom: "CL3",
      },
      {
        period: '2nd',
        time: '10:15 AM - 11:15 AM',
        subject: "CS60022",
        teacher: "JM",
        classroom: "CL3",
      },
      {
        period: '3rd',
        time: '11:15 AM - 12:15 PM',
        subject: "Anandam",
        teacher: "SSU",
        classroom: "CL3",
      },
      {
        period: '4th',
        time: '12:15 PM - 1:15 PM',
        subject: null,
      },
      {
        period: '5th',
        time: '1:45 PM - 2:45 PM',
        subject: "CS63333",
        teacher: "SS",
        classroom: "A107",
      },
      {
        period: '6th',
        time: '2:45 PM - 3:45 PM',
        subject: null,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{fontSize:"17px",fontWeight:"bold"}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;{row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                VI SEM
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Period</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">Teacher</TableCell>
                    <TableCell align="right">ClassRoom</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.period}>
                      <TableCell component="th" scope="row">
                        {historyRow.period}
                      </TableCell>
                      <TableCell>{historyRow.time}</TableCell>
                      <TableCell align="right">{historyRow.subject}</TableCell>
                      <TableCell align="right">
                        {historyRow.teacher}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.classroom}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        subject: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Monday', 159, 6.0, 24, 4.0, 3.99),
  createData('Tuesday', 237, 9.0, 37, 4.3, 4.99),
  createData('Wednesday', 262, 16.0, 24, 6.0, 3.79),
  createData('Thursday', 305, 3.7, 67, 4.3, 2.5),
  createData('Friday', 356, 16.0, 49, 3.9, 1.5),
  createData('Saturday', 356, 16.0, 49, 3.9, 1.5),
];

const Home = ({ newCallBack, activePage }) => {
  const navigate = useNavigate("")
  const phone = localStorage.getItem("phone")
  return (
    <>
      {/* ---Hero---- */}

      {!phone ? <Hero newCallBack={newCallBack} bg={bg} suphead="Welcome to EduVerse" head="Online Learning Platform for Khaitan Students " subhead="
Elevate Your Learning Experience: Stay Organized, Engaged, and Informed With Us." activePage={activePage} /> : <Hero newCallBack={newCallBack} bg={bgt} suphead="Welcome to EduVerse" head="Unleash Your Teaching Potential " subhead="Simplify Classroom Management: Take Control of Your Courses and Engage Students with Eduverse." activePage={activePage} />}

      {/* ---Hero-End---- */}

      {!phone && <section className="ftco-section">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Start Learning</span>
            <h2 className="mb-4">Browse By Semester</h2>
          </div>
        </div>
        <div className="container containerr row">
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester1") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="python">1st Semester</h2>
                <p className="python">4 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>01</h2>
            </div>
          </div>

          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester2") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="java">2nd Semester</h2>
                <p className="java">6 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>02</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester3") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="cSharp">3rd Semester</h2>
                <p className="cSharp">5 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>03</h2>
            </div>
          </div>
        </div>

        <div className="container containerr-2 row">
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester4") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="python">4th Semester</h2>
                <p className="python">6 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>04</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester5") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="cSharp">5th Semester</h2>
                <p className="cSharp">5 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>05</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester6") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="java">6th Semester</h2>
                <p className="java">4 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>06</h2>
            </div>
          </div>
        </div>

      </section>}
      {phone && <section id='time-table'>
        <Box sx={{ flexGrow: 1, margin: "30px 40px 0 40px" }} >
          <AppBar position="static" sx={{borderRadius:"10px" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Time Table
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <TableContainer component={Paper} sx={{ padding: "0 40px 30px 40px" }}>
          <Table aria-label="collapsible table">
            <TableBody sx={{backgroundColor:"#d2d8f7"}}>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </section>}


      {/* <section className="ftco-section ftco-about img">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="d-flex about-wrap">
                    <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about-1.jpg)' }}>
                    </div>
                    <div className="img-2 d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-md-5 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section">
                      <span className="subheading">Enhanced Your Skills</span>
                      <h2 className="mb-4">Learn Anything You Want Today</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                        right at the coast of the Semantics, a large language ocean. A small river named
                        Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p><a href="#" className="btn btn-primary">Get in touch with us</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default Home