import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import HomeItem from "./HomeItem"

describe("HomeItem", () => {
  it("renders a heading", () => {
    render(<HomeItem />)

    const heading = screen.getByText("Home", {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
