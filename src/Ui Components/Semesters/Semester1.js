import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pdf1001 from "../../Img/pdf/all-1-year-mathematics-1-1001-nov-2022.pdf"
import pdf1002 from "../../Img/pdf/all-1-year-applied-physics-1-1002-nov-2022.pdf"
import pdf1003 from "../../Img/pdf/all-1-year-applied-chemistry-1003-nov-2022.pdf"
import pdf1004 from "../../Img/pdf/all-1-year-communication-skills-in-english-1004-nov-2022.pdf"

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
      <Box sx={{ borderBottom: 1, borderColor: 'divider',overflowX:"scroll" }}>
        <Tabs value={value} onChange={handleChange}  textColor="secondary"
        indicatorColor="secondary" centered>
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="1001" {...a11yProps(0)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="1002" {...a11yProps(1)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="1003" {...a11yProps(2)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="1004" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
<<<<<<< HEAD
      <iframe src={pdf1001} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
=======
        Item One

>>>>>>> 16742ce0bc57c192b9ce2dc48176fc559a494f24
      </TabPanel>
      <TabPanel value={value} index={1}>
      <iframe src={pdf1002} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <iframe src={pdf1003} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <iframe src={pdf1004} style={{width: "100%",height: "100vh",border: "none"}}></iframe>
      </TabPanel>
    </Box>
    </>
  )
}

export default Semesters