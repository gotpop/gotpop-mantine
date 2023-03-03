import { imgPaths } from "@/utils/imgPaths";

export const radioData = [
    {
        id: 1,
        value: "launch",
        label: "Mars Test Launch",
        description:
            "In the tech world we like to say 'move fast and break things' ... only this time we're talking about you.",
        img: imgPaths.img2,
        stat: {
            label: "Heroic deaths",
            stats: "85%",
            progress: 85,
            color: "red",
            icon: "up"
        }
    },
    {
        id: 2,
        value: "orbit",
        label: "Mars Orbit",
        description: "If the radiation doesn't get you then talking about Tesla for over 6 months will.",
        img: imgPaths.img4,
        stat: {
            label: "Heroic deaths",
            stats: "79%",
            progress: 79,
            color: "red",
            icon: "up"
        }
    },
    {
        id: 3,
        value: "landing",
        label: "Mars Landing",
        description: "You're alone. You drink recycled urine. This is your life now.",
        img: imgPaths.img3,
        stat: {
            label: "Heroic deaths",
            stats: "67%",
            progress: 67,
            color: "red",
            icon: "down"
        }
    }
]