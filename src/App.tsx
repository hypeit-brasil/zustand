import { Box, Container } from '@chakra-ui/react';
import AddressForm from './components/AddressForm';
import AddressSummary from './components/AddressSummary';

export const App = () => {
  return <Container maxW={'container.lg'} py={'10'}>
    <Box p={4} rounded='md' shadow={'base'} bg={'gray.50'}>
      <AddressForm />
    </Box>
    <Box mt={4}  p={4} rounded='md' shadow={'base'} bg={'gray.50'}>
      <AddressSummary />
    </Box>
  </Container>;
}

export default App;