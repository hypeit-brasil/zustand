import { FormControl, FormLabel, Input, FormHelperText, Select, VStack, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAddressStore } from '../store/AddressStore';

const AddressForm: React.FC = () => {

  const [uf, setUf] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');

  const setAddressStore = useAddressStore(store => store.setAddress);
  const addressStore = useAddressStore(store => store.address);

  useEffect(() => {
    if (addressStore) {
      setUf(addressStore.uf);
      setAddress(addressStore.address);
      setComplement(addressStore.complement ?? '');
    }
  }, [addressStore]);

  const handleSubmit: React.FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setAddressStore({
      uf,
      address,
      complement
    })
  };

  return <VStack as={'form'} onSubmit={handleSubmit}>
    <FormControl>
      <FormLabel>Estado</FormLabel>
      <Select value={uf} onChange={e => setUf(e.target.value)} bg={'white'} placeholder='Selecione sua Unidade Federativa'>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </Select>
    </FormControl>
    <FormControl>
      <FormLabel>Seu Endereço</FormLabel>
      <Input value={address} onChange={e => setAddress(e.target.value)} bg={'white'} type='text' />
      <FormHelperText>Insira a rua e o número (se existente).</FormHelperText>
    </FormControl>
    <FormControl>
      <FormLabel>Complemento (opcional)</FormLabel>
      <Input value={complement} onChange={e => setComplement(e.target.value)} bg={'white'} type='text' />
    </FormControl>
    <Button disabled={address.length === 0 || uf.length === 0} alignSelf={'end'} colorScheme={'blue'} type='submit'>Salvar</Button>
  </VStack>;
}

export default AddressForm;