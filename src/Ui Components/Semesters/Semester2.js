import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pdf2001 from "../../Img/pdf/Maths 2002 Tut File All.pdf"
import pdf2002 from "../../Img/pdf/Physics 2002 All tuts 1 to 10.pdf"
import pdf2003 from "../../Img/pdf/Mechanics 2005 All Tuts .pdf"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Semesters = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  textColor="secondary"
        indicatorColor="secondary" centered>
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="2001" {...a11yProps(0)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="2002" {...a11yProps(1)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="2003" {...a11yProps(2)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="2004" {...a11yProps(3)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="2005" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <iframe src={pdf2001} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <iframe src={pdf2002} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <iframe src={pdf2003} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <iframe src={pdf2003} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <iframe src={pdf2003} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
<<<<<<< HEAD
      <TabPanel value={value} index={5}>
      <iframe src={pdf2003} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
=======
>>>>>>> 16742ce0bc57c192b9ce2dc48176fc559a494f24
    </Box>
    </>
  )
}

export default Semesters