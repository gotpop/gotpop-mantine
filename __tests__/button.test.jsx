import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import Button from "../src/components/Button"
import { default as userEvent } from "@testing-library/user-event"

describe("Button", () => {
  it("renders a button", () => {
    render(<Button />)

    const button = screen.getByRole("button")

    expect(button).toBeDefined()
  })

  it("renders text", async () => {
    const user = userEvent.setup()
    render(<Button />)

    const button = screen.getByRole("button")
    await user.click(button)

    const text = screen.getByText(/Test/i)
    expect(text).toBeInTheDocument()
  })
})
