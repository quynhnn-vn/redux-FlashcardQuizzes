import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { selectQuizzes } from "./quizzesSlice"
import ROUTES from "../../app/routes";

export const Quizzes = () => {
    const quizzes = useSelector(selectQuizzes);
    return (
        <section className="center">
            <h1>Quizzes</h1>
            <ul className="quizzes-list">
                {Object.values(quizzes).map(quiz => (
                    <Link to={ROUTES.quizRoute(quiz.id)} key={quiz.id}>
                        <li className="quiz">{quiz.name}</li>
                    </Link>
                ))}
            </ul>
            <Link to={ROUTES.newQuizRoute()} className="button">
                Create New Quiz
            </Link>
        </section>
    )
}