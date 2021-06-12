import { createSlice } from "@reduxjs/toolkit";
/* Topics state has form: 
{
  topics: {
    topics: {
      '123': {
        id: '123',
        name: 'culture',
        icon: 'icon url',
        quizIds: ['456', '789']
      }
    }
  }
}
*/
export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    /* action.payload has form:
    {id: '123', name: 'culture', icon: 'icon url'}
    quizIds property will be added as an empty array
    */
    addTopic: (state, action) => {
      const newState = {
        ...action.payload,
        quizIds: [],
      };
      state.topics = {
        ...state.topics,
        [action.payload.id]: newState,
      };
    },
    addQuizId: (state, action) => {
      const topic = state.topics[action.payload.topicId];
      const quizzes = topic.quizIds;
      quizzes.push(action.payload.quizId);
    },
  },
});
export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
