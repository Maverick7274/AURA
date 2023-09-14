
const timeline1 = [
    {
      id: 0,
      title: "Morning 1100",
      content: "This is for morning",
      isLeft: true,
    },
    {
      id: 1,
      title: "Afternoon 1300",
      content: "This is for afternoon",
      isLeft: false,
    },
    {
      id: 2,
      title: "Evening 1700",
      content: "This is for evening",
      isLeft: true,
    },
    {
      id: 3,
      title: "Night 2000",
      content: "This is for night",
      isLeft: false,
    },
]


const timeline2 = [
  {
    id: 0,
    title: "Morning 1000",
    content: "This is for morning",
    isLeft: false,
  },
  {
    id: 1,
    title: "Afternoon 1200",
    content: "This is for afternoon",
    isLeft: true,
  },
  {
    id: 2,
    title: "Evening 1600",
    content: "This is for evening",
    isLeft: false,
  },
  {
    id: 3,
    title: "Night 1900",
    content: "This is for night",
    isLeft: true,
  },
]


const timeline3 = [
  {
    id: 0,
    title: "Morning 0900",
    content: "This is for morning",
    isLeft: true,
  },
  {
    id: 1,
    title: "Afternoon 1100",
    content: "This is for afternoon",
    isLeft: false,
  },
  {
    id: 2,
    title: "Evening 1500",
    content: "This is for evening",
    isLeft: true,
  },
  {
    id: 3,
    title: "Night 1800",
    content: "This is for night",
    isLeft: false,
  },
]

const tabData = [
    { 
      id: 0,
      title: "Day 1",
      content: `<Timeline timelineData={${JSON.stringify(timeline1)}} /> `,
      isActive: true,
    },
    {
      id: 1,
      title: "Day 2",
      content: `<Timeline timelineData={${JSON.stringify(timeline2)}} /> `,
      isActive: false,
    },
    {
      id: 2,
      title: "Day 3",
      content: `<Timeline timelineData={${JSON.stringify(timeline3)}} /> `,
      isActive: false,
    },
  ]





  const scheduleData = [
    {
      id: 0,
      title: "Morning 0900",
      content: "Welcome and Registration of Delegates for IC3I",
      isLeft: true,
    },
    {
      id: 1,
      title: "Morning 0930",
      content: "Research Paper Presentation at Designated Venues",
      isLeft: false,
    },
    {
      id: 2,
      title: "Morning 1100",
      content: "Tea for Conference Delegates",
      isLeft: true,
    },
    {
      id: 3,
      title: "Afternoon 1300",
      content: "Lunch for IC3I Delegates and Presenters",
      isLeft: false,
    },
    {
      id: 4,
      title: "Afternoon 1400",
      content: "Research Paper Presentation at Designated Venues",
      isLeft: true,
    },
    {
      id: 5,
      title: "Evening 1600",
      content: "Welcome address by Master of Ceremony",
      isLeft: false,
    },
    {
      id: 6,
      title: "Evening 1605",
      content: "Final Round of Mr/Ms Freshers of AUGN 2023",
      isLeft: true,
    },
    {
      id: 7,
      title: "Evening 1700",
      content: "Fashion Show",
      isLeft: false,
    },
    {
      id: 8,
      title: "Evening 1815",
      content: "Salman-Zaman Live Concert",
      isLeft: true,
    },
    {
      id: 9,
      title: "Evening 2000",
      content: "Surprise Celebrity Performance",
      isLeft: false,
    },
    {
      id: 10,
      title: "Evening 2045",
      content: "DJ Music by Switchers",
      isLeft: true,
    },
  ]

  export {tabData, scheduleData};