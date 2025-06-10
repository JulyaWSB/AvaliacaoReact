import { Route, Routes } from "react-router";
import Home from "../Pages/Home/home";
import { Tasks } from "../Pages/TaskList/tasks";
import { Message } from "../Pages/Message/message";
import { Theme } from "../Pages/Theme/theme";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/message" element={<Message />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}
