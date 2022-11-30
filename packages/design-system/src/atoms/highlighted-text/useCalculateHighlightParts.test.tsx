import { useCalculateHighlightParts } from "./useCalculateHighlightParts";

describe("useCalculateHighlightParts", () => {
  it("should return the text if highlight is empty", () => {
    const text = "some text";
    const highlight = "";
    const parts = useCalculateHighlightParts(text, highlight, (callback) => callback());

    expect(parts).toEqual([text]);
  });

  it("should return the text if highlight is not found", () => {
    const text = "some text";
    const highlight = "highlight";
    const parts = useCalculateHighlightParts(text, highlight, (callback) => callback());

    expect(parts).toEqual([text]);
  });

  it("should return the text split by the highlight", () => {
    const text = "some text";
    const highlight = "text";
    const parts = useCalculateHighlightParts(text, highlight, (callback) => callback());

    expect(parts).toEqual(["some ", ""]);
  });

  it("should return the text split in multiple parts by the highlight", () => {
    const text = "some text text";
    const highlight = "text";
    const parts = useCalculateHighlightParts(text, highlight, (callback) => callback());

    expect(parts).toEqual(["some ", " ", ""]);
  });

  it("should return the text split in multiple words by the highlight", () => {
    const text = "some text more";
    const highlight = "text";
    const parts = useCalculateHighlightParts(text, highlight, (callback) => callback());

    expect(parts).toEqual(["some ", " more"]);
  });
});
