import { Rocket } from "@/icons/dashboard/rocket"

type missionDataType = {
  key: string
  title: string
  description: string
  email: string
  phone: string
  image: JSX.Element
}[]

export const missionData: missionDataType = [
  {
    key: "launch",
    title: "Mars launch",
    description: "Die on the way to Mars",
    email: "dvcd",
    phone: "dvcdc",
    image: <Rocket />
  },
  {
    key: "orbit",
    title: "Mars orbit",
    description: "Die in orbit around Mars",
    email: "dvcd",
    phone: "dvcdc",
    image: <Rocket />
  },
  {
    key: "landing",
    title: "Mars landing",
    description: "Die on the surface of Mars",
    email: "dvcd",
    phone: "dvcdc",
    image: <Rocket />
  }
]
