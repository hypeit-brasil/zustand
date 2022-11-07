import { Box, VStack, Text, Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react';
import { useAddressStore } from '../store/AddressStore';

const AddressSummary: React.FC = () => {

  const address = useAddressStore(state => state.address);

  return <VStack spacing={'4'} alignItems={'start'}>
    <Text alignSelf={'center'}>Revise as informações abaixo antes de confirmar a compra</Text>
    {
      address ?
        <>
          <Box>
            <Text fontWeight={'bold'}>Estado</Text>
            <Text fontSize={'lg'}>{address.uf}</Text>
          </Box>
          <Box>
            <Text fontWeight={'bold'}>Endereço</Text>
            <Text fontSize={'lg'}>{address.address}</Text>
          </Box>
          <Box>
            <Text fontWeight={'bold'}>Complemento</Text>
            <Text fontSize={'lg'}>{address.complement || 'Sem complemento'}</Text>
          </Box>
        </>
        :
        <Alert rounded={'md'} status='error'>
          <AlertIcon />
          <AlertTitle>Nenhum endereço cadastrado</AlertTitle>
        </Alert>
    }
  </VStack>;
}

export default AddressSummary;