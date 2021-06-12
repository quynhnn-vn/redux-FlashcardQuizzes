const ROUTES = {
  // Create topics
  newTopicRoute: () => "/topics/new",

  // View an individual topic and all quizzes for that topic
  topicRoute: (id) => `/topics/${id}`,

  // View all topics and can be redirected to an individual topic
  topicsRoute: () => "/topics",

  // Create quizzes that link with topics and contain flashcards
  newQuizRoute: () => "/quizzes/new",

  // View an individual quiz and flip cards over
  quizRoute: (id) => `/quizzes/${id}`,

  // View all quizzes and can be redirected to an individual quiz
  quizzesRoute: () => "/quizzes",
};
export default ROUTES;
