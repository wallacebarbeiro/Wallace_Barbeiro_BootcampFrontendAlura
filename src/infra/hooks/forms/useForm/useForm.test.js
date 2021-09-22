import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      // Função para receber o resultado do hook a primeira vez
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Teste',
        },
      }));
      const initialValues = { nome: 'Teste' };
      expect(result.current.values).toEqual(initialValues);

      // simulando o event
      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Novo nome',
        },
      };

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.values).toEqual({ nome: 'Novo nome' });
    });
  });
});
