import { Box, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const AddressSummary: React.FC = () => {
  return <VStack spacing={'4'} alignItems={'start'}>
    <Text alignSelf={'center'}>Revise as informações abaixo antes de confirmar a compra</Text>
    <Box>
      <Text fontWeight={'bold'}>Estado</Text>
      <Text fontSize={'lg'}>SP</Text>
    </Box>
    <Box>
      <Text fontWeight={'bold'}>Endereço</Text>
      <Text fontSize={'lg'}>Rua dos passarinhos, 89</Text>
    </Box>
    <Box>
      <Text fontWeight={'bold'}>Complemento</Text>
      <Text fontSize={'lg'}>apto 104</Text>
    </Box>
  </VStack>
}

export default AddressSummary;