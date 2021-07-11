import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, 
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from "./routes";

import { NewTopicForm } from "../components/NewTopicForm";
import { Topic } from "../features/topics/Topic";
import { Topics } from "../features/topics/Topics";

import { NewQuizForm } from "../components/NewQuizForm";
import { Quiz } from "../features/quizzes/Quiz";
import { Quizzes } from "../features/quizzes/Quizzes";
import { loadQuizzes } from '../features/quizzes/quizzesSlice';
import { loadTopics } from "../features/topics/topicsSlice";
import { loadCards } from "../features/cards/cardsSlice";
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopics());
    dispatch(loadQuizzes());
    dispatch(loadCards());
  }, [dispatch]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()} activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()} activeClassName="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()} activeClassName="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/topics">
          <TopicsRoutes />
        </Route>
        <Route path="/quizzes">
          <QuizRoutes />
        </Route>

      </Switch>
    </Router>
  )
};

const TopicsRoutes = () => {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTopicForm />
        </Route>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  );
}

const QuizRoutes = () => {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewQuizForm />
        </Route>
        <Route path={`${match.path}/:quizId`}>
          <Quiz />
        </Route>
        <Route path={`${match.path}`}>
          <Quizzes />
        </Route>
      </Switch>
    </>
  )
}

export default App;