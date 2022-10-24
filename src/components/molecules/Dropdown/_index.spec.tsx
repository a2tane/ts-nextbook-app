import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import { theme } from "themes";
import Dropdown from ".";

describe("Dropdown", () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            {
              value: "used",
              label: "中古",
            },
            {
              value: "new",
              label: "新品",
            },
          ]}
          onChange={handleChange}
        ></Dropdown>
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDrop', async () => {
    await act(async () => {
        const element = await screen.findByTestId('dropdown-control')
        element && fireEvent.mouseDown(element)
    })

    const elements = await screen.getAllByTestId('dropdown-option')
    elements && fireEvent.click(elements[0])

    expect(handleChange).toHaveBeenCalledTimes(1)
  }
});
