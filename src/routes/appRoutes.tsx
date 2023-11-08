import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ResearchIndex from "../pages/research/ResearchIndex";

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import ScienceIcon from '@mui/icons-material/Science';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

// Part 1 File Imports
import Education from "../pages/Education";
import ProminentWorkExperiences from "../pages/ProminentWorkEx";
import HonoursAndAwards from "../pages/HonoursAwards";
import Skills from "../pages/Skills";
import ResearchPageLayout from "../pages/research/ResearchPageLayout";
import MusicxAI from "../pages/research/MusicxAI";
import AlgoMusic from "../pages/research/AlgoMusic";
import OtherPursuits from "../pages/OtherPursuits";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />
    },
  },
  {
    path: "/education",
    element: <Education />,
    state: "education",
    sidebarProps: {
      displayText: "Education",
      icon: <SchoolIcon />
    },
  },
  {
    path: "/experiences",
    element: <ProminentWorkExperiences />,
    state: "experiences",
    sidebarProps: {
      displayText: "Prominent Work Experiences",
      icon: <WorkHistoryIcon />
    },
  },
  {
    path: "/honoursawards",
    element: <HonoursAndAwards />,
    state: "honoursawards",
    sidebarProps: {
      displayText: "Honours and Awards",
      icon: <EmojiEventsIcon />
    },
  },
  {
    path: "/skills",
    element: <Skills />,
    state: "skills",
    sidebarProps: {
      displayText: "Skills",
      icon: <SkateboardingIcon />
    },
  },
  {
    path: "/researchprojects",
    element: <ResearchPageLayout />,
    state: "researchprojects",
    sidebarProps: {
      displayText: "Research Projects",
      icon: <ScienceIcon />
    },
    child: [
      {
        index: true,
        element: <ResearchIndex />,
        state: "researchprojects.index"
      },
      {
        path: "/researchprojects/MusicxAI",
        element: <MusicxAI />,
        state: "researchprojects.MusicxAI",
        sidebarProps: {
          displayText: "Music Performance x AI"
        },
      },
      {
        path: "/researchprojects/AlgoMusic",
        element: <AlgoMusic />,
        state: "researchprojects.AlgoMusic",
        sidebarProps: {
          displayText: "Algorithmic Music"
        },
      }
    ]
  },
  {
    path: "/otherpursuits",
    element: <OtherPursuits />,
    state: "otherpursuits",
    sidebarProps: {
      displayText: "Other Pursuits",
      icon: <VolunteerActivismIcon />
    }
  }
];

export default appRoutes;