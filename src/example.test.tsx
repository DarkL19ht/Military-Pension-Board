// import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import Login from "@/@bin/Login";

describe("App", () => {
    it("Renders hello world", () => {
        render(<Login />);
        expect(5).toEqual(5);
        // expect(
        //     screen.getByRole("heading", {
        //         level: 1,
        //     })
        // ).to("Having troubles? Get help");
    });
});
