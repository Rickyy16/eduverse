import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pdf2001 from "../../Img/pdf/Chapter 1 - Advance Computer Networks.pdf"
import pdf2002 from "../../Img/pdf/Chapter 1 - Advance Computer Networks.pdf"
import pdf2003 from "../../Img/pdf/Chapter 1 - Advance Computer Networks.pdf"


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
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="CS 3001" {...a11yProps(0)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="CS 3002" {...a11yProps(1)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="CS 3003" {...a11yProps(2)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="CS 3004" {...a11yProps(3)} />
          <Tab sx={{ fontWeight:"600",fontSize:"18px" }} label="CS 3005" {...a11yProps(4)} />
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
    </Box>
    </>
  )
}

export default Semesters