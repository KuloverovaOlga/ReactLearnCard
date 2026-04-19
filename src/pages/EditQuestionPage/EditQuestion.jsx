import { useActionState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import QuestionForm from '../../components/QuestionForm';
import { dateFormat } from '../../helpers/dateFormate';

const editCardQuestion = async (_previousState, actionPayload) => {
  const { questionId, question, answer, description, resources, level } = Object.fromEntries(actionPayload);
  const clearForm = !!Object.fromEntries(actionPayload).clearForm;


  try {
    const res = await fetch(`${API_URL}/react/${questionId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        question,
        answer,
        description,
        resources: resources.length ? resources.trim().split(',') : [],
        level,
        clearForm,
        editDate: dateFormat(new Date())
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
      throw new Error(`error status: ${res.status}`);
    }

    const data = await res.json();

    toast.success(`Вопрос отредактирован`);
    return clearForm ? {} : data;
  } catch (e) {
    toast.error(`Произошла ошибка ${e.message}`);
    return {};
  }
};

const EditPage = ({ initalState }) => {
  const [state, formAction, isPending] = useActionState(editCardQuestion, { ...initalState, clearForm: false });
  return <QuestionForm formAction={formAction} state={state} isPending={isPending} btnText={'Редактировать вопрос'} />;
};

export default EditPage;
