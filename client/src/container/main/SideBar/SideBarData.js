import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export const SidebarData = [
  {
    title: '首頁',
    path: 'home',
    icon: <HomeRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: '測驗',
    path: 'personalitytest',
    icon: <BorderColorRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: '比較',
    path: 'jobcompare',
    icon: <AssessmentRoundedIcon />,
    cName: 'nav-text'
  },

];