import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Splash from './pages/splash';
import Quem_E_Voce from './pages/quem_e_voce';
import Aluno from './pages/aluno';
import Funcionario from './pages/funcionario';
import QualSeraMudanca from './pages/mudança';

export default function App() {
  const [pagina, setPagina] = useState('quem-e-voce');
  const [splashReady, setSplashReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashReady(true), 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!splashReady) {
    return <Splash />;
  }

  return (
    <>
      {pagina === 'quem-e-voce' ? (
        <Quem_E_Voce
          onAlunoContinue={() => setPagina('aluno')}
          onFuncionarioContinue={() => setPagina('funcionario')}
        />
      ) : pagina === 'funcionario' ? (
        <Funcionario
          onVoltar={() => setPagina('quem-e-voce')}
          onCadastroConcluido={() => setPagina('mudança')}
        />
      ) : pagina === 'mudança' ? (
        <QualSeraMudanca />
      ) : (
        <Aluno
          onVoltar={() => setPagina('quem-e-voce')}
          onCadastroConcluido={() => setPagina('mudança')}
        />
      )}
      <StatusBar style="auto" />
    </>
  );
}
