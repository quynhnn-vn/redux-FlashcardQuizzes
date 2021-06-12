import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";

export const NewTopicForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTopic({
        id: uuidv4(),
        name: name,
        icon: icon,
      })
    );
    history.push(ROUTES.topicsRoute());
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            placeholder="Topic Name"
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <select
            defaultValue="default"
            required
            onChange={(e) => setIcon(e.currentTarget.value)}
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
};
