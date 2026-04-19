// export {default} from './AddQuestionPage'

import { lazy } from 'react';

const AddQuestionPage = lazy(() => import('./AddQuestionPage'));

export { AddQuestionPage as default };


