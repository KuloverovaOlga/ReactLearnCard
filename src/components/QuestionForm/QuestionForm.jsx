import cls from './QuestionForm.module.scss';
import { Button } from '../ui';
const QuestionForm = ({ formAction, state, isPending, btnText }) => {
  return (
    <form className={cls.form} action={formAction}>
      <input type="" name="questionId" defaultValue={state.id} id="questionId" hidden />
      <div className={cls.labels}>
        <div className={cls.label}>
          <label htmlFor="question" className={cls.name}>
            Вопрос
          </label>
          <input defaultValue={state.question} type="text" name="question" id="question" required placeholder="Введите название вопроса" />
        </div>
        <div className={cls.label}>
          <label htmlFor="answer" className={cls.name}>
            Которкий ответ
          </label>
          <input defaultValue={state.answer} type="text" name="answer" id="answer" required placeholder="Введите короткий ответ" />
        </div>
        <div className={cls.label}>
          <label htmlFor="description" className={cls.name}>
            Описание
          </label>
          <textarea
            defaultValue={state.description}
            type="text"
            name="description"
            id="description"
            rows="5"
            required
            placeholder="Введите описание вопроса"
          />
        </div>
        <div className={cls.label}>
          <label htmlFor="resources" className={cls.name}>
            Ресурсы
          </label>
          <textarea
            defaultValue={state.resources}
            type="text"
            name="resources"
            id="resources"
            rows="3"
            placeholder="Пожалуйста, введите ресурсы, разделяя их запятыми"
          />
        </div>

        <div className={cls.label}>
          <label htmlFor="level" className={cls.name}>
            Сложность
          </label>
          <select  key={state.level} name="level" id="level" defaultValue={`${state.level}`}>
            <option disabled>Уровень сложности</option>
            <hr />
            <option value="1">1 - Простой</option>
            <option value="2">2 - Средний</option>
            <option value="3">3 - Сложный</option>
          </select>
        </div>
        <div className={cls.label}>
          <label htmlFor="clearForm" className={cls.clearFormControl}>
            <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearForm" defaultChecked={state.clearForm} />
            <span>Очистить форму после отправки?</span>
          </label>
        </div>
      </div>
      <Button isDisabled={isPending}>{btnText}</Button>
    </form>
  );
};

export default QuestionForm;
