import { viacep } from "@/lib/axios";
import { ChangeEvent, useState } from "react";
import { AddressForm, MainContainer } from "./style";

interface AddressProps{
  localidade: string
  bairro: string
  logradouro: string
  uf: string
}

export default function CustomForm() {
  const [userCep, setUserCep] = useState("")
  const [address, setAddress] = useState<AddressProps>({} as AddressProps)

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUserCep(event.target.value);
  }

  async function handleSeachClick() {
    var address = await viacep.get(`${userCep}/json/`);
    setAddress(address.data);
  }

  return (
    <MainContainer>
      <div>
        <input
          type="text"
          name="cep"
          value={userCep}
          onChange={(e) => onInputChange(e)}
          placeholder="Insira o CEP e clique em Pesquisar"
        />
        <button onClick={() => handleSeachClick()}>Pesquisar</button>
      </div>
      <AddressForm>
        <div>
          <label htmlFor="destinatario">Destinatário</label>
          <input type="text" name="destinatario" />
        </div>
        <div>
          <label htmlFor="logradouro">Logradouro</label>
          <input type="text" name="logradouro" value={address.logradouro} />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input type="text" name="Bairro" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" />
        </div>
        <div>
          <label htmlFor="uf">UF</label>
          <input type="text" name="uf" />
        </div>
        <button>Criar</button>
      </AddressForm>
    </MainContainer>
  );
}
