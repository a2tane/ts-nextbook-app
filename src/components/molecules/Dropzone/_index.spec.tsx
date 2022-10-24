import { fireEvent, RenderResult, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Dropzone from ".";

describe("", () => {
  let renderResult: RenderResult;
  let handleDrop: jest.Mock;

  beforeEach(() => {
    handleDrop = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropzone onDrop={handleDrop} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("", async () => {
    const element = await screen.findByTestId("dropzone");
    fireEvent.drop(element, {
      dataTransfer: {
        files: [new File(["()"], "chucknorris.png", { type: "image/png" })],
      },
    });

    expect(handleDrop).toHaveBeenCalledTimes(1);
  });
});
