// export {default} from './EritQuestionPage'

import { lazy } from 'react';

const EritQuestionPage = lazy(() => import('./EditQuestionPage'));

export { EritQuestionPage as default };


