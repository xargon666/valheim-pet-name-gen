import { describe, test, expect, beforeEach, it } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
const user = userEvent.setup();
describe("App", () => {
    let container: HTMLElement;
    let petNameElement: HTMLElement;
    let copyButton: HTMLElement;
    let generateButton: HTMLElement;

    beforeEach(() => {
        container = render(<App />).container;
        petNameElement = container.querySelector("#pet-name") as HTMLElement;
        generateButton = container.querySelector("#generate-btn") as HTMLElement;
        copyButton = container.querySelector("#copy-btn") as HTMLElement;
    });

    describe("generate button", () => {
        it("generates a new random pet name", async () => {
            const currentText = petNameElement.textContent;
            await user.click(generateButton);
            expect(petNameElement.textContent).not.toBe(currentText);
        });
    });

    describe("copy button", async() => {
        it('displays initial button text as "Copy"', () => {
            expect(copyButton.textContent).toBe("Copy");
        });
        it("copies the pet name and changes button text", async() => {
            await user.click(copyButton);
            expect(copyButton.textContent).toBe("Copied!");
        });
        it("changes back to 'Copy' after a delay",async()=>{
            await user.click(copyButton);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            expect(copyButton.textContent).toBe("Copy");
        })
    });

    test("renders without errors", () => {
        expect(container).toBeTruthy();
    });

    test('displays initial pet name as "Blob"', () => {
        expect(petNameElement.textContent).toBe("Blob");
    });
});
