
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
    isLeft: true,
  },
  {
    id: 1,
    title: "Afternoon 1200",
    content: "This is for afternoon",
    isLeft: false,
  },
  {
    id: 2,
    title: "Evening 1600",
    content: "This is for evening",
    isLeft: true,
  },
  {
    id: 3,
    title: "Night 1900",
    content: "This is for night",
    isLeft: false,
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

  export default tabData;