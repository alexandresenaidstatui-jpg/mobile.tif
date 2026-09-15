import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import Quem_E_Voce from './pages/quem_e_voce';
import Aluno from './pages/aluno';
import Funcionario from './pages/funcionario';
import QualSeraMudanca from './pages/mudança';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pagina, setPagina] = useState('quem-e-voce');

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      {pagina === 'quem-e-voce' ? (
        <Quem_E_Voce
          onAlunoContinue={() => setPagina('aluno')}
          onFuncionarioContinue={() => setPagina('funcionario')}
        />
      ) : pagina === 'funcionario' ? (
        <Funcionario onCadastroConcluido={() => setPagina('mudança')} />
      ) : pagina === 'mudança' ? (
        <QualSeraMudanca />
      ) : (
        <Aluno onCadastroConcluido={() => setPagina('mudança')} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
