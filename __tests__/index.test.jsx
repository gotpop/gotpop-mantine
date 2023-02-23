import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import Article from "../src/components/Article"

const testData = {
  title: "Top 10 places to visit in Norway this summer",
  image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  date: "August 18, 2022",
  id: "1",
}

describe("HomeItem", () => {
  it("renders a heading", () => {
    render(<Article articleData={testData} />)

    const heading = screen.getByText("Top 10 places to visit in Norway this summer")

    expect(heading).toBeInTheDocument()
  })

  it("Renders a date", () => {
    render(<Article articleData={testData} />)

    const date = screen.getByText("August 18, 2022")

    expect(date).toBeInTheDocument()
  })
})
