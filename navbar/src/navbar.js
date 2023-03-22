import * as React from 'react';
import * as singleSpa from 'single-spa';

export default function BasicTabs() {
  const [value, setValue] = React.useState('calculadora');

  const handleChange = (newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 'calculadora':
        singleSpa.navigateToUrl('/')
        break;

      case 'receitas':
        singleSpa.navigateToUrl('/app1')
        break;
    
      default:
        break;
    }
  };

  return (
    <div style={{padding: '20px', display: 'flex', gap: '10px', background: '#d0d0d0'}}>
      <button onClick={() => handleChange('calculadora')}>Calculadora</button>
      <button onClick={() => handleChange('receitas')}>Receitas</button>
    </div>
  );
}
