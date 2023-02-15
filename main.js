
import { render, router } from "./lib";
import AddProjectContact from "./pages/admin/contact/AddProjectContact";
import ProjectContact from "./pages/admin/contact/ProjectContact";
import UpdateProjectContact from "./pages/admin/contact/UpdateProjectContact";
import AddProjectMenu from "./pages/admin/menu/AddProjectMenu";
import ProjectMenu from "./pages/admin/menu/ProjectMenu";
import UpdateProjectMenu from "./pages/admin/menu/UpdateProjectMenu";
import AddProjectPortfolio from "./pages/admin/portfolio/AddProjectPortfolio";
import ProjectPortfolio from "./pages/admin/portfolio/ProjectPortfolio";
import UpdateProjectPortfolio from "./pages/admin/portfolio/UpdateProjectPortfolio";
import AddProjectPost from "./pages/admin/posts/AddProjectPost";
import ProjectPosts from "./pages/admin/posts/ProjectPosts";
import EditProjectPost from "./pages/admin/posts/UpdateProjectPost";
import AddProjectProfile from "./pages/admin/profile/AddProjectProfile";
import ProjectProfile from "./pages/admin/profile/ProjectProfile";
import UpdateProjectProflie from "./pages/admin/profile/UpdateProjectProflie";
import AddprojectServices from "./pages/admin/servicess/AddprojectServices";
import ProjectServicess from "./pages/admin/servicess/ProjectServicess";
import UpdateProjectServicess from "./pages/admin/servicess/UpdateProjectServicess";
import AddProjectSkill from "./pages/admin/skill/AddProjectSkill";
import ProjectSkill from "./pages/admin/skill/ProjectSkill";
import UpdateProjectSkill from "./pages/admin/skill/UpdateProjectSkill";
import HomePage from "./pages/clients/home";

// client app
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/admin/posts/projectpost", () => render(ProjectPosts, app));
router.on("/admin/posts/projectpost/add", () => render(AddProjectPost, app))
router.on("/admin/posts/projectpost/:id/edit", ({ data }) => render(() => EditProjectPost(data), app))
router.on("/admin/servicess/projectservicess", () => render(ProjectServicess, app))
router.on("/admin/servicess/projectservicess/add", () => render(AddprojectServices, app))
router.on("/admin/servicess/projectservicess/:id/edit", ({ data }) => render(() => UpdateProjectServicess(data), app))
router.on("/admin/portfolio/projectportfolio", () => render(ProjectPortfolio, app))
router.on("/admin/portfolio/projectportfolio/add", () => render(AddProjectPortfolio, app))
router.on("/admin/portfolio/projectportfolio/:id/edit", ({ data }) => render(() => UpdateProjectPortfolio(data), app))
router.on("/admin/contact/projectcontact", () => render(ProjectContact, app))
router.on("/admin/contact/projectcontact/add", () => render(AddProjectContact, app))
router.on("/admin/contact/projectcontact/:id/edit", ({ data }) => render(() => UpdateProjectContact(data), app))
router.on("/admin/profile/projectprofile", () => render(ProjectProfile, app))
router.on("/admin/profile/projectprofile/add", () => render(AddProjectProfile, app))
router.on("/admin/profile/projectprofile/:id/edit", ({ data }) => render(() => UpdateProjectProflie(data), app))
router.on("/admin/menu/projectmenu", () => render(ProjectMenu, app))
router.on("/admin/menu/projectmenu/add", () => render(AddProjectMenu, app))
router.on("/admin/menu/projectmenu/:id/edit", ({ data }) => render(() => UpdateProjectMenu(data), app))
router.on("/admin/skill/projectskill", () => render(ProjectSkill, app))
router.on("/admin/skill/projectskill/add", () => render(AddProjectSkill, app))
router.on("/admin/skill/projectskill/:id/edit", ({ data }) => render(() => UpdateProjectSkill(data), app))
router.resolve();
