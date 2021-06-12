import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";
/* Quizzes state has form:
{
  quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'question text',
        cardIds: ['101'],
      }
    }
  }
}
*/

/* Dispatch two actions: creating a new quiz and associating it with its topic
   by creating a thunk action creator.
   Payload has form:
   {
     id: '456',
     name: 'quiz name',
     topicId: '123',
     cardIds: ['101', '202'],
   }
 */
export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(
      addQuizId({
        topicId: payload.topicId,
        quizId: payload.id,
      })
    );
  };
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    /* action.payload has form: 
    {id: '456', name: 'quiz name', topicId: '123', cardIds: ['101', '202']}
    */
    addQuiz: (state, action) => {
      state.quizzes = {
        ...state.quizzes,
        [action.payload.id]: action.payload,
      };
    },
  },
});
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
