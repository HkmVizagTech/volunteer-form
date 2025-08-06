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

function App() {
  return (
    <ChakraProvider theme={theme}>
    {/* <VolunteerForm/> */}
    <VolunteerNotice/>
    </ChakraProvider>
  );
}

export default App;
