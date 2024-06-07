import { Layout } from "@/containers";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Projects from "./Projects";
import Project from "./Projects/Project";
import {
  Brands,
  ComputerCategories,
  Games,
  Orders,
  ProductCategories,
  Programs,
} from "./Prooving";
import Dashboard from "./Dashboard";
import { NotFound } from "..";
import { Collaborators } from "./Management";
import { Board } from "./Kanban";
import NevoQuote from "./Nevobit/Quote";
import CreatePost from "./Blog/Create";
import Blog from "./Blog";
import Computers from "./Prooving/Computers";

const Private = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<Project />} />
        <Route path="kanban" element={<Board />} />
        <Route path="/kanban/issues/:issueId" element={<Board />} />
        <Route path="/projects/issues/:issueId" element={<Projects />} />
        <Route
          path="/projects/:projectId/issues/:issueId"
          element={<Project />}
        />

        {/* PROOVING */}
        <Route path="products" element={<Products />} />
        <Route path="computers" element={<Computers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="brands" element={<Brands />} />
        <Route path="games" element={<Games />} />
        <Route path="programs" element={<Programs />} />
        <Route path="products-categories" element={<ProductCategories />} />
        <Route path="computers-categories" element={<ComputerCategories />} />

        <Route path="collaborators" element={<Collaborators />} />
        <Route path="*" element={<NotFound />} />

        {/* NEVOBIT */}
        <Route path="nevo-quote" element={<NevoQuote />} />
       
        {/* ENTERPRISE */}
        <Route path="blogs" element={<Blog />} />
        <Route path="create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default Private;
