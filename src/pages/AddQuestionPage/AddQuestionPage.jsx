import cls from './AddQuestionPage.module.scss';
import { useActionState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import { ClearIcons } from '../../components/Icons';
import QuestionForm from '../../components/QuestionForm';

const createCardQuestion = async (_previousState, actionPayload) => {
  const { question, answer, description, resources, level, clearForm } = Object.fromEntries(actionPayload);
  try {
    const res = await fetch(`${API_URL}/react`, {
      method: 'POST',
      body: JSON.stringify({
        question,
        answer,
        description,
        resources: resources.length ? resources.trim().split(',') : [],
        level: +level,
        clearForm,
        editDate: undefined
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
      throw new Error(`error status: ${res.status}`);
    }

    const data = await res.json();

    toast.success(`Вопрос добавлен`);
    return clearForm ? {} : data;
  } catch (e) {
    toast.error(`Произошла ошибка ${e.message}`);
    return {};
  }
};

const AddQuestionPage = () => {
  const [state, formAction, isPending] = useActionState(createCardQuestion, { clearForm: true });

  return (
    <div className={cls.add}>
      <p className={cls.title}>Добавить вопрос</p>
      <div className={cls.content}>
      
        <QuestionForm formAction={formAction} state={state} isPending={isPending} btnText={'Добавить вопрос'}/>
      </div>
    </div>
  );
};

export default AddQuestionPage;
