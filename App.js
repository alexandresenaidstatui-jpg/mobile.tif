import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Quem_E_Voce from './pages/quem_e_voce';
import Aluno from './pages/aluno';

export default function App() {
  const [pagina, setPagina] = useState('quem-e-voce');

  return (
    <>
      {pagina === 'quem-e-voce' ? (
        <Quem_E_Voce onAlunoContinue={() => setPagina('aluno')} />
      ) : (
        <Aluno />git commit -m "first commit"
      )}
      <StatusBar style="auto" />
    </>
  );
}
