import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import VolunteerForm from './VolunteerForm';
import VolunteerNotice from './VolunteerNotice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<VolunteerNotice />} />
          <Route path="/api/volunteerform" element={<VolunteerForm />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
